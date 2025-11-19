<template>
  <nav class="fixed top-0 left-0 right-0 z-40 translate-y-0">
    <NavbarPhoneNav :links="props.links" v-if="mobileView" />
    <div v-else class="h-0">
      <div class="p-5 w-full flex justify-end relative">
        <!-- Light mode gradient -->
        <div class="absolute inset-0 bg-gradient-to-b from-backg-light to-transparent transition-opacity duration-300 dark:opacity-0"></div>

        <!-- Dark mode gradient -->
        <div class="absolute inset-0 bg-gradient-to-b from-backg-dark to-transparent transition-opacity duration-300 opacity-0 dark:opacity-100"></div>

        <div class="relative z-10">
          <DarkModeToggle/>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import DarkModeToggle from "~/components/DarkModeToggle.vue";

const props = defineProps({
  links: Array,
});

const mobileView = inject("mobileView");
</script>