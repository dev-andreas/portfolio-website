<template>
  <section class="flex flex-col gap-10 relative py-20" :id="props.id">
    <div class="absolute w-full h-1/2 -z-50" ref="articleSection"></div>
    <h2 v-if="props.showHeader" class="section-header">
      {{ props.header }}
    </h2>
    <slot></slot>
  </section>
</template>

<script setup>
import { useArticleStore } from '~/stores/stores.js';

const props = defineProps({
  id: {
    type: String,
    default: ""
  },
  header: {
    type: String,
    default: ""
  },
  showHeader: {
    type: Boolean,
    default: true
  }
});

const articleStore = useArticleStore();

const isIntersectingElement = ref(false);

watch(isIntersectingElement, (value) => {
  articleStore.updateSection(props.id, value)
});

const articleSection = ref(null);

function handler(entries) {
  isIntersectingElement.value = entries[0].isIntersecting;
};

onMounted(() => {
  articleStore.appendSection({
    id: props.id,
    name: props.header,
  })
  const observer = new window.IntersectionObserver(handler);
  observer.observe(articleSection.value);
});
</script>