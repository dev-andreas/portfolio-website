<template>
  <ul class="menu-surface w-40">
    <li
        v-for="theme in themes"
        :key="theme"
        :class="{'bg-primary-400/10 dark:bg-primary-dark-300/10': theme === getTheme()}"
        class="flex gap-3 items-center relative cursor-pointer p-2 rounded-lg"
        @click.prevent="emit('selected'); setTheme(theme)"
    >
      <SvgpathsSunSvg v-if="theme === ThemeType.LIGHT" class="fill-font-dark dark:fill-font-light w-4 h-4 opacity-95" />
      <SvgpathsMoonSvg v-else-if="theme === ThemeType.DARK" class="fill-font-dark dark:fill-font-light w-4 h-4 opacity-95" />
      <SvgpathsComputerDesktopSvg v-else class="fill-font-dark dark:fill-font-light w-4 h-4 opacity-95" />
      <p>{{ toTitle(theme) }}</p>
    </li>
  </ul>
</template>

<script setup>
const { setTheme, getTheme, ThemeType } = useColorMode()

const emit = defineEmits(['selected'])

const themes = reactive(Object.values(ThemeType))

const toTitle = (theme) => {
  return theme.charAt(0).toUpperCase() + theme.slice(1)
}

</script>