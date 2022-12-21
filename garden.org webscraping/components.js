let cameraPosition;

AFRAME.registerComponent('positionlogger', {
    init: function(){
        this.cam = document.getElementById('cam');
    },
    tick: function(){
        newVector = new THREE.Vector3();
        cameraPosition = this.cam.object3D.getWorldPosition(newVector)
    }
})

AFRAME.registerComponent('look-at-camera', {
    schema: { type: 'selector' },
  
    init: function () {},
  
    tick: function () {
        console.log(cameraPosition);
        this.el.object3D.lookAt(cameraPosition)
    }
  })

AFRAME.registerComponent('forest', {
    schema: {
    },
  
    init: function () {

        let url = './photos/photos.json';

        let el = this.el;
        
        fetch(url)
        .then(res => res.json())
        .then(out =>
            createForest(out))
        .catch(err => { throw err });
        

        function createForest(data){

            let plants = data;

            
            for(let i = 0; i < plants.length; i++){

                const plant = document.createElement('a-image');

                plant.setAttribute('position', {
                    x: Math.random() * 30 - 15,
                    y: 0.5,
                    z: Math.random() * 30 - 15
                })

                plant.setAttribute('rotation', {
                    x: 0,
                    y: Math.random() * 360,
                    z: 0
                })

                plant.setAttribute('material', {side: 'double'})

                plant.setAttribute('src', './photos/' + plants[i])

                plant.setAttribute('shadow', '')

                plant.setAttribute('look-at-camera', '')

                el.appendChild(plant)

            }


        }

    }
})


