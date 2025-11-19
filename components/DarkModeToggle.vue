<template>
  <button
    @click="toggleDarkMode"
    class="transition-colors duration-300 w-10 h-10 bg-transparent rounded-full flex items-center justify-center"
  >
    <SvgpathsMoonSvg v-if="isDark" class="fill-font-dark dark:fill-font-light w-5 h-5 flat-shadow-sm" />

    <!-- Moon Icon -->
    <SvgpathsSunSvg v-else class="fill-font-dark dark:fill-font-light w-5 h-5 flat-shadow-sm" />
  </button>
</template>

<script setup>
const colorMode = useColorMode()

const isDark = ref(false)

watch(colorMode, () => {
  isDark.value = colorMode.value === "dark"
})

onMounted(() => {
  isDark.value = localStorage.getItem('nuxt-color-mode') === 'dark'
  console.log(localStorage.getItem('nuxt-color-mode'))
})

const toggleDarkMode = () => {
  colorMode.preference = isDark.value ? 'light' : 'dark'
}
</script>