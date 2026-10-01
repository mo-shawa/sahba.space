uniform float uBrightness;
varying vec3 vColor;

void main() {
    float d = distance(gl_PointCoord, vec2(0.5));
    float strength = pow(1.0 - smoothstep(0.0, 0.5, d), 2.4);
    gl_FragColor = vec4(vColor * strength * uBrightness, 1.0);
}
