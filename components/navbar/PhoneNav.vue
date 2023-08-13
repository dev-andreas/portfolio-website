<template>
  <div>
    <div class="flex justify-between bg-backg-light backdrop-blur-lg " :class="{ 'bg-opacity-70' : !open }">
      <NuxtLink to="/" class="py-3 px-3 transition-all duration-300 flat-shadow-sm" :class="{ 'opacity-0 -translate-y-2 blur-md' : !showIcon }" @click="open = false">
        <img src="../../assets/images/lightbulb_logo_black.svg" alt="ultratec logo" class="h-8" />
      </NuxtLink>
      <div class="flex items-center justify-center">

        <!-- Burger -->
        <div class="flex flex-col items-end justify-center mr-5" @click="toggle">
          <div class="w-7 h-1 my-0.5 transition ease-out duration-300 transform bg-font-dark rounded-full"
            :class="[open ? '-rotate-45 translate-y-2' : 'rotate-0']"></div>
          <div class="w-6 h-1 my-0.5 transition ease-out duration-300 bg-font-dark rounded-full"
            :class="[open ? 'opacity-0' : 'opacity-100']"></div>
          <div class="h-1 my-0.5 transition ease-out duration-500 transform bg-font-dark rounded-full"
            :class="[open ? 'rotate-45 -translate-y-2 w-7' : 'rotate-0 w-5']"></div>
        </div>

      </div>
    </div>
    <transition name="slide-bottom" mode="">
      <div v-if="open" class="h-0">
        <div class="bg-backg-light shadow-sm pb-5">
          <ul class="flex flex-col items-center sm:ml-10 mb-5">

            <!-- Links -->
            <li v-for="(link, index) in props.links" :key="index" class="my-2">
              <a v-if="link.jump" :href="link.route"><p class="p-2 bgg rounded-sm border border-font-dark text-center w-72 bg-backg-light flat-shadow">{{ link.name }}</p></a>
              <NuxtLink v-else-if="!link.subdirs" :to="link.route">
                <p class="p-2 bgg rounded-sm border text-center w-64" @click="open = false">
                  {{ link.name }}
                </p>
              </NuxtLink>
              <NavbarPhoneLadder v-else :link="link" :index="index" @jumped="open = false" />
            </li>
          </ul>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useNavbarStore } from "~/stores/stores.js";

const { showIcon } = storeToRefs(useNavbarStore());

const props = defineProps({
  links: Array
});

const open = ref(false);

function toggle() {
  open.value = !open.value;
}
</script>

<style>
</style>
