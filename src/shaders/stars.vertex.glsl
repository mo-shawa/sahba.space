uniform float uSize;
uniform float uTime;
attribute float aScale;
attribute float aPhase;
varying vec3 vColor;
varying float vTwinkle;

void main() {
    vec4 viewPosition = viewMatrix * modelMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * viewPosition;
    gl_PointSize = uSize * aScale;

    vColor = color;
    float speed = 0.35 + aPhase * 1.4;
    vTwinkle = 0.55 + 0.45 * pow(0.5 + 0.5 * sin(uTime * speed + aPhase * 60.0), 2.0);
}
