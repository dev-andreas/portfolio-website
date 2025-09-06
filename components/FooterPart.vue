<template>
  <footer class="flex flex-col gap-2">
    <span class="flex gap-2">
      <a href="https://github.com/dev-andreas" target="_blank" rel="noopener noreferrer">
        <img src="~/assets/images/social_nets/github.svg" alt="GitHub Account" class="w-6 h-6 flat-shadow-sm">
      </a>
      <a href="https://www.linkedin.com/in/andreas-gerasimow/" target="_blank" rel="noopener noreferrer">
        <img src="~/assets/images/social_nets/linkedin.svg" alt="LinkedIn Account" class="w-6 h-6 flat-shadow-sm">
      </a>
    </span>
    <p class="text-primary-500">&copy; {{ date }} Andreas Gerasimow</p>
  </footer>
</template>

<script setup>
const date = ref(new Date().getFullYear());
</script>