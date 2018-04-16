<template lang="html">
  <div class="3D-container canvas" id="canvas">  </div>
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
      controls: null
    }
  },
  methods: {
    initSettings() {
        const WIDTH = this.container.width;
        const HEIGHT = this.container.height;

        this.camera = new Three.PerspectiveCamera(50, WIDTH / HEIGHT, 0.01, 1000);
        this.camera.position.z = 200;

        this.scene = new Three.Scene();

        this.renderer = new Three.WebGLRenderer({antialias: true});
		this.controls = new ThreeAddons.OrbitControls(this.camera, this.renderer.domElement);
        this.renderer.setSize(WIDTH, HEIGHT);
        this.container.el.appendChild(this.renderer.domElement);
    },
    initMeshCube() {
        var geometry = new Three.BoxGeometry(0.2, 0.2, 0.2);
        var material = new Three.MeshNormalMaterial();

        this.mesh = new Three.Mesh(geometry, material);
        this.scene.add(this.mesh);
    },
    initMeshObj() {
		var mtlLoader = new ThreeAddons.MTLLoader();
		var loading = new Promise((res, rej) => {	
			mtlLoader.load('./static/models/r2/r2-d2.mtl', (materials) => {
				materials.preload();
				var objLoader = new ThreeAddons.OBJLoader();
				//objLoader.setMaterials(materials);
				objLoader.load('./static/models/r2/r2-d2.obj', (object) => {
					object.position.y -= 70;
					object.position.x -= 0;
					res(object);
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
		this.initMeshObj();
		//      this.initMeshCube();
		this.animate();
    },
  },
  mounted() {
		this.init();

		window.addEventListener('resize', this.resize);
  }
}</script>

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
</style>
