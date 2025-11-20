<template>
  <NavBar :links="articleStore.sectionsList"></NavBar>
  <NuxtPage />
  <div class="flex lg:hidden justify-center">
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
          window.__INITIAL_WIDTH__ = window.innerWidth;
        })();
      `,
    }
  ]
});

const articleStore = useArticleStore();
</script>