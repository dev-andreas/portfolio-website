<template>
  <footer class="flex flex-col md:flex-row items-center justify-center md:justify-between h-40 px-10">
    <div class="text">
      <p>&copy; {{ date }} Andreas Gerasimow</p>
    </div>
    <div class="flex mt-5 lg:mt-0 gap-5">
      <a href="https://github.com/dev-andreas" target="_blank" rel="noopener">
        <img src="~/assets/images/social_nets/github.svg" alt="github" class="h-12 flat-shadow-sm" />
      </a>
      <a href="https://www.linkedin.com/in/andreas-gerasimow-341a551b2/" target="_blank" rel="noopener">
        <img src="~/assets/images/social_nets/linkedin.svg" alt="linkedin" class="h-12 flat-shadow-sm" />
      </a>
    </div>
  </footer>
</template>

<script setup>
const date = ref(new Date().getFullYear())
</script>