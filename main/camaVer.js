
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
console.log(meuCanvas1)
var scene1 = new THREE.Scene();
var camera1 = new THREE.PerspectiveCamera( 17.1, 1, 0.01, 4000 );

var renderer1= new THREE.WebGLRenderer({canvas: meuCanvas1, alpha: true, antialias: true});
renderer1.shadowMap.enabled = true

var relogio1 = new THREE.Clock();
var misturador1 = new THREE.AnimationMixer(scene1);

var loadModel1 = new THREE.GLTFLoader();


camera1.position.x = -15;
camera1.position.y = 150;
camera1.position.z = 850;
camera1.lookAt(0,0,0);

 var rotate1=[]
var actionsBed=[rotate1]



loadModel1.load(
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

var animate1 = function () {
    requestAnimationFrame( animate1 );
    renderer1.render( scene1, camera1 );
    const delta1 = relogio1.getDelta();
    misturador1.update( delta1 )
};

var player1 = function(x){
    actionsBed[x].forEach(element => {
        element.play()
        element.setEffectiveTimeScale(1)
    });
}

var pauseAll1 = function(){
        
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
    console.log(document.getElementById('ImagemPromo1-2'))
    renderer1.setSize(350,350)
    animate1();
    player1(0);
    document.getElementById('ImagemPromo1-2').style.cssText = 'background-image: none !important;';
}
funcsCamaVerStop = function(){
    document.getElementById('ImagemPromo1-2').style.cssText = 'background-image: url("camaVer1000-1000.png") !important;';
    renderer1.setSize(0,0)
    cancelAnimationFrame(animate1);
    pauseAll1();
}
