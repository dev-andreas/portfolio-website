<template>
    <NavBar :links="links" />
    <NuxtPage /> 
    <FooterPart class="w-full" />
</template>

<style>
    .fade-enter-active,
    .fade-leave-active {
        transition: all 0.2s ease-out;
    }
    .fade-enter-from,
    .fade-leave-to {
        opacity: 0;
        transform: translateY(-0.25rem);
    }
    body {
      @apply bg-backg-light
    }
</style>

<script setup lang="ts">
  const links= ref([
        {
          name: "About me",
          route: "#about",
          jump: true,
        },
        {
          name: "Technologies",
          route: "#technologies",
          jump: true,
        },
        {
          name: "Projects",
          route: "#projects",
          jump: true,
        },
        {
          name: "Contact",
          route: "#contact",
          jump: true,
        },
      ]);
</script>