<template>
  <div
      class="min-h-screen bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 flex items-center justify-center">
    <div class="bg-white bg-opacity-25 rounded-xl p-6 w-full max-w-6xl h-4/5">
      <div class="h-full flex flex-col md:flex-row rounded-lg overflow-hidden">
        <primitive-list @drag-start="addPrimitive" class="w-full md:w-1/4 bg-opacity-50 p-4"></primitive-list>
        <scene-canvas ref="sceneCanvas" class="w-1/2 flex-grow"></scene-canvas>
        <object-attribute-adjuster class="w-full md:w-1/4 bg-opacity-50 p-4"></object-attribute-adjuster>
      </div>
    </div>
  </div>
</template>

<script>
import PrimitiveList from './components/PrimitiveList.vue'
import SceneCanvas from './components/SceneCanvas.vue'
import ObjectAttributeAdjuster from './components/ObjectAttributeAdjuster.vue'

export default {
  components: {
    PrimitiveList,
    SceneCanvas,
    ObjectAttributeAdjuster,
  },
  methods: {
    addPrimitive(primitive) {
      this.$refs.sceneCanvas.addPrimitive(primitive);
    },
  },

}
</script>

<style>
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';

</style>