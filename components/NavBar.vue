<template>
  <nav class="fixed top-0 left-0 right-0 z-40 translate-y-0" ref="navbar">
    <NavbarPhoneNav :links="props.links" class="flex lg:hidden" :menu="menu" @update:menu="(menuType) => menu = menuType" />
    <div class="h-0 hidden lg:block">
      <div class="p-5 w-full flex justify-end relative">
        <!-- Light mode gradient -->
        <div class="absolute inset-0 bg-gradient-to-b from-backg-light to-transparent transition-opacity duration-300 dark:opacity-0"></div>

        <!-- Dark mode gradient -->
        <div class="absolute inset-0 bg-gradient-to-b from-backg-dark to-transparent transition-opacity duration-300 opacity-0 dark:opacity-100"></div>

        <div class="z-10">
          <ThemeButton :modelValue="menu === MenuType.THEME" @update:modelValue="(show) => menu = show ? MenuType.THEME : MenuType.NONE" />
        </div>

        <Transition class="absolute top-20" name="shift-left" mode="out-in">
          <div v-if="menu === MenuType.THEME">
            <div class="flex flex-col items-stretch w-full">
              <ThemeSelector @selected="menu = MenuType.NONE" />
            </div>
          </div>
        </Transition>
      </div>
    </div>
  </nav>
</template>

<script setup>
import ThemeSelector from "~/components/navbar/ThemeSelector.vue";

const props = defineProps({
  links: Array,
});

const { MenuType } = useMenuType();

const menu = ref(MenuType.NONE);

// click listener
const navbar = ref(null)
const listenerAdded = ref(false)

const checkOutsideClick = (e) => {
  if (!navbar.value.contains(e.target)) {
    menu.value = MenuType.NONE;
  }
}

onMounted(() => {
  if (!listenerAdded.value) {
    document.addEventListener("click", checkOutsideClick)
    listenerAdded.value = true
  }
})

onBeforeUnmount(() => {
  document.removeEventListener("click", checkOutsideClick)
})
</script>