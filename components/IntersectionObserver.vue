<template>
  <div ref="line" class="w-full h-px relative z-50" :class="{'bg-red-600': props.debug}" />
</template>
  
<script setup>
  const props = defineProps({
    debug: {
      type: Boolean,
      default: false
    }
  });

  const emit = defineEmits({
    intersects: null
  });

  const isIntersectingElement = ref(false);

  watch(isIntersectingElement, (value) => {
    emit('intersects', value);
  });

  const line = ref(null);

  function handler(entries) {
    if (entries[0].isIntersecting) {
      isIntersectingElement.value = true;
    } else {
      isIntersectingElement.value = false;
    }
  };

  onMounted(() => {
    const observer = new window.IntersectionObserver(handler);
    observer.observe(line.value);
  });
</script>