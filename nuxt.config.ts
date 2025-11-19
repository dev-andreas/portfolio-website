const siteUrl = 'https://gerasimow.de'

export default defineNuxtConfig({
  compatibilityDate: '2025-09-04',
  devtools: { enabled: true },

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1, viewport-fit=cover',
      title: 'Andreas Gerasimow',
      meta: [
        { property: "og:title", content: 'Portfolio from Andreas Gerasimow.' },
        { property: "og:url", content: siteUrl },
        {
            name: 'description',
            content: 'Hi, I’m Andreas, a graduate computer science student at Ulm University with a specialization in cybersecurity.'
        },
        { property: 'og:image', content: siteUrl + '/andreas_gerasimow.jpg' },
        { property: 'og:image:type', content: 'image/jpg' },
        { property: 'og:image:width', content: '480' },
        { property: 'og:image:height', content: '640' },
      ],
    }
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ['@pinia/nuxt'],
})