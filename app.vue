<template>
  <NavBar :links="articleStore.sectionsList"></NavBar>
  <NuxtPage />
  <div v-if="mobileView" class="flex justify-center">
    <FooterPart class="standard-grid-width mb-10" />
  </div>
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
  @apply bg-backg-light;
}
</style>

<script setup>
import { useArticleStore } from "~/stores/stores.js";
const articleStore = useArticleStore();

const width = ref(0);

onMounted(() => {
  resize();
  window.addEventListener('resize', resize);
});

onUnmounted(() => {
  window.removeEventListener('resize', resize);
});

const mobileView = computed(() => width.value < 1024);

function resize() {
  width.value = window.innerWidth;
}

onMounted(() => {
  const hidden = document.createElement('div');
  hidden.style.height = '0';
  hidden.style.overflow = 'hidden';
  document.body.appendChild(hidden);
  window.addEventListener('scroll', () => {
    hidden.textContent = window.scrollY;
  });
})


provide("screenWidth", width);
provide("mobileView", mobileView);
</script>