<template>
  <div class="flex justify-center w-full h-0">
    <div class="flex justify-center w-full py-3">
      <div class="flex flex-col items-end gap-3 transition-all duration-200 ease-out standard-grid-width translate-x-3">
        <div class="flex items-center justify-center bg-backg-light dark:bg-backg-dark rounded-full bg-opacity-50 dark:bg-opacity-50 backdrop-blur dark:backdrop-blur border"
             :class="scrolledToTop ? 'border-transparent' : 'border-primary-300 dark:border-primary-dark-300'">
          <ThemeButton
              :modelValue="menu === MenuType.THEME"
              @update:modelValue="(open) => open ? emits('update:menu', MenuType.THEME) : emits('update:menu', MenuType.NONE)"/>
          <NavbarBurgerButton
              :modelValue="menu === MenuType.NAVIGATION"
              @update:modelValue="(open) => open ? emits('update:menu', MenuType.NAVIGATION) : emits('update:menu', MenuType.NONE)"/>
        </div>
        <Transition name="shift-left" mode="out-in">
          <div v-if="menu === MenuType.NAVIGATION" class>
            <div class="flex flex-col items-stretch w-full">
              <NavbarItemList @selected="emits('update:menu', MenuType.NONE)" class="menu-surface" />
            </div>
          </div>
          <div v-else-if="menu === MenuType.THEME">
            <div class="flex flex-col items-stretch w-full">
              <ThemeSelector @selected="emits('update:menu', MenuType.NONE)" />
            </div>
          </div>
        </Transition>
      </div>
    </div>
  </div>
</template>

<script setup>

import ThemeSelector from "~/components/navbar/ThemeSelector.vue";

const props = defineProps({
  links: Array,
  menu: String,
});

const emits = defineEmits(["update:menu"]);

const { MenuType } = useMenuType()

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
