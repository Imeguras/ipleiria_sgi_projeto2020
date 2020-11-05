var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 0.1, 1000 );
var renderer = new THREE.WebGLRenderer();
var controls = new THREE.OrbitControls(camera, renderer.domElement);


var loadModel = new THREE.GLTFLoader();

renderer.setSize( window.innerWidth, window.innerHeight );
renderer.shadowMap.enabled = true
document.body.appendChild( renderer.domElement );

camera.position.x = 80;
camera.position.y = 50;
camera.position.z = 200;
camera.lookAt(0,0,0);

loadModel.load(
    'models/bed-vintage.gltf',
    function ( gltf ) {
    scene.add( gltf.scene )

    scene.traverse( function(x) {
        if (x.isMesh) {
            x.castShadow = true;
            x.receiveShadow = true;			
        }

    })
}
)
var animate = function () {
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
};

function addLights(){
    var pointLight = new THREE.PointLight( "white", 1 );
    pointLight.position.set( 500, 80, 10 );
    pointLight.castShadow = true;
    scene.add( pointLight );
    
    var pointLight2 = new THREE.PointLight( "white", 1.5 );
    pointLight2.position.set( 100, 400, 300 );
    scene.add( pointLight2 );

    var pointLight3 = new THREE.PointLight( "white", 0.5 );
    pointLight3.position.set( -300, -300, -300 );
    scene.add( pointLight3 );
}

animate();
addLights();