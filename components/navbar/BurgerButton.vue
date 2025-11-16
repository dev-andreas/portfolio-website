<template>
    <div class="flex flex-col items-end justify-center gap-1" @click="emit('update:modelValue', !props.modelValue)">
      <div class=" w-5 h-0.5 transition ease-out duration-300 transform bg-font-dark rounded-full"
           :class="[props.modelValue ? '-rotate-45 translate-y-2' : 'rotate-0']"></div>
      <div class="w-3 h-0.5 transition ease-out duration-300 bg-font-dark rounded-full"
           :class="[props.modelValue ? 'opacity-0' : 'opacity-100']"></div>
      <div class="h-0.5 transition ease-out duration-500 transform bg-font-dark rounded-full"
           :class="[props.modelValue ? 'rotate-45 -translate-y-1 w-5' : 'rotate-0 w-4']"></div>
    </div>
</template>

<script setup>
  const props = defineProps({
    modelValue: Boolean
  })
  const emit = defineEmits(['update:modelValue'])

</script>

<style scoped>

</style>