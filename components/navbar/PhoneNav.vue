<template>
  <div>
    <div class="flex justify-center bg-backg-light backdrop-blur-lg px-5 py-3 border-b transition-all duration-200 ease-out"
      :class="{ 'bg-opacity-70': !open, 'border-backg-light': open, 'border-primary-300': !scrolledToTop && !open, 'border-transparent': scrolledToTop && !open }">
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
        <div class="flex flex-col items-center bg-backg-light border-b border-primary-300 shadow-sm pb-5">
          <NavbarItemList @selected="open = false" class="standard-grid-width"></NavbarItemList>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
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
