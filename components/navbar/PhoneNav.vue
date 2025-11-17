<template>
  <div>
    <div class="flex justify-between flex-row-reverse px-5 py-3 transition-all duration-200 ease-out w-full">
      <div class="flex flex-col items-center justify-center bg-backg-light dark:bg-backg-dark rounded-full bg-opacity-50 dark:bg-opacity-50 backdrop-blur dark:backdrop-blur border"
      :class="scrolledToTop ? 'border-transparent' : 'border-primary-300 dark:border-primary-dark-300'">
        <div class="flex">
          <DarkModeToggle></DarkModeToggle>
          <NavbarBurgerButton v-model="open" />
        </div>
      </div>
      <transition name="slide-bottom" mode="">
        <div v-if="open" class="h-0">
          <div class="flex flex-col items-stretch w-full">
            <NavbarItemList @selected="open = false" class="p-5 rounded-2xl border border-primary-300 dark:border-primary-dark-300 bg-backg-light dark:bg-backg-dark w-64 shadow-lg"></NavbarItemList>
          </div>
        </div>
      </transition>
    </div>
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
