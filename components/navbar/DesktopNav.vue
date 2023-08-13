<template>
  <div class="bg-backg-light bg-opacity-70 backdrop-blur-lg flex justify-center items-center">
    <NuxtLink to="/" class="py-3 px-3 transition-all duration-300 flat-shadow-sm" :class="{ 'opacity-0 -translate-y-1 blur-md' : !showIcon }">
      <img
        src="../../assets/images/lightbulb_logo_black.svg"
        alt="logo"
        class="h-6"
      />
    </NuxtLink>
    <ul class="flex items-center">
      <li v-for="(link, index) in props.links" :key="index" class="mx-2">
        <a
          v-if="link.jump"
          :href="link.route"
          class="tracking-wider p-2 border-b border-transparent hover:border-font-dark transition ease-out duration-500">
          {{ link.name }}
        </a>
        <NuxtLink
          v-else-if="!link.subdirs"
          :to="link.route"
          class="tracking-wider p-2 border-b border-transparent hover:border-font-dark transition ease-out duration-500">
          {{ link.name }}
        </NuxtLink>
        <NavbarDesktopLadder v-else :link="link" />
      </li>
    </ul>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useNavbarStore } from "~/stores/stores.js";

const { showIcon } = storeToRefs(useNavbarStore());

const props = defineProps({
  links: Array,
});
</script>

<style>
</style>
