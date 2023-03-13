// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
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
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  target: 'static',
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],
  css: ["~/assets/css/style.css"],
})
