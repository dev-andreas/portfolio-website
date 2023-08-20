// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1', 
      title: 'Andreas Gerasimow',
      meta: [
        { name: 'description', content: 'Portfolio from Andreas Gerasimow.' }
      ],
    },
    pageTransition: {
      name: 'fade',
    }
  },
  runtimeConfig: {
    public: {
      apiUrl: "https://mail.andreasgera.de/",
      recaptchaPublic: process.env.RECAPTCHA_PUBLIC
    }
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    '@pinia/nuxt',
  ],
})
