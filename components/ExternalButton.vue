<template>
    <a :href="props.href" target="_blank" rel="noopener"
        class="px-2 py-1 mt-1 tracking-wider font-bold border border-font-dark rounded-md flex items-center gap-2 hover:bg-font-dark group flat-shadow bg-backg-light cursor-pointer transition-all duration-200 ease-out">
        <span class="group-hover:text-font-light transition-all duration-200 ease-out">
            <slot></slot>
        </span>
        <SvgpathsMailSvg v-if="icon == 'mail'"
            class="stroke-font-dark group-hover:stroke-font-light h-5 transition-all duration-200 ease-out">
        </SvgpathsMailSvg>
        <SvgpathsArrowUpRightSvg v-else
            class="stroke-font-dark group-hover:stroke-font-light h-3 transition-all duration-200 ease-out">
        </SvgpathsArrowUpRightSvg>
    </a>
</template>

<script setup>
const props = defineProps({
    href: {
        type: String,
    },
    icon: {
        type: String,
        default: ''
    }
});
</script>