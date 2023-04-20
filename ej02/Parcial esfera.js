var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;

var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(WIDTH, HEIGHT);
renderer.setClearColor(0xDDDDDD, 1);
document.body.appendChild(renderer.domElement);

var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(80, WIDTH / HEIGHT);
camera.position.z = 4.5;
camera.position.x = -1.2;
camera.position.y = 2;

camera.rotation.set(0, -0.5, 0);
scene.add(camera);

var controls = new THREE.OrbitControls(camera, renderer.domElement);

//luz
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(-1, 2, 4);
scene.add(light);

// creo el color a utilizar
const color = new THREE.Color("rgb(203, 209, 188)");
//Parametrizacion Global
var R = 1;
var Sx = 0.5;
var Sy = 0.5;
var Sz = 3;
var Rx = 0;
var Ry = Math.PI/2;
var Rz = Math.PI/4;
//creacion de la esfera
const geom = new THREE.SphereGeometry( R, 10, 10 );
const mate = new THREE.MeshPhongMaterial( { color} );
const bola = new THREE.Mesh( geom, mate );
scene.add( bola );

//Transformaciones
geom.scale(Sx,Sy,Sz);  // se escala la esfera para verla acostada
geom.rotateY(Ry);   // se rota 120 grados para que quede sobre el eje x 
geom.translate(R*3,0,0);
geom.rotateZ(Rz)
//geom.applyMatrix(Escalado(Sx,Sy,Sz));

const size = 150;
const divisions = 160;
const axesHelper = new THREE.AxesHelper(1000);
scene.add(axesHelper);

const gridHelper = new THREE.GridHelper(size, divisions);
scene.add(gridHelper);

function render() {
 requestAnimationFrame(render);
  renderer.render(scene, camera);
}

render();