import * as THREE from 'three'

// Setup

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(75, 2, 0.1, 5)

camera.position.z = 2

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#fundamental') as Element,
})
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setPixelRatio(window.devicePixelRatio)

const color = 0xffffff
const intensity = 1
const light = new THREE.DirectionalLight(color, intensity)
light.position.set(-1, 2, 4)
scene.add(light)

const boxWidth = 1
const boxHeight = 1
const boxDepth = 1
const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth)

function makeInstance(
  geometry: THREE.BoxGeometry,
  color: THREE.ColorRepresentation,
  x: number
) {
  const material = new THREE.MeshPhongMaterial({ color })

  const cube = new THREE.Mesh(geometry, material)
  scene.add(cube)

  cube.position.x = x

  return cube
}

const cubes = [
  makeInstance(geometry, 0x44aa88, 0),
  makeInstance(geometry, 0x8844aa, -2),
  makeInstance(geometry, 0xaa8844, 2),
]

scene.add(cubes)

function render(time: number) {
  time *= 0.001 // convert time to seconds

  cubes.forEach((cube, ndx) => {
    const speed = 1 + ndx * 0.1
    const rot = time * speed
    cube.rotation.x = rot
    cube.rotation.y = rot
  })

  renderer.render(scene, camera)

  requestAnimationFrame(render)
}
requestAnimationFrame(render)
