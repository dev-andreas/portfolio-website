<template>
  <div :class="[transitionClass, intersected ? endingClass : startingClass]">
    <div class="w-full absolute top-2/3 pointer-events-none">
      <IntersectionObserver @intersects="intersect" />
    </div>
    <slot></slot>
  </div>
</template>
  
<script setup>
import IntersectionObserver from './IntersectionObserver.vue';
const props = defineProps({
  startingClass: String,
  endingClass: String,
  transitionClass: {
    type: String,
    default: 'transition ease-out duration-1000'
  },
  delay: {
    type: Number,
    default: 0,
  }
});

const intersected = ref(false);

async function intersect(intersects) {
  if (!intersects) return;
  await setTimeout(() => {
    intersected.value = true;
  }, props.delay);
}
</script>

<style>
</style>