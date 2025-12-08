<template>
  <button
    @click="click"
    class="transition-colors duration-300 w-12 h-12 rounded-full flex items-center justify-center"
    :class="{ 'bg-primary-200 dark:bg-primary-dark-100': props.modelValue }"
  >
    <ClientOnly fallbackTag="div">
      <transition name="fade" mode="out-in">
        <SvgpathsMoonSvg v-if="isDarkTheme" class="transition-colors duration-300 fill-font-dark dark:fill-font-light w-5 h-5 opacity-95 flat-shadow-sm" />
        <!-- Moon Icon -->
        <SvgpathsSunSvg v-else class="fill-font-dark dark:fill-font-light w-5 h-5 opacity-95 flat-shadow-sm" />
      </transition>
    </ClientOnly>
  </button>
</template>

<script setup>
const { isDarkTheme } = useColorMode()
const props = defineProps({
  modelValue: Boolean
})
const emit = defineEmits(['update:modelValue'])

function click() {
  emit('update:modelValue', !props.modelValue);
}
</script>