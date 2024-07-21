export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  typescript: {
    typeCheck: true
  },

  modules: [
    "@nuxt/eslint",
    "@nuxtjs/i18n",
    "vuetify-nuxt-module",
    '@nuxt/image'
  ],

  css: [
    '~/assets/global.css'
  ],

  i18n: {
    defaultLocale: 'pt',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root'
    },
    locales: [
      {
        code: 'pt',
        file: './locales/pt-BR.ts'
      },
      {
        code: 'en',
        file: './locales/en-US.ts'
      }
    ],
  },

  vuetify: {
    vuetifyOptions: {
      icons: {
        defaultSet: 'mdi'
      },
    }
  },

  sourcemap: {
    server: true,
    client: true
  }
})