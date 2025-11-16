<template>
  <button
    @click="toggleDarkMode"
    class="transition-colors duration-300 w-10 h-10 bg-transparent rounded-full flex items-center justify-center"
    :class="{'hover:bg-primary-dark-100': isDark, 'hover:bg-primary-200': !isDark }"
  >
    <SvgpathsMoonSvg v-if="isDark" class="fill-font-light w-5 h-5 flat-shadow-sm" />

    <!-- Moon Icon -->
    <SvgpathsSunSvg v-else class="fill-font-dark w-5 h-5 flat-shadow-sm" />
  </button>
</template>

<script setup>
const colorMode = useColorMode()

const isDark = computed(() => colorMode.preference === 'dark')

const toggleDarkMode = () => {
  colorMode.preference = isDark.value ? 'light' : 'dark'
}
</script>