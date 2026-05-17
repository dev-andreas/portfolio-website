<template>
  <div class="flex flex-col sm:flex-row gap-5 items-center">
    <div class="standard-grid-width shadow-xl standard-grid-height sm:w-36 sm:h-36 flex-shrink-0 overflow-hidden rounded-3xl sm:rounded-2xl border border-font-dark dark:border-primary-dark-100">
      <img :src="props.src" :alt="props.alt" class="object-cover w-full">
    </div>
    <div class="flex flex-col items-start gap-2">
      <p class="font-bold">{{ props.title }}</p>
      <p>{{ props.description }}</p>
      <ExternalButton :href="href">
        {{ props.buttonName || "View Project" }}
      </ExternalButton>
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
  src: {
    type: String,
    default: null
  },
  alt: {
    type: String,
    default: "project",
  },
  title: {
    type: String,
    default: ""
  },
  description: {
    type: String,
    default: "",
  },
  href: {
    type: String,
    default: "",
  },
  buttonName: {
    type: String,
    default: "",
  }
});
</script>
