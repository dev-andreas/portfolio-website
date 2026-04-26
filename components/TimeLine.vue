<template>
  <ul ref="listRef" class="flex flex-col gap-5 relative">
    <div class="absolute w-3 h-full z-0 flex justify-center">
      <div class="bg-primary-200 dark:bg-primary-dark-200 w-0.25">

      </div>
    </div>
    <span class="h-0"></span>
    <li v-for="(item, index) in props.items" :ref="el => itemRefs[index] = el" class="flex items-start z-10" :key="item.title" @mouseover="onHover(index)"
      @mouseleave="onLeave()">
      <div class="flex items-center">
        <div class="w-3 h-3 rounded-full border border-font-dark dark:border-font-light transition-all duration-200 ease-out translate-y-1"
          :class="[index === hover ? 'bg-font-dark dark:bg-font-light' : 'bg-backg-light dark:bg-backg-dark']"></div>
      </div>
      <div class="flex flex-col gap-2 ml-4">
        <div>
          <p>{{ item.time }}</p>
          <p><b>{{ item.institution }}</b></p>
          <p>{{ item.title }}</p>
        </div>
        <ul v-if="item.details.length > 0">
          <li class="text-font-dimmed-dark dark:text-font-dimmed-light" v-for="detail in item.details">{{ detail }}</li>
        </ul>
        <div class="flex flex-wrap gap-2">
          <div class=" bg-primary-200 dark:bg-primary-dark-100 text-primary-600 dark:text-primary-dark-500 py-0.5 px-2 rounded-lg" v-for="technology in item.technologies">
            {{ technology }}</div>
        </div>
      </div>
    </li>
    <span class="h-0"></span>
  </ul>
</template>

<script setup>

const hover = ref(-1);
const itemRefs = ref([]);
const listRef = ref(null);

const isTouchScreen = ref(false);

function onHover(index) {
  if (!isTouchScreen.value) hover.value = index;
}

function onLeave() {
  if (!isTouchScreen.value) hover.value = -1;
}

function updateCenterItem() {
  if (!isTouchScreen.value) return;
  const centerY = window.innerHeight / 2;

  if (listRef.value) {
    const listRect = listRef.value.getBoundingClientRect();
    if (centerY < listRect.top || centerY > listRect.bottom) {
      hover.value = -1;
      return;
    }
  }
  let closestIndex = -1;
  let closestDist = Infinity;
  itemRefs.value.forEach((el, index) => {
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const elCenter = rect.top + rect.height / 2;
    const dist = Math.abs(elCenter - centerY);
    if (dist < closestDist) {
      closestDist = dist;
      closestIndex = index;
    }
  });
  hover.value = closestIndex;
}

function checkPointerType() {
  isTouchScreen.value = window.matchMedia('(pointer: coarse)').matches;
  if (!isTouchScreen.value) {
    hover.value = -1;
  } else {
    updateCenterItem();
  }
}

onMounted(() => {
  checkPointerType();
  const pointerQuery = window.matchMedia('(pointer: coarse)');
  pointerQuery.addEventListener('change', checkPointerType);
  window.addEventListener('scroll', updateCenterItem, { passive: true });
});

onUnmounted(() => {
  const pointerQuery = window.matchMedia('(pointer: coarse)');
  pointerQuery.removeEventListener('change', checkPointerType);
  window.removeEventListener('scroll', updateCenterItem);
});

const props = defineProps({
  items: {
    type: Array,
    default: null
  },
});
</script>

<style scoped>
.arrow-up {
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 5px solid #4e4b44;
}
</style>