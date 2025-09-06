<template>
  <div class="flex flex-col sm:flex-row gap-5 items-center">
    <div class="standard-grid-width standard-grid-height sm:w-32 sm:h-32 flex-shrink-0 overflow-hidden rounded-md border border-font-dark">
      <img :src="props.src" :alt="props.alt" class="object-cover w-full">
    </div>
    <div class="flex flex-col items-start gap-2">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
  src: {
    type: String,
    default: null
  },
  alt: {
    type: String,
    default: "project",
  }
});
</script>

<style scoped></style>