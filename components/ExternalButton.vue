<template>
    <a :href="props.href" target="_blank" rel="noopener"
        class="btn btn-primary flex items-center gap-2 group">
        <span class="group-hover:text-font-light dark:group-hover:text-font-dark transition-all duration-200 ease-out">
            <slot></slot>
        </span>
        <SvgpathsMailSvg v-if="icon == 'mail'"
            class="stroke-font-dark dark:stroke-font-light group-hover:stroke-font-light dark:group-hover:stroke-font-dark h-5 transition-all duration-200 ease-out">
        </SvgpathsMailSvg>
        <SvgpathsArrowUpRightSvg v-else
            class="stroke-font-dark dark:stroke-font-light group-hover:stroke-font-light dark:group-hover:stroke-font-dark h-3 transition-all duration-200 ease-out">
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