<template>
    <ul class="flex flex-col gap-2">
        <li v-for="section in articleStore.sectionsList" :key="section.id" class="flex gap-3 items-center relative">
            <div :class="section.id == articleStore.getLowestSectionId ? '' : 'opacity-0'"
                class="absolute bg-font-dark w-1 h-1 rounded-full transition ease-out duration-200">
            </div>
            <a :href="'#' + section.id" @click.prevent="emit('selected'); goToId(section.id);"
                :class="section.id == articleStore.getLowestSectionId ? 'text-font-dark font-bold translate-x-4' : 'hover:text-primary-700'"
                class="transition ease-out duration-200">{{
                    section.name }}</a>
        </li>
    </ul>
</template>

<script setup>
import { useArticleStore } from '~/stores/stores.js';

const emit = defineEmits('selected');
const articleStore = useArticleStore();

function goToId(id) {
    if (id == 'top') {
        document.body.scrollIntoView({ behavior: "smooth" });
        history.replaceState(null, "", "/");
    } else if (id != '') {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        history.replaceState(null, "", `#${id}`);
    }
}
</script>