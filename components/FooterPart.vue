<template>
  <footer class="flex flex-col gap-2 border-t border-primary-300 dark:border-primary-dark-300 pt-10">
    <span class="flex gap-2">
      <a href="https://github.com/dev-andreas" target="_blank" rel="noopener noreferrer">
        <img src="~/assets/images/social_nets/github_dark_mode.svg" alt="GitHub Account" class="h-0 w-0 dark:w-6 dark:h-6 opacity-0 dark:opacity-100 flat-shadow-sm">
        <img src="~/assets/images/social_nets/github.svg" alt="GitHub Account" class="w-6 h-6 dark:w-0 dark:h-0 flat-shadow-sm opacity-100 dark:opacity-0">
      </a>
      <a href="https://www.linkedin.com/in/andreas-gerasimow/" target="_blank" rel="noopener noreferrer">
        <img src="~/assets/images/social_nets/linkedin_dark_mode.svg" alt="GitHub Account" class="h-0 w-0 dark:w-6 dark:h-6 opacity-0 dark:opacity-100 flat-shadow-sm">
        <img src="~/assets/images/social_nets/linkedin.svg" alt="GitHub Account" class="w-6 h-6 dark:w-0 dark:h-0 flat-shadow-sm opacity-100 dark:opacity-0">
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