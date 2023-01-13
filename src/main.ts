import "./style.css"

import * as THREE from "three"

/**
 * Base
 */

const scene = new THREE.Scene()
/**
 * Sizes
 */
const sizes = {
	width: window.innerWidth,
	height: window.innerHeight,
}

window.addEventListener("resize", () => {
	sizes.width = window.innerWidth
	sizes.height = window.innerHeight

	camera.aspect = sizes.width / sizes.height
	camera.updateProjectionMatrix()

	renderer.setSize(sizes.width, sizes.height)
	renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */

const camera = new THREE.PerspectiveCamera(
	75,
	sizes.width / sizes.height,
	0.1,
	100
)

camera.position.x = 0
camera.position.y = 1.5
camera.position.z = 3
scene.add(camera)

// Canvas

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer()
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
document.body.append(renderer.domElement)

const parameters = {
	count: 500000,
	size: 0.005,
	radius: 8,
	branches: 5,
	spin: 1,
	randomness: 0.5,
	insideColor: "hsl(0, 100%, 76%)",
	outsideColor: "#141133",
}

/**
 * Galaxy
 */
const pointsGeometry = new THREE.BufferGeometry()

const positions = new Float32Array(parameters.count * 3)
const colors = new Float32Array(parameters.count * 3)
const scales = new Float32Array(parameters.count * 1)

for (let i = 0; i < parameters.count; i++) {
	const i3 = i * 3

	const radius = Math.random() * parameters.radius

	const spinAngle = parameters.spin * radius
	const branchAngle = (i / parameters.branches) * Math.PI * 2

	const randomX = (Math.random() - 0.5) * parameters.randomness
	const randomY = (Math.random() - 0.5) * parameters.randomness
	const randomZ = (Math.random() - 0.5) * parameters.randomness

	positions[i3 + 0] = Math.cos(branchAngle + spinAngle) * radius + randomX
	positions[i3 + 1] = Math.random() * 0.1 + randomY //
	positions[i3 + 2] = Math.sin(branchAngle + spinAngle) * radius + randomZ

	const insideColor = new THREE.Color(parameters.insideColor)
	const outsideColor = new THREE.Color(parameters.outsideColor)

	const mixedColor = insideColor
		.clone()
		.lerp(outsideColor, radius / parameters.radius)

	colors[i3 + 0] = mixedColor.r
	colors[i3 + 1] = mixedColor.g
	colors[i3 + 2] = mixedColor.b

	scales[i] = Math.random()
}

pointsGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3))
pointsGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3))
pointsGeometry.setAttribute("aScale", new THREE.BufferAttribute(scales, 1))

// const pointsMaterial = new THREE.PointsMaterial({
// 	size: parameters.size,
// 	sizeAttenuation: true,
// 	depthWrite: false,
// 	vertexColors: true,
// 	blending: THREE.AdditiveBlending,
// })

// const points = new THREE.Points(pointsGeometry, pointsMaterial)
/**
 * Shader
 */

const pointsShader = new THREE.ShaderMaterial({
	depthWrite: false,
	blending: THREE.AdditiveBlending,
	vertexColors: true,
	vertexShader: `
    uniform float uSize;
    attribute float aScale;
	  void main(){
	    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
	    vec4 viewPosition = viewMatrix * modelPosition;
	    vec4 projectedPosition = projectionMatrix * viewPosition;
	    gl_Position = projectedPosition;

	    /**
	     * Size
	     */
	    gl_PointSize = uSize * aScale;
	  }
	`,
	fragmentShader: `
            void main()
            {
                gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
            }
        `,
	uniforms: {
		uSize: { value: 8 * renderer.getPixelRatio() },
	},
})

const points = new THREE.Points(pointsGeometry, pointsShader)
camera.lookAt(points.position)

scene.add(points)

/**
 * Animate
 */
const clock = new THREE.Clock()

const tick = () => {
	const elapsedTime = clock.getElapsedTime()
	points.rotation.z = Math.sin(elapsedTime) / 200
	points.rotation.y += 1 / 5000

	renderer.render(scene, camera)

	window.requestAnimationFrame(tick)
}

tick()
