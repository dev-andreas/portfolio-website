<template>
  <nav class="sticky top-0 z-40">
    <NavbarPhoneNav :links="props.links" v-if="mobileView" />
  </nav>
</template>

<script setup>
const props = defineProps({
  links: Array,
});

const mobileView = inject("mobileView");
</script>