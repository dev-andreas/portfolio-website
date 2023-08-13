<template>
  <nav class="h-0 sticky top-0 z-40">
    <NavbarPhoneNav :links="props.links" v-if="mobileView" />
    <NavbarDesktopNav :links="props.links" v-else />
  </nav>
</template>

<script setup>
const props = defineProps({
  links: Array,
});

const width = ref(0);

onMounted(() => {
  resize();
  window.addEventListener('resize', resize);
});

onUnmounted(() => {
  window.removeEventListener('resize', resize);
});

const mobileView = computed(() => width.value <= 768);

function resize() {
  width.value = window.innerWidth;
}


</script>

<style></style>