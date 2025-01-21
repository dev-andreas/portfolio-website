<template>
  <ul class="flex flex-col gap-5 relative">
    <div class="absolute w-0 h-full border-l border-font-dark left-2 z-0"></div>
    <div class="absolute w-0 top-full h-6 border-l border-dashed border-font-dark left-2 z-0"></div>
    <span class="h-0"></span>
    <li v-for="item, index in props.items"
      class="flex items-start z-10" 
      :key="item.title"
      @mouseover="onHover(index)"
      @mouseleave="onLeave()" ref>
      <div class="flex items-center">
        <div class="w-4 h-4 rounded-full border border-font-dark transition-all duration-200 ease-out translate-y-1" :class="[index == hover ? 'bg-font-dark' : 'bg-backg-light']"></div>
      </div>
      <div class="ml-4 w-60 xs:w-72 sm:w-120 lg:w-80 xl:w-120">
        <p>{{ item.time }}</p>
        <p><b>{{ item.institution }}</b></p>
        <i>{{ item.title }}</i>
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