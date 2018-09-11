<template lang="html">
  <div id="wrapper">
	  <div class="3D-container canvas" id="canvas"></div>
    <icon name="cog" scale="3" spin id="loading-message" class="loading-message" v-if="this.$route.name != 'home' && loadToCount != 100"></icon>
  </div>
</template>

<script>
import * as Three from 'three'
import * as ThreeAddons from 'three-addons'

export default {
  data() {
    return {
      container: {
        el: null,
        width: 0,
        height: 0,
      },
      camera: null,
      scene: null,
      renderer: null,
      mesh: null,
      controls: null,
      loadToCount: 100
    }
  },
  computed: {
    instrument: function () {
      return this.$store.getters.instrument
    },
    loadCounter: function() {
      return `Loading 3D: ${this.loadToCount}%`
    }
  },
  methods: {
    initSettings() {
        const WIDTH = this.container.width;
        const HEIGHT = this.container.height;

        this.camera = new Three.PerspectiveCamera(50, WIDTH / HEIGHT, 0.01, 1000);
        this.camera.position.z = 200;

        this.scene = new Three.Scene();
		this.scene.background = new Three.Color( 0x211d1d );

        this.renderer = new Three.WebGLRenderer({antialias: true});
		this.controls = new ThreeAddons.OrbitControls(this.camera, this.renderer.domElement);
        this.renderer.setSize(WIDTH, HEIGHT);
        this.container.el.appendChild(this.renderer.domElement);
    },
    initMeshObj() {
		var mtlLoader = new ThreeAddons.MTLLoader();
		
		var loading = new Promise((res, rej) => {	
      let path = './static/models/' + this.instrument.type + '/' + this.instrument.name + '/' + this.instrument.name;
console.info(path);
				
      mtlLoader.load(path + '.mtl', (materials) => {
				materials.preload();
				var objLoader = new ThreeAddons.OBJLoader();
				//objLoader.setMaterials(materials);
				objLoader.load(path + '.obj', (object) => {
					object.position.y -= 0;
					object.position.x -= 60;
					this.camera.position.z = 100;
					object.name = this.instrument.name;
					res(object);
				}, (xhr) => {
          this.loadToCount = ((xhr.loaded / xhr.total) * 100);
        });
			});
		}).then((obj) => {
			this.mesh = obj;
			this.scene.add(this.mesh);
		}).catch((err) => {
			this.initMeshObjBasic();
			console.error("Didn't Load Obj");
			console.error(err);
		});
	},
	initMeshObjBasic() {
		var mtlLoader = new ThreeAddons.MTLLoader();
		var loading = new Promise((res, rej) => {	
			mtlLoader.load('./static/models/default/default.mtl', (materials) => {
				materials.preload();
				var objLoader = new ThreeAddons.OBJLoader();
				objLoader.load('./static/models/default/default.obj', (object) => {
//					object.position.y += 70;
					object.position.x -= 0;
					this.camera.position.z = 10;
					object.name = "Logo3D";
					res(object);
				}, (xhr) => {
          this.loadToCount = ((xhr.loaded / xhr.total) * 100);
        });
			});
		}).then((obj) => {
			this.mesh = obj;
			this.scene.add(this.mesh);
		}).catch((err) => {
			console.error("Didn't Load Obj");
			console.error(err);
		});
    },
    initLights() {
		var keyLight = new Three.DirectionalLight(new Three.Color('hsl(217, 65%, 90%)'), 1.0);
		keyLight.position.set(-100, 100, 100);
		keyLight.shadow.mapSize.width = 1024;

		var fillLight = new Three.DirectionalLight(new Three.Color('hsl(39, 89%, 93%)'), 0.55);
		fillLight.position.set(100, -100, 100);
		fillLight.shadow.mapSize.width = 1024;

		var backLight = new Three.DirectionalLight(0xffffff, 1.0);
		backLight.position.set(100, 0, -100).normalize();
		backLight.shadow.mapSize.width = 1024;

		this.scene.add(keyLight);
		this.scene.add(fillLight);
		this.scene.add(backLight);
		
		var testLight = new Three.AmbientLight(new Three.Color('hsl(217, 65%, 90%)'), 0.1);
		keyLight.position.set(1000, 0, 0);
		this.scene.add(testLight);
    },
    animate() {
        requestAnimationFrame(this.animate);
		if (this.mesh && false) {
				this.mesh.rotation.x += 0.01;
				this.mesh.rotation.y += 0.02;
		}
        this.renderer.render(this.scene, this.camera);
		this.controls.update();
    },
    calcCanvas() {
		this.container.el = document.getElementById('canvas');
		this.container.width = this.container.el.clientWidth;
		this.container.height = this.container.el.clientHeight;
    },
    resize() {
		this.calcCanvas();
        let WIDTH = this.container.width;
        let HEIGHT = this.container.height;

        this.camera.aspect = WIDTH / HEIGHT;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(WIDTH, HEIGHT);
    },
    init() {
		this.calcCanvas();
		this.initSettings();
		this.initLights();
		this.init3D();

		this.animate();
    },
	  init3D() {
		  if (this.instrument && this.instrument.type == "Electric_Guitar")
				this.initMeshObj();
		  else if (this.instrument && this.instrument.type == "Drumkit")
				this.initMeshObj();
			else
				this.initMeshObjBasic();
	  }
  },
  mounted() {
		this.init();

		window.addEventListener('resize', this.resize);
  },
	created() {
		this.$ebus.$on('sel-instr', (selectedInstrument) => {
			this.instrument = selectedInstrument;
		});
	},
	watch: {
		instrument() {
			this.init3D();

			this.scene.remove(this.scene.children[this.scene.children.length-1]);
		}
	}
}</script>loading

<style lang="scss" scoped>
#canvas {
    margin-top: 9vh;
    width: 100%;
    height: 88vh;
}

.canvas {
    cursor: default;
}

#canvas:focus {
    outline: none !important;
}

#loading-message {
  color: red;
  font-size: 4rem;
  line-height: 4rem;
  position: absolute;
  text-align: center;
  top: calc(50vh - 2rem);
//  width: 100vw;
}
</style>
