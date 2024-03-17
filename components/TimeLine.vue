<template>
  <ul class="flex flex-col gap-5 relative">
    <div class="absolute w-0 h-full border-l border-font-dark left-20 sm:left-28 -translate-x-3 sm:-translate-x-1 z-0"></div>
    <div class="absolute w-0 top-full h-6 border-l border-dashed border-font-dark left-20 sm:left-28 -translate-x-3 sm:-translate-x-1 z-0"></div>
    <span class="h-0"></span>
    <li v-for="item, index in props.items"
      class="flex items-center z-10" 
      :key="item.title"
      @mouseover="onHover(index)"
      @mouseleave="onLeave()" ref>
      <p class="w-10 sm:w-20 sm:whitespace-nowrap transition-all duration-200 ease-out" :class="{ 'font-bold': index == hover }">{{ item.time }}</p>
      <div class="mx-5 flex items-center">
        <div class="w-4 h-4 rounded-full border border-font-dark transition-all duration-200 ease-out" :class="[index == hover ? 'bg-font-dark' : 'bg-backg-light']"></div>
        <div class="w-6 h-0 border-b border-font-dark"></div>
        <div class="w-2 h-2 bg-font-dark rounded-full"></div>
      </div>
      <div class="p-3 rounded-lg w-64 sm:w-96 lg:w-64 xl:w-96">
        <p><b>{{ item.title }}</b>, {{ item.institution }}</p>
        <ul>
          <li class="list-disc translate-x-5" v-for="detail in item.details">{{ detail }}</li>
        </ul>
      </div>
    </li>
  </ul>
</template>

<script setup>

const hover = ref(-1);

function onHover(index) {
  hover.value = index;
}

function onLeave() {
  hover.value = -1;
}

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