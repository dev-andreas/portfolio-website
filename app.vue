<template>
  <NavBar :links="articleStore.sectionsList"></NavBar>
  <NuxtPage />
  <div v-if="mobileView" class="flex justify-center">
    <FooterPart class="standard-grid-width mb-10" />
  </div>
</template>

<script setup>
useHead({
  script: [
    {
      children: `
        (function() {
          const saved = localStorage.getItem('theme');
          const system = window.matchMedia('(prefers-color-scheme: dark)').matches;
          const isDark = saved === 'dark' || ((saved === 'system' || saved == null) && system);
          if (isDark) {
            document.documentElement.classList.add('dark');
          }
        })();
      `,
    }
  ]
});

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

provide("screenWidth", width);
provide("mobileView", mobileView);
</script>