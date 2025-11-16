<template>
  <div>
    <div class="flex justify-center bg-backg-light dark:bg-backg-dark backdrop-blur-lg px-5 py-3 border-b transition-all duration-200 ease-out"
      :class="{ 'bg-opacity-70': !open, 'border-backg-light dark:border-backg-dark': open, 'border-primary-300 dark:border-primary-dark-100': !scrolledToTop && !open, 'border-transparent': scrolledToTop && !open }">
      <div class="standard-grid-width flex flex-row-reverse justify-between items-center h-7">
        <div class="flex items-center justify-center">
          <!-- Burger -->
         <NavbarBurgerButton v-model="open" />
        </div>
        <transition name="slide-top" mode="out-in">
          <a v-if="!scrolledToTop" class="font-bold text-xl">Andreas Gerasimow</a>
        </transition>
      </div>
    </div>
    <transition name="slide-bottom" mode="">
      <div v-if="open" class="h-0">
        <div class="flex flex-col items-center bg-backg-light dark:bg-backg-dark border-b border-primary-300 dark:border-primary-dark-100 shadow-sm pb-5">
          <NavbarItemList @selected="open = false" class="standard-grid-width"></NavbarItemList>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import DarkModeToggle from "~/components/DarkModeToggle.vue";

const props = defineProps({
  links: Array
});

const open = ref(false);


const scrolledToTop = ref(true)

function checkWindowScroll() {
  scrolledToTop.value = (window.scrollY <= 70);
}

onMounted(() => {
  window.addEventListener("scroll", checkWindowScroll);
});

onBeforeMount(() => {
  window.removeEventListener("scroll", checkWindowScroll);
});
</script>

<style></style>
