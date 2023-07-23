// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    // ...
    ['@pinia/nuxt',
      {
        autoImportsimport: ['defineStore']
      }
    ],
    '@nuxtjs/google-fonts',
  ],
  imports: {
    dirs: [
      'store',
      'composables',
      'composables/*/index.{ts,js,mjs,mts}',
    ],
  },
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      'defineStore', // import { defineStore } from 'pinia'
      ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },
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
