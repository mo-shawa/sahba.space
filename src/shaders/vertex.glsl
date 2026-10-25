// One particle cloud, three bodies. Every particle knows where it sits in the
// galaxy, on Earth and in a desert landscape; uStage blends between them:
//   0 = galaxy, 1 = Earth, 2 = ground, 3 = Earth again (a distant dot).

uniform float uTime;
uniform float uStage;
uniform float uTwist;
uniform float uSize;
uniform float uMaxSize;
uniform float uSizeScale;
uniform float uLens;
uniform float uDustScale;
uniform mat3 uGalaxyRotation;
uniform mat3 uEarthRotation;
uniform vec3 uSun;

attribute vec3 aGalaxy;
attribute vec3 aEarth;
attribute vec3 aGround;
attribute vec3 aGalaxyColor;
attribute vec4 aSeed;     // x: stagger, y: size/twinkle, z/w: drift direction
attribute vec2 aSurface;  // x: earth kind (0 ocean, 1 land, 2 Jordan, 3 air, 4 dust), y: ground light

varying vec3 vColor;

const float PI = 3.14159265;

vec3 galaxyPosition() {
    // Differential rotation in the galaxy's own plane, so tilting it later
    // never changes the shape of the arms.
    vec3 p = aGalaxy;
    float radius = length(p.xz);
    float angle = atan(p.x, p.z) + (1.0 / radius) * uTwist * 0.1;
    p.x = cos(angle) * radius;
    p.z = sin(angle) * radius;
    return uGalaxyRotation * p;
}

vec3 earthPosition() {
    vec3 p = uEarthRotation * aEarth;
    return aSurface.x > 3.5 ? p * uDustScale : p;
}

vec3 earthColor() {
    float kind = aSurface.x;
    vec3 normal = uEarthRotation * normalize(aEarth);
    float light = smoothstep(-0.2, 0.45, dot(normal, uSun));

    if (kind < 0.5) return vec3(0.10, 0.24, 0.66) * (0.1 + light * 0.7);
    if (kind < 1.5) return vec3(1.0, 0.93, 0.8) * (0.06 + light * 1.25);
    if (kind < 2.5) return vec3(1.0, 0.66, 0.3) * (0.7 + light * 0.9);
    if (kind < 3.5) return vec3(0.45, 0.68, 1.0) * (0.05 + light * 0.8);
    return vec3(0.6, 0.62, 0.72) * 0.55;
}

vec3 groundColor() {
    if (aSurface.x > 3.5) return vec3(0.6, 0.62, 0.72) * 0.55;
    // Low sun: warm sandstone in the light, violet in the shade.
    vec3 shade = vec3(0.1, 0.07, 0.16);
    vec3 sand = vec3(1.0, 0.7, 0.46) * 1.3;
    return mix(shade, sand, aSurface.y);
}

float earthSize() {
    float kind = aSurface.x;
    return kind > 3.5 ? 0.8 : (kind < 0.5 ? 0.42 : 0.55);
}

// Staggered, eased local progress for this particle within a transition.
float stagger(float t) {
    float delay = aSeed.x * 0.45;
    return smoothstep(0.0, 1.0, clamp((t - delay) / 0.55, 0.0, 1.0));
}

void main() {
    vec3 from;
    vec3 to;
    vec3 fromColor;
    vec3 toColor;
    float fromSize;
    float toSize;
    float t;

    if (uStage < 1.0) {
        from = galaxyPosition(); fromColor = aGalaxyColor; fromSize = 1.0;
        to = earthPosition(); toColor = earthColor(); toSize = earthSize();
        t = uStage;
    } else if (uStage < 2.0) {
        from = earthPosition(); fromColor = earthColor(); fromSize = earthSize();
        to = aGround; toColor = groundColor(); toSize = 1.0;
        t = uStage - 1.0;
    } else {
        from = aGround; fromColor = groundColor(); fromSize = 1.0;
        to = earthPosition(); toColor = earthColor(); toSize = earthSize();
        t = uStage - 2.0;
    }

    float w = stagger(t);
    vec3 position = mix(from, to, w);

    // Mid-flight turbulence: particles lift off, drift and settle.
    float flight = sin(w * PI);
    vec3 drift = normalize(vec3(cos(aSeed.z * 6.2832), aSeed.w - 0.5, sin(aSeed.z * 6.2832)));
    position += drift * flight * (0.35 + aSeed.x * 0.5);
    float swirl = flight * (1.2 + aSeed.w);
    position.xz = mat2(cos(swirl), -sin(swirl), sin(swirl), cos(swirl)) * position.xz;

    vec4 viewPosition = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * viewPosition;

    float depth = -viewPosition.z;
    float size = uSize * mix(fromSize, toSize, w) * (0.35 + aSeed.y * 0.65) / depth;
    gl_PointSize = min(size * uSizeScale * uLens, uMaxSize);

    float twinkle = 0.78 + 0.22 * sin(uTime * (0.6 + aSeed.y * 1.8) + aSeed.y * 40.0);
    // Fade anything that drifts right up to the lens instead of drawing huge
    // quads, and let the far landscape dissolve into the night.
    float ground = uStage < 1.0 ? 0.0 : (uStage < 2.0 ? w : 1.0 - w);
    float fade = smoothstep(0.03, 0.35, depth) * (1.0 - smoothstep(5.5, 8.0, depth) * ground);
    vColor = mix(fromColor, toColor, w) * twinkle * fade;
}
