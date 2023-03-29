<template>
  <Renderer :antialias="true" ref="renderer">
    <Camera :position="{ z: 10 }" />
    <Scene>
      <PointLight :position="{ y: 50, z: 50 }" />
      <Box ref="box" :rotation="{ y: Math.PI / 4, z: Math.PI / 4 }">
        <LambertMaterial />
      </Box>
    </Scene>
  </Renderer>
</template>

<script>
import {Camera, Scene, Renderer, Box, LambertMaterial, PointLight} from 'troisjs';

export default {
  mounted() {
    const renderer = this.$refs.renderer;
    const box = this.$refs.box.mesh;
    renderer.onBeforeRender(() => {
      box.rotation.x += 0.01;
    });
  },
  components: { Box, Camera, LambertMaterial, PointLight, Renderer, Scene },
  name: "JsonExportButton"
}
</script>

<style scoped>



</style>

<!--<template>-->
<!--  <div ref="canvasContainer" class="w-full h-full relative">-->
<!--    <renderer-->
<!--        :scene="scene"-->
<!--        :camera="camera"-->
<!--        :controls="controls"-->
<!--        :width="width"-->
<!--        :height="height"-->
<!--        @mousedown.enter="handleMouseDown"-->
<!--        @mouseup.enter="handleMouseUp"-->
<!--        @mousemove.enter="handleMouseMove"-->
<!--        @wheel.enter="handleMouseWheel"-->
<!--    ></renderer>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--import { ref, onMounted, nextTick } from "vue";-->
<!--import * as THREE from "three";-->
<!--import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";-->
<!--// import { Renderer } from "@vueuse/three";-->


<!--export default {-->
<!--  components: {-->
<!--    // Renderer,-->
<!--  },-->
<!--  setup() {-->
<!--    const canvasContainer = ref(null);-->
<!--    const width = ref(window.innerWidth * 0.5);-->
<!--    const height = ref(window.innerHeight * 0.8);-->

<!--    const scene = new THREE.Scene();-->
<!--    const camera = new THREE.PerspectiveCamera(75, width.value / height.value, 0.1, 1000);-->
<!--    camera.position.z = 5;-->

<!--    const controls = new OrbitControls(camera, canvasContainer.value);-->
<!--    controls.enableDamping = true;-->
<!--    controls.dampingFactor = 0.1;-->
<!--    controls.enableZoom = true;-->
<!--    controls.enablePan = true;-->

<!--    onMounted(async () => {-->
<!--      await nextTick();-->
<!--      controls.domElement = canvasContainer.value;-->
<!--    });-->

<!--    const resize = () => {-->
<!--      width.value = window.innerWidth * 0.5;-->
<!--      height.value = window.innerHeight * 0.8;-->
<!--      camera.aspect = width.value / height.value;-->
<!--      camera.updateProjectionMatrix();-->
<!--    };-->

<!--    window.addEventListener("resize", resize);-->

<!--    const raycaster = new THREE.Raycaster();-->
<!--    const mouse = new THREE.Vector2();-->

<!--    const handleMouseDown = (event) => {-->
<!--      mouse.x = (event.clientX / width.value) * 2 - 1;-->
<!--      mouse.y = -(event.clientY / height.value) * 2 + 1;-->

<!--      raycaster.setFromCamera(mouse, camera);-->
<!--      const intersects = raycaster.intersectObjects(scene.children);-->

<!--      if (intersects.length > 0) {-->
<!--        console.log("Selected object:", intersects[0].object);-->
<!--        // Perform actions when an object is selected-->
<!--      }-->
<!--    };-->

<!--    const handleMouseUp = (event) => {-->
<!--      console.log('mouse up' + event.toString())-->
<!--      // Perform any actions required when the mouse button is released-->
<!--    };-->

<!--    const handleMouseMove = (event) => {-->
<!--      console.log('mouse move' + event.toString())-->
<!--      // Perform any actions required when the mouse is moved-->
<!--    };-->

<!--    const handleMouseWheel = (event) => {-->
<!--      console.log('mouse wheel' + event.toString())-->
<!--      // Perform any actions required when the mouse wheel is used-->
<!--    };-->

<!--    return {-->
<!--      canvasContainer,-->
<!--      scene,-->
<!--      camera,-->
<!--      controls,-->
<!--      width,-->
<!--      height,-->
<!--      handleMouseDown,-->
<!--      handleMouseUp,-->
<!--      handleMouseMove,-->
<!--      handleMouseWheel,-->
<!--    };-->
<!--  },-->
<!--};-->
<!--</script>-->