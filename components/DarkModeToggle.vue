<template>
  <button
    @click="click"
    class="transition-colors duration-100 w-12 h-12 rounded-full flex items-center justify-center"
    :class="{ 'bg-primary-200 dark:bg-primary-dark-100': bg }"
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
const { isDarkTheme, toggleTheme } = useColorMode()

const bg = ref(false)

onMounted(() => {
  console.log(isDarkTheme.value)
})

function click() {
  toggleTheme()
  bg.value = true
  setTimeout(() => {
    bg.value = false
  }, 600)
}
</script>