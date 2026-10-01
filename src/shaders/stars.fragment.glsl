uniform float uBrightness;
varying vec3 vColor;
varying float vTwinkle;

void main() {
    vec2 uv = gl_PointCoord - 0.5;
    float d = length(uv);
    float core = 1.0 - smoothstep(0.0, 0.18, d);
    float halo = pow(1.0 - smoothstep(0.0, 0.5, d), 3.0) * 0.35;

    gl_FragColor = vec4(vColor * (core + halo) * vTwinkle * uBrightness, 1.0);
}
