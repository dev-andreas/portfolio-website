<template>

    <button
        class="transition-colors duration-300 ease-in w-10 h-10 bg-transparent rounded-full flex items-center justify-center hover:bg-primary-200 dark:hover:bg-primary-dark-100"
        @click="emit('update:modelValue', !props.modelValue)"
    >
      <div class="flex flex-col items-end justify-center gap-1">
        <div class=" w-5 h-0.5 transition ease-out duration-300 transform bg-font-dark dark:bg-font-light rounded-full"
             :class="[props.modelValue ? '-rotate-45 translate-y-1.5' : 'rotate-0']"></div>
        <div class="w-3 h-0.5 transition ease-out duration-300 bg-font-dark dark:bg-font-light rounded-full"
             :class="[props.modelValue ? 'opacity-0' : 'opacity-100']"></div>
        <div class="h-0.5 transition ease-out duration-500 transform bg-font-dark dark:bg-font-light rounded-full"
             :class="[props.modelValue ? 'rotate-45 -translate-y-1.5 w-5' : 'rotate-0 w-4']"></div>
      </div>
    </button>
</template>

<script setup>
  const props = defineProps({
    modelValue: Boolean
  })
  const emit = defineEmits(['update:modelValue'])

</script>

<style scoped>

</style>