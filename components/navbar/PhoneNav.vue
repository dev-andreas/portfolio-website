<template>
  <div>
    <div class="flex justify-center bg-backg-light backdrop-blur-lg px-5 py-3 border-b"
      :class="{ 'bg-opacity-70 shadow-sm border-primary-300': !open, 'border-backg-light': open }">
      <div class="standard-grid-width flex flex-row-reverse justify-between items-center h-7">
        <div class="flex items-center justify-center">
          <!-- Burger -->
          <div class="flex flex-col items-end justify-center gap-1" @click="toggle">
            <div class=" w-5 h-0.5 transition ease-out duration-300 transform bg-font-dark rounded-full"
              :class="[open ? '-rotate-45 translate-y-2' : 'rotate-0']"></div>
            <div class="w-3 h-0.5 transition ease-out duration-300 bg-font-dark rounded-full"
              :class="[open ? 'opacity-0' : 'opacity-100']"></div>
            <div class="h-0.5 transition ease-out duration-500 transform bg-font-dark rounded-full"
              :class="[open ? 'rotate-45 -translate-y-1 w-5' : 'rotate-0 w-4']"></div>
          </div>
        </div>
        <transition name="slide-top" mode="out-in">
          <a v-if="!scrolledToTop" class="font-bold flat-shadow-sm text-xl">Andreas Gerasimow</a>
        </transition>
      </div>
    </div>
    <transition name="slide-bottom" mode="">
      <div v-if="open" class="h-0">
        <div class="flex flex-col items-center bg-backg-light border-b border-primary-300 shadow-sm pb-5">
          <NavbarItemList @selected="open = false" class="standard-grid-width"></NavbarItemList>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { useArticleStore } from '~/stores/stores.js';

const articleStore = useArticleStore();

const props = defineProps({
  links: Array
});

const open = ref(false);

function toggle() {
  open.value = !open.value;
}



const scrolledToTop = ref(true)

function checkWindowScroll() {
  scrolledToTop.value = (window.scrollY <= 70);
}

onMounted(() => {
  window.addEventListener("scroll", checkWindowScroll);
});

onBeforeMount(() => {
  window.removeEventListener("scroll", checkWindowScroll);
  articleStore.$reset();
});
</script>

<style></style>
