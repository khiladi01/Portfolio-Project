import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

function Model () {
    
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
camera.position.set(0, 1, 3)

const renderer = new THREE.WebGLRenderer({ antialias: true })
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

// Light
const light = new THREE.DirectionalLight(0xffffff, 1)
light.position.set(5, 10, 7.5)
scene.add(light)

// rgbe loader
const rgbeLoader = new RGBELoader()
rgbeLoader.load('../assets/gltf/furstenstein_1k.hdr', (texture) => {
  texture.mapping = THREE.EquirectangularReflectionMapping
  scene.background = texture
  scene.environment = texture
})

// gtlf loader
const loader = new GLTFLoader()
loader.load('../assets/gltf/destiny_2_character_bust.glb', (gltf) => {
  const model = gltf.scene
  model.scale.set(1.5, 1.5, 1.5)
  model.position.set(0, 0, 0)
  scene.add(model)
}, undefined, (error) => {
  console.error('Failed to load GLB model', error)
})


const controls = new OrbitControls(camera, renderer.domElement)
controls.enableDamping = true

function animate() {
    requestAnimationFrame(animate)
    controls.update()
    renderer.render(scene, camera)
  }
  animate()
  
}
export default Model