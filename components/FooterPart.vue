<template>
  <footer class="flex flex-col gap-2 border-t border-primary-300 dark:border-primary-dark-300 pt-10">
    <span class="flex gap-2">
      <a href="https://github.com/dev-andreas" target="_blank" rel="noopener noreferrer">
        <img v-if="isDark" src="~/assets/images/social_nets/github_dark_mode.svg" alt="GitHub Account" class="w-6 h-6 flat-shadow-sm">
        <img v-else src="~/assets/images/social_nets/github.svg" alt="GitHub Account" class="w-6 h-6 flat-shadow-sm">
      </a>
      <a href="https://www.linkedin.com/in/andreas-gerasimow/" target="_blank" rel="noopener noreferrer">
        <img v-if="isDark" src="~/assets/images/social_nets/linkedin_dark_mode.svg" alt="LinkedIn Account" class="w-6 h-6 flat-shadow-sm">
        <img v-else src="~/assets/images/social_nets/linkedin.svg" alt="LinkedIn Account" class="w-6 h-6 flat-shadow-sm">
      </a>
    </span>
    <p class="text-primary-500">&copy; {{ date }} Andreas Gerasimow</p>
  </footer>
</template>

<script setup>

const colorMode = useColorMode()

const isDark = computed(() => colorMode.value === 'dark')

const date = ref(new Date().getFullYear());
</script>