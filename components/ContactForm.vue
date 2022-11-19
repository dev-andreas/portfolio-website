<template>
    <div>
        <form @submit.prevent="send" class="flex flex-col">
            <input type="text" class="inpt" id="name" v-model="name">
            <label for="name" class="text-sm">Full Name / Company Name:</label>
            <input type="text" id="subject" class="inpt mt-5" v-model="subject">
            <label for="subject" class="text-sm">Subject:</label>
            <label for="body" class="text-sm mt-5">Message:</label>
            <textarea class="tbox" id="body" cols="10" rows="10" v-model="body"></textarea>
            <span class="flex items-center gap-5 mt-5">
                <input type="submit" value="Send Mail" class="btn-primary self-start">
                <p class="text-red-500">{{ response }}</p>
            </span>
        </form>
    </div>
</template>

<script setup>

const name = ref('');
const subject = ref('');
const body = ref('');

const response = ref('');

async function send() {

    if (name.value === '') {
        response.value = 'Name field is empty.';
        return;
    }
    if (subject.value === '') {
        response.value = 'Subject field is empty.';
        return;
    }
    if (body.value === '') {
        response.value = 'Message field is empty.';
        return;
    }

    const message = `This E-Mail was sent via contact form by ${name.value}.<br><br>${body.value}`;
    window.open(`mailto:andreas.gerasimow@uni-ulm.de?subject=${subject.value}&body=${message}`);
}
</script>