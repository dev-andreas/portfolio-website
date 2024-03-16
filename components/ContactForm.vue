<template>
    <div>
        <form @submit.prevent="send" class="flex flex-col">
            <label for="name" class="text-sm">Full Name / Company Name:</label>
            <input type="text" class="inpt" id="name" v-model="name.input">
            <p class="text-sm text-red-500">{{ name.error }}</p>

            <label for="email" class="text-sm mt-3">E-Mail:</label>
            <input type="email" class="inpt" id="email" v-model="email.input">
            <p class="text-sm text-red-500">{{ email.error }}</p>

            <label for="subject" class="text-sm mt-3">Subject:</label>
            <input type="text" id="subject" class="inpt" v-model="subject.input">
            <p class="text-sm text-red-500">{{ subject.error }}</p>


            <label for="message" class="text-sm mt-3">Message:</label>
            <textarea class="tbox" id="message" cols="10" rows="10" v-model="message.input"></textarea>
            <p class="text-sm text-red-500">{{ message.error }}</p>

            <p class="mt-5 text-sm">
                This site is protected by reCAPTCHA and the Google
                    <a href="https://policies.google.com/privacy" class="text-blue-500">Privacy Policy</a> and
                    <a href="https://policies.google.com/terms" class="text-blue-500">Terms of Service</a> apply.
            </p>

            <span class="flex items-center gap-5 mt-5">
                <Transition name="slide-top" mode="out-in">
                    <div v-if="loading" class="w-2 h-2 bg-font-dark slide-left-right rounded-full"></div>
                    <p v-else-if="response" class="p-1 text-blue-500">✓ {{ response }}</p>
                    <p v-else-if="error" class="p-1 text-red-500">✗ {{ error }}</p>
                    <input v-else type="submit" value="Send Mail" class="btn-primary self-start">
                </Transition>
            </span>
        </form>
    </div>
</template>

<script setup>

const runtimeConfig = useRuntimeConfig();

useHead({
    script: [
        { src: `https://www.google.com/recaptcha/api.js?render=${runtimeConfig.public.recaptchaPublic}` }
    ],
});

const name = reactive({ input: '', error: '' });
const email = reactive({ input: '', error: '' });
const subject = reactive({ input: '', error: '' });
const message = reactive({ input: '', error: '' });

const loading = ref(false);
const response = ref('');
const error = ref('');
const errors = ref([]);

onMounted(() => {
    const mailResData = JSON.parse(localStorage.getItem('mailResData'));
    if (mailResData == null) return;
    if (Date.now() < mailResData.time + 60000) {
        response.value = mailResData.msg;
    }
});

async function send() {
    grecaptcha.ready(async () => {
        loading.value = true;
        response.value = '';
        try {
            const token = await grecaptcha.execute(runtimeConfig.public.recaptchaPublic, {action: 'submit'})
            const res = await fetch(runtimeConfig.public.apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: name.input,
                    email: email.input,
                    subject: subject.input,
                    message: message.input,
                    recaptchaToken: token
                }),
            });

            const data = await res.json();

            if (data.msg) {

                name.input = '';
                email.input = '';
                subject.input = '';
                message.input = '';
                response.value = data.msg;
                const mailResData = { time: Date.now(), msg: data.msg };
                localStorage.setItem('mailResData', JSON.stringify(mailResData));
            }

            error.value = data.error ? data.error : '';
            errors.value = data.errors ? data.errors : [];

        } catch (err) {
            errors.value = [];
            console.log(err);
            error.value="The server is currently under maintenance. Please try again later.";
        } finally {
            loading.value = false;
        }
    });
}

watch(errors, (arr) => {
    name.error = '';
    email.error = '';
    subject.error = '';
    message.error = '';
    arr.forEach(val => {
        switch (val.param) {
            case 'name':
                name.error = val.msg;
                break;
            case 'email':
                email.error = val.msg;
                break;
            case 'subject':
                subject.error = val.msg;
                break;
            case 'message':
                message.error = val.msg;
                break;
        }
    });
});
</script>