var animations={
    explode:[
        "bed_explode",
        "divan_explode",
        "mattress_explode",
        "pillow_explode",
        "platform_explode",
        "structure_explode"
    ],
    implode:[
        "bed_implode",
        "divan_implode",
        "mattress_implode",
        "pillow_implode",
        "platform_implode",
        "structure_implode" 
    ],
    opene:[
        "divan_open",
        "mattress_open"
    ],
    closee:[
        "divan_close",
        "mattress_close"
    ]
}

var meuCanvas = document.getElementById('canvas')

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 17.1,825/ 825, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer({canvas: meuCanvas, alpha: true, antialias: true});
var controls = new THREE.OrbitControls(camera, renderer.domElement);

var relogio = new THREE.Clock();
var misturador = new THREE.AnimationMixer(scene);

var loadModel = new THREE.GLTFLoader();

renderer.setSize( 825,825 );
renderer.shadowMap.enabled = true


camera.position.x = 90;
camera.position.y = 150;
camera.position.z = 750;
camera.lookAt(0,0,0);


var explode=[]
var implode=[]
var opene=[]
var closee=[]

var actions=[explode,implode,opene,closee]



loadModel.load(
    'models/vintage-bed.gltf',
    function ( gltf ) {
    scene.add( gltf.scene )

    scene.traverse( function(x) {
        
        if (x.isMesh) {
            x.castShadow = true;
            x.receiveShadow = true;			
        }

    })
    for(i of animations.explode){
        clip = THREE.AnimationClip.findByName(gltf.animations,i)
        actions[0].push(misturador.clipAction(clip))
    }
    
    
    for(i of animations.implode){
        clip = THREE.AnimationClip.findByName(gltf.animations,i)
        actions[1].push(misturador.clipAction(clip))
    }
    
    for(i of animations.opene){
        clip = THREE.AnimationClip.findByName(gltf.animations,i)
        actions[2].push(misturador.clipAction(clip))
    }
    
    for(i of animations.closee){
        clip = THREE.AnimationClip.findByName(gltf.animations,i)
        actions[3].push(misturador.clipAction(clip))
    }
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
    });
}

var pauseAll = function(){
        
        actions[0].forEach(element => {
            if(element.getEffectiveTimeScale() === 0){
                element.setEffectiveTimeScale(1)
            }
            else{
                element.halt()
            }
    });

  // misturador.stopAllAction()
}

playerExplodeImplode = function(){
    actions[0].forEach(element => {
        element.setLoop(THREE.LoopOnce,1);
        element.play();
    });
    actions[1].forEach(element => {
        element.setLoop(THREE.LoopOnce);
        element.startAt(misturador.time + 1.1);
        element.play();
    });
}

playerOpen = function(){
    actions[3].forEach(element => {
        element.stop();
    });
    actions[2].forEach(element => {
        element.reset();
        element.setLoop(THREE.LoopRepeat,1)
        element.clampWhenFinished=true;
        console.log(element.clampWhenFinished);
    });
    actions[2].forEach(element => {
        element.play();
    });
}

playerClose =function(){
    actions[2].forEach(element => {
        element.stop();
    });
    actions[3].forEach(element => {
        element.reset();
        element.setLoop(THREE.LoopRepeat,1)
        element.clampWhenFinished=true;
        console.log(element.clampWhenFinished);
    });
    actions[3].forEach(element => {
        element.play();
    });
    
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
animate();
addLights();


