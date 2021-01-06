
var animations={
    rotation:[
        "bed_rotation",
        "platform_rotation",
        "structure_rotation",
        "divan_rotation",
        "matress_rotation",
        "pillow_rotation"
    ]
}


var meuCanvas = document.getElementById("camaCanvas")
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 60, 1, 0.1, 2000 );


console.log(meuCanvas)
var renderer = new THREE.WebGLRenderer({canvas: meuCanvas, alpha: true, antialias: true});
renderer.shadowMap.enabled = true

var relogio = new THREE.Clock();
var misturador = new THREE.AnimationMixer(scene);

var loadModel = new THREE.GLTFLoader();


camera.position.x = 0;
camera.position.y = 50;
camera.position.z = 200;
camera.lookAt(5,5,0);

var rotate=[]
var actions=[rotate]



loadModel.load(
    'models/vintage-bed_rot.gltf',
    function ( gltf ) {
    scene.add( gltf.scene )

    scene.traverse( function(x) {
        
        if (x.isMesh) {
            x.castShadow = true;
            x.receiveShadow = true;			
        }

    })
    for(i of animations.rotation){
        clip = THREE.AnimationClip.findByName(gltf.animations,i)
        actions[0].push(misturador.clipAction(clip))
    }
    console.log(actions[0])
    /*
    for(i of animations.implode){
        clip = THREE.AnimationClip.findByName(gltf.animations,i)
        actions.implode_actions.push(misturador.clipAction(clip))
    }
    
    for(i of animations.open){
        clip = THREE.AnimationClip.findByName(gltf.animations,i)
        actions.open_actions.push(misturador.clipAction(clip))
    }
    
    for(i of animations.close){
        clip = THREE.AnimationClip.findByName(gltf.animations,i)
        actions.close_actions.push(misturador.clipAction(clip))
    }
    */
    
    
    /*
    clip = THREE.AnimationClip.findByName(gltf.animations,animations.implode[2])
    action = misturador.clipAction( clip );
    action.play();
  */
}
)

var animate = function () {
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
    const delta = relogio.getDelta();
    misturador.update( delta )
};

var player = function(x){
    actions[x].forEach(element => {
        element.play()
        element.setEffectiveTimeScale(1)
    });
}

var pauseAll = function(){
        
        actions[0].forEach(element => {
                element.halt();
    });

  // misturador.stopAllAction()
}
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

addLights();
funcsBed = function(){
    console.log(document.getElementById('ImagemPromo1-1'))
    renderer.setSize(350,350)
    animate();
    player(0);
    document.getElementById('ImagemPromo1-1').style.cssText = 'background-image: none !important;';
}
funcsBedStop = function(){
    document.getElementById('ImagemPromo1-1').style.cssText = 'background-image: url("Cama1000-1000.png") !important;';
    renderer.setSize(0,0)
    cancelAnimationFrame(animate);
    pauseAll();
}
