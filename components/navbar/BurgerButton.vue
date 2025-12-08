<template>
    <button
        class="transition-colors duration-200 ease-in w-12 h-12 rounded-full flex items-center justify-center"
        :class="{ 'bg-primary-200 dark:bg-primary-dark-100': props.modelValue }"
        @click="click"
    >
      <span class="flex flex-col items-end justify-center gap-1 transition-colors duration-300">
        <span class=" w-5 h-0.5 transition ease-out duration-300 transform bg-font-dark dark:bg-font-light rounded-full"
             :class="[props.modelValue ? '-rotate-45 translate-y-1.5' : 'rotate-0']"></span>
        <span class="w-3 h-0.5 transition ease-out duration-300 rounded-full"
             :class="[props.modelValue ? 'opacity-5 bg-backg-light dark:bg-backg-dark' : 'opacity-95 bg-font-dark dark:bg-font-light']"></span>
        <span class="h-0.5 transition ease-out duration-500 transform bg-font-dark dark:bg-font-light rounded-full"
             :class="[props.modelValue ? 'rotate-45 -translate-y-1.5 w-5' : 'rotate-0 w-4']"></span>
      </span>
    </button>
</template>

<script setup>
const props = defineProps({
  modelValue: Boolean
})
const emit = defineEmits(['update:modelValue'])

function click() {
  emit('update:modelValue', !props.modelValue);
}

</script>

<style scoped>

</style>