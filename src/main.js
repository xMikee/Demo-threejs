import * as THREE from 'three';

console.log(THREE);

const scene = new THREE.Scene

const geometry = new THREE.BoxGeometry(1,1,1)
const material = new THREE.MeshBasicMaterial({color:'#fd4'})

const mesh = new THREE.Mesh(geometry, material)

scene.add(mesh)

const temp = {
    width: 1024,
    height: 720,
}

const camera = new THREE.PerspectiveCamera(75,temp.width/temp.height,0.1,10)

const renderer = new THREE.WebGLRenderer();
renderer.setSize(temp.width, temp.height)

document.body.appendChild(renderer.domElement);

camera.position.z = 4



function animate() {

    renderer.render(scene, camera);

    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.01;

    requestAnimationFrame(animate);

}

requestAnimationFrame(animate);