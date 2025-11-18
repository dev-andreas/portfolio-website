<template>
  <div class="flex justify-center h-0 w-full">
    <div class="flex justify-center h-almost-screen w-full overflow-hidden py-3">
      <div class="flex flex-col items-end gap-3 transition-all duration-200 ease-out standard-grid-width translate-x-3">
        <div class="flex items-center justify-center bg-backg-light dark:bg-backg-dark rounded-full bg-opacity-50 dark:bg-opacity-50 backdrop-blur dark:backdrop-blur border"
             :class="scrolledToTop ? 'border-transparent' : 'border-primary-300 dark:border-primary-dark-300'">
          <DarkModeToggle></DarkModeToggle>
          <NavbarBurgerButton v-model="open" />
        </div>
        <div class="h-0 transition-all duration-300 ease-in-out" :class="{ 'translate-full-width': !open }">
          <div class="flex flex-col items-stretch w-full">
            <NavbarItemList @selected="open = false" class="p-5 rounded-3xl border border-primary-300 dark:border-primary-dark-300 bg-backg-light dark:bg-backg-dark w-64 bg-opacity-50 dark:bg-opacity-50 backdrop-blur dark:backdrop-blur shadow-lg"></NavbarItemList>
          </div>
        </div>
      </div>
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
