
var animationsBed={
    rotation:[
        "bed_rotation",
        "platform_rotation",
        "structure_rotation",
        "divan_rotation",
        "mattress_rotation",
        "pillow_rotation"
    ]
}


var meuCanvas1 = document.getElementById("camaVerCanvas")
var scene1 = new THREE.Scene();
var camera1 = new THREE.PerspectiveCamera( 60, 1, 0.1, 2000 );


console.log(meuCanvas1)
var renderer1= new THREE.WebGLRenderer({canvas: meuCanvas1, alpha: true, antialias: true});
renderer1.shadowMap.enabled = true

var relogio1 = new THREE.Clock();
var misturador1 = new THREE.AnimationMixer(scene1);

var loadModel = new THREE.GLTFLoader();


camera1.position.x = 0;
camera1.position.y = 50;
camera1.position.z = 200;
camera1.lookAt(5,5,0);

var actionsBed=[rotate]



loadModel.load(
    'models/vintage-bed_verticale_rot.gltf',
    function ( gltf ) {
    scene1.add( gltf.scene )

    scene1.traverse( function(x) {
        
        if (x.isMesh) {
            x.castShadow = true;
            x.receiveShadow = true;			
        }

    })
    for(i of animationsBed.rotation){
        clip = THREE.AnimationClip.findByName(gltf.animations,i)
        actionsBed[0].push(misturador1.clipAction(clip))
    }
    console.log(actionsBed[0])
}
)

var animate = function () {
    requestAnimationFrame( animate );
    renderer1.render( scene1, camera1 );
    const delta1 = relogio1.getDelta();
    misturador1.update( delta1 )
};

var player = function(x){
    actionsBed[x].forEach(element => {
        element.play()
        element.setEffectiveTimeScale(1)
    });
}

var pauseAll = function(){
        
        actionsBed[0].forEach(element => {
                element.halt();
    });

}
function addLights(){
    var pointLight = new THREE.PointLight( "white", 1 );
    pointLight.position.set( 500, 80, 10 );
    pointLight.castShadow = true;
    scene1.add( pointLight );
    
    var pointLight2 = new THREE.PointLight( "white", 1.5 );
    pointLight2.position.set( 100, 400, 300 );
    scene1.add( pointLight2 );

    var pointLight3 = new THREE.PointLight( "white", 0.5 );
    pointLight3.position.set( -300, -300, -300 );
    scene1.add( pointLight3 );
}

addLights();
funcsCamaVer = function(){
    console.log(document.getElementById('ImagemPromo1-1'))
    renderer1.setSize(350,350)
    animate();
    player(0);
    document.getElementById('ImagemPromo1-1').style.cssText = 'background-image: none !important;';
}
funcsCamaVerStop = function(){
    document.getElementById('ImagemPromo1-1').style.cssText = 'background-image: url("Cama1000-1000.png") !important;';
    renderer1.setSize(0,0)
    cancelAnimationFrame(animate);
    pauseAll();
}
