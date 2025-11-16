<template>
  <ul class="flex flex-col gap-5 relative">
    <div class="absolute w-4 h-full z-0 flex justify-center">
      <div class="bg-primary-200 w-0.25">

      </div>
    </div>
    <span class="h-0"></span>
    <li v-for="item, index in props.items" class="flex items-start z-10" :key="item.title" @mouseover="onHover(index)"
      @mouseleave="onLeave()" ref>
      <div class="flex items-center">
        <div class="w-4 h-4 rounded-full border border-font-dark transition-all duration-200 ease-out translate-y-1"
          :class="[index == hover ? 'bg-font-dark' : 'bg-backg-light']"></div>
      </div>
      <div class="flex flex-col gap-2 ml-4">
        <div>
          <p>{{ item.time }}</p>
          <p><b>{{ item.institution }}</b></p>
          <p><i>{{ item.title }}</i></p>
        </div>
        <ul v-if="item.details.length > 0">
          <li v-for="detail in item.details">{{ detail }}</li>
        </ul>
        <div class="flex flex-wrap gap-2">
          <div class=" bg-primary-100 text-primary-500 py-0.5 px-2 rounded-lg" v-for="technology in item.technologies">
            {{ technology }}</div>
        </div>
      </div>
    </li>
    <span class="h-0"></span>
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