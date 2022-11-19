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
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],
  css: ["~/assets/css/style.css"],
})
