<template>
  <div class="flex flex-col sm:flex-row gap-5 items-center">
    <div class="flex flex-col items-start gap-2">
      <p class="font-bold">{{ props.title }}</p>
      <p>Authors: {{ props.authors }}</p>
      <ExternalButton :href="href">
        View Paper
      </ExternalButton>
    </div>
  </div>
</template>

<script setup>
  const props = defineProps({
    title: {
      type: String,
      default: ""
    },
    authors: {
      type: String,
      default: "",
    },
    href: {
      type: String,
      default: "",
    }
  });
</script>

<style scoped>

</style>