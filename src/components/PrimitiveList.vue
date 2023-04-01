<template>
  <div class="flex flex-col m-10">
    <h2 class="text-white text-xl mb-4">Primitives</h2>
    <draggable class="dragArea list-group w-full" :list="primitives" @change="log">
      <div
          class="list-group-item bg-gray-300 m-1 p-3 rounded-md text-center cursor-pointer"
          v-for="primitive in primitives"
          :key="primitive.name"
          @mousedown="startDrag(primitive)"
      >
        {{ primitive.name }}
      </div>
    </draggable>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { VueDraggableNext } from 'vue-draggable-next'
import Rectangle from './shapes/Rectangle.js'
import Sphere from './shapes/Sphere.js'
import Cone from './shapes/Cone.js'
import Triangle from './shapes/Triangle.js'

export default defineComponent({
  components: {
    draggable: VueDraggableNext,
  },
  data() {
    return {
      enabled: true,
      primitives: [
        { name: 'Rectangle', class: Rectangle },
        { name: 'Sphere', class: Sphere },
        { name: 'Cone', class: Cone },
        { name: 'Triangle', class: Triangle },
      ],
      dragging: false,
    }
  },
  methods: {
    startDrag(primitive) {
      this.$emit('drag-start', primitive)
    },
    log(event) {
      console.log(event)
    },
  },
})
</script>

<style scoped>
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';

.list-group-item {
  @apply shadow-md transition-all duration-200 ease-in-out;
}
.list-group-item:hover {
  @apply shadow-xl;
}
.dragArea {
  @apply overflow-y-auto max-h-96;
}
</style>
