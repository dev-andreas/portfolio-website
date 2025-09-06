<template>
    <div class="flex flex-col items-center border-b border-font-dark group">
        <div class="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center p-5 group-hover:scale-125 transition ease-out duration-200">
            <img :src="props.src" :alt="props.alt" class="flat-shadow-sm transition ease-out duration-200" />
        </div>
        <p class="font-bold"><slot></slot></p>
    </div>
</template>

<script setup>

const props = defineProps({
    src: String,
    alt: String
})

</script>