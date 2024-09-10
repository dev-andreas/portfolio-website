<template>
  <div
    class="flex flex-col items-start justify-center justify-self-center"
  >
    <div
      v-for="item in items"
      :key="item.id"
      class="my-4 flex items-center h-full transform hover:translate-x-2 transition ease-out duration-200"
    >
      <div class="flex flex-col items-start h-full border-font-dark">
        <p class="text-lg sm:text-base font-bold flat-shadow-sm">
          {{ item.name }}
        </p>
        <div class="text-center flex flat-shadow">
            <div
              class="h-8 border border-l-4 border-font-dark bg-backg-light bgg rounded-md"
              :style="{
                width: (item.votes / 100) * 35 + 'rem',
              }"
            ></div>
        </div>
      </div>
    </div>
    <div class="flex justify-between w-full opacity-50">
      <p class="text-lg sm:text-base">Noob</p>
      <p class="text-lg sm:text-base">Pro</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
    items: Array,
});
</script>

<style scoped>

</style>