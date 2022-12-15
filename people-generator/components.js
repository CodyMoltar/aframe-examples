// we will write a new component called ballgenerator

AFRAME.registerComponent('ballgenerator', {
    schema: {
      color: {type: 'string', default: 'red'},
      amount: {type: 'int', default: 1}
    },
  
    init: function () {

        for(let i = 0; i < this.data.amount; i++){

            let randomPosition = {
                x: Math.random() * 1000 - 500,
                y: Math.random() * 1000 - 500,
                z: Math.random() * 1000 - 500,
            }

            let sphere = document.createElement('a-sphere');
            sphere.setAttribute('color', 'white');
            sphere.setAttribute('position', {
                x:randomPosition.x,
                y:randomPosition.y,
                z:randomPosition.z
            })
            sphere.setAttribute('radius', Math.random() * 10 + 1)

            this.el.appendChild(sphere)

        }
      
        

    },

    tick: function(){

    }
});

// we will write a new component called ballgenerator

const names = [{
    first_name: "Knox",
    shirt_color: "#6dedb2"
  }, {
    first_name: "Holly",
    shirt_color: "#61c5fe"
  }, {
    first_name: "Cyndi",
    shirt_color: "#f15fdf"
  }, {
    first_name: "Wandis",
    shirt_color: "#703b40"
  }, {
    first_name: "Jobina",
    shirt_color: "#780a44"
  }, {
    first_name: "Chad",
    shirt_color: "#5c9334"
  }, {
    first_name: "Philis",
    shirt_color: "#a9daf2"
  }, {
    first_name: "Shelley",
    shirt_color: "#7e6603"
  }, {
    first_name: "Nita",
    shirt_color: "#538408"
  }, {
    first_name: "Gareth",
    shirt_color: "#c4ac51"
  }, {
    first_name: "Essa",
    shirt_color: "#870317"
  }, {
    first_name: "Kliment",
    shirt_color: "#1e4bc8"
  }, {
    first_name: "Eugene",
    shirt_color: "#2903f7"
  }, {
    first_name: "Berti",
    shirt_color: "#7589d1"
  }, {
    first_name: "Oneida",
    shirt_color: "#987372"
  }, {
    first_name: "Findlay",
    shirt_color: "#814b82"
  }, {
    first_name: "Ike",
    shirt_color: "#96a34e"
  }, {
    first_name: "Cash",
    shirt_color: "#6d3c5d"
  }, {
    first_name: "Deina",
    shirt_color: "#04113a"
  }, {
    first_name: "Agnola",
    shirt_color: "#93a888"
  }, {
    first_name: "Laurel",
    shirt_color: "#8e7720"
  }, {
    first_name: "Hunfredo",
    shirt_color: "#3ab47c"
  }, {
    first_name: "Kory",
    shirt_color: "#7c5512"
  }, {
    first_name: "Leda",
    shirt_color: "#9abf1e"
  }, {
    first_name: "Viviyan",
    shirt_color: "#5dd8c1"
  }, {
    first_name: "Karna",
    shirt_color: "#690f5d"
  }, {
    first_name: "Walliw",
    shirt_color: "#4fdb10"
  }, {
    first_name: "Dominique",
    shirt_color: "#a04db9"
  }, {
    first_name: "Aaron",
    shirt_color: "#fdf493"
  }, {
    first_name: "Katusha",
    shirt_color: "#79f4a0"
  }, {
    first_name: "Eldridge",
    shirt_color: "#438a32"
  }, {
    first_name: "Lisetta",
    shirt_color: "#9009ed"
  }, {
    first_name: "Frederic",
    shirt_color: "#71c302"
  }, {
    first_name: "Noam",
    shirt_color: "#d2a29a"
  }, {
    first_name: "Redford",
    shirt_color: "#cdcefb"
  }, {
    first_name: "Shaw",
    shirt_color: "#f22959"
  }, {
    first_name: "Silva",
    shirt_color: "#9042dd"
  }, {
    first_name: "Erik",
    shirt_color: "#1a99ba"
  }, {
    first_name: "Nicoli",
    shirt_color: "#f7dbae"
  }, {
    first_name: "Vernice",
    shirt_color: "#9064e2"
  }, {
    first_name: "Franklyn",
    shirt_color: "#e4e5fb"
  }, {
    first_name: "Giana",
    shirt_color: "#5facec"
  }, {
    first_name: "Nico",
    shirt_color: "#2d05a1"
  }, {
    first_name: "Pattie",
    shirt_color: "#b0e008"
  }, {
    first_name: "Randie",
    shirt_color: "#ab483e"
  }, {
    first_name: "Bambie",
    shirt_color: "#a77ef9"
  }, {
    first_name: "Glendon",
    shirt_color: "#bbe718"
  }, {
    first_name: "Juli",
    shirt_color: "#6d40d2"
  }, {
    first_name: "Petronella",
    shirt_color: "#9cd2d7"
  }, {
    first_name: "Virgie",
    shirt_color: "#3b0e08"
  }, {
    first_name: "Hermione",
    shirt_color: "#882345"
  }, {
    first_name: "Kelvin",
    shirt_color: "#5856ed"
  }, {
    first_name: "Kathryn",
    shirt_color: "#b4fe0c"
  }, {
    first_name: "Mercie",
    shirt_color: "#31496a"
  }, {
    first_name: "Klaus",
    shirt_color: "#d049fe"
  }, {
    first_name: "Reinhard",
    shirt_color: "#624c44"
  }, {
    first_name: "Arleta",
    shirt_color: "#2daa31"
  }, {
    first_name: "Linnet",
    shirt_color: "#a45b10"
  }, {
    first_name: "Elberta",
    shirt_color: "#f4ae36"
  }, {
    first_name: "Errick",
    shirt_color: "#da4454"
  }, {
    first_name: "Stephanie",
    shirt_color: "#5c0126"
  }, {
    first_name: "Alice",
    shirt_color: "#53bb99"
  }, {
    first_name: "Paulina",
    shirt_color: "#df0490"
  }, {
    first_name: "Svend",
    shirt_color: "#784c25"
  }, {
    first_name: "Ilario",
    shirt_color: "#f0ba78"
  }, {
    first_name: "Emanuele",
    shirt_color: "#d22d9f"
  }, {
    first_name: "Joy",
    shirt_color: "#bbffa5"
  }, {
    first_name: "Jase",
    shirt_color: "#1dcadc"
  }, {
    first_name: "Jillana",
    shirt_color: "#dd74e2"
  }, {
    first_name: "Clarence",
    shirt_color: "#8da62f"
  }, {
    first_name: "Devin",
    shirt_color: "#869633"
  }, {
    first_name: "Denise",
    shirt_color: "#5eaf16"
  }, {
    first_name: "Ann",
    shirt_color: "#0ec575"
  }, {
    first_name: "Siouxie",
    shirt_color: "#a3e8ad"
  }, {
    first_name: "Dasi",
    shirt_color: "#228066"
  }, {
    first_name: "Darbee",
    shirt_color: "#320f28"
  }, {
    first_name: "Joycelin",
    shirt_color: "#fb9c64"
  }, {
    first_name: "Rosalie",
    shirt_color: "#f05d0a"
  }, {
    first_name: "Fleur",
    shirt_color: "#c76b11"
  }, {
    first_name: "Mae",
    shirt_color: "#302f0d"
  }, {
    first_name: "Johanna",
    shirt_color: "#809222"
  }, {
    first_name: "Anna",
    shirt_color: "#22aec3"
  }, {
    first_name: "Denis",
    shirt_color: "#f85d96"
  }, {
    first_name: "Laurie",
    shirt_color: "#98f31a"
  }, {
    first_name: "Jorie",
    shirt_color: "#1fca58"
  }, {
    first_name: "Mendel",
    shirt_color: "#5e8d83"
  }, {
    first_name: "Inna",
    shirt_color: "#b97ac5"
  }, {
    first_name: "Toni",
    shirt_color: "#8c9141"
  }, {
    first_name: "Rahel",
    shirt_color: "#a8595c"
  }, {
    first_name: "Del",
    shirt_color: "#0c32a2"
  }, {
    first_name: "Janis",
    shirt_color: "#4d940b"
  }, {
    first_name: "Zondra",
    shirt_color: "#735ecf"
  }, {
    first_name: "Maribel",
    shirt_color: "#3c6d60"
  }, {
    first_name: "Lora",
    shirt_color: "#257773"
  }, {
    first_name: "Thomasine",
    shirt_color: "#9b284e"
  }, {
    first_name: "Lilly",
    shirt_color: "#9c912d"
  }, {
    first_name: "Eward",
    shirt_color: "#ecbdcd"
  }, {
    first_name: "Electra",
    shirt_color: "#019a30"
  }, {
    first_name: "Shaylyn",
    shirt_color: "#cd2afb"
  }, {
    first_name: "Jone",
    shirt_color: "#166397"
  }]

AFRAME.registerComponent('peoples', {
    schema: {
      
    },
  
    init: function () {

        let peoples = []

        for(let i = 0; i < names.length; i++){

            let person = document.createElement('a-entity');

            let body = document.createElement('a-cylinder');
            body.setAttribute('color', names[i].shirt_color)
            body.setAttribute('radius', 0.3);
            body.setAttribute('height', 1.6);
            body.setAttribute('position', {x:0, y:0.8, z:0});

            let head = document.createElement('a-sphere');
            head.setAttribute('radius', 0.5);
            head.setAttribute('position', {x:0, y:1.6, z:0});

            let name = document.createElement('a-text');
            name.setAttribute('position', {x:0, y: 1, z:0})
            name.setAttribute('text', {
                value: names[i].first_name
            })
            name.setAttribute('color', 'white');
            
            head.appendChild(name);

            person.appendChild(head);
            person.appendChild(body);

            let randomPosition = {
                x: Math.random() * 50 - 25,
                y: 0,
                z: Math.random() * 50 - 25,
            }

            person.setAttribute('position', {x:randomPosition.x, y:0, z:randomPosition.z})

            this.el.appendChild(person);

            peoples.push(person);

        }

        

    
    },

    tick: function(){

        

    }
});