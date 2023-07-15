// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    // ...
    '@pinia/nuxt',
    '@nuxtjs/google-fonts'
  ],
  build: {
    transpile: ['vuetify'],
  },
  googleFonts: {
    families: {
      Montserrat: true // Importa a fonte Montserrat
      // Você pode adicionar outras fontes aqui
    }
  },
  css: [
    '@mdi/font/css/materialdesignicons.min.css',
    'vuetify/dist/vuetify.css',
    'vuetify/lib/styles/main.sass'
  ],
})
