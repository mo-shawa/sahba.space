// Her face, seen faintly through the raised visor: an oval vignette, warmed by
// the gold film, darker toward the helmet's rim.
uniform sampler2D uFace;
uniform float uOpacity;
varying vec2 vUv;

void main() {
    vec2 p = (vUv - vec2(0.5, 0.52)) / vec2(0.4, 0.47);
    float mask = 1.0 - smoothstep(0.45, 1.0, length(p));
    vec3 color = texture2D(uFace, vUv).rgb * vec3(1.0, 0.88, 0.7);
    gl_FragColor = vec4(color, mask * uOpacity);
}
