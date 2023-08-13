<template>
    <IntersectionAnimation
      class="p-5 w-80 h-60 flex flex-col justify-center items-center border border-font-dark bg-backg-light flat-shadow rounded-md"
      startingClass="opacity-0 translate-y-10"
      endingClass="opacity-100 translate-y-0"
    >
      <div
        class="bgg w-full h-full flex flex-col justify-center items-center"
        @mouseover="onHover()"
        @mouseleave="onLeave()"
      >
        <transition name="slide-top" mode="out-in">
          <div
            v-if="showSlot && currentProject == props.index"
            key="hover"
            class="flex flex-col justify-center items-center text-center"
          >
            <slot>Project</slot>
          </div>
          <div v-else
            key="nonhover"
            class="flex flex-col justify-center items-center"
          >
            <img :src="logo" :alt="alt" class="h-24" />
            <p class="text-2xl font-bold mt-2">{{ title }}</p>
          </div>
        </transition>
      </div>
    </IntersectionAnimation>
  </template>
  
<script setup>
import { storeToRefs } from "pinia";
import { useProjectsStore } from "~/stores/stores.js";

const { currentProject } = storeToRefs(useProjectsStore());

const props = defineProps({
  logo: {
    type: String,
    default: null
  },
  alt: {
    type: String,
    default: "project",
  },
  title: {
    type: String,
    default: "title",
  },
  index: {
    type: Number,
  },
});

const hover = ref(false);

function onHover() {
    hover.value = true;
    currentProject.value = props.index;
}

function onLeave() {
    hover.value = false;
    currentProject.value = -1
}

const showSlot = computed(() => hover.value);
</script>
  
<style scoped>
</style>