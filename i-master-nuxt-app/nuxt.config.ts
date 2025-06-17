// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'node:path'
export default defineNuxtConfig({
  plugins: ['~/plugins/vue3-toastify.ts'],
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/scripts',
    // 'nuxt-auth-sanctum',
    'nuxt-auth-sanctum'
  ],

  // css: [
  //   'publi/css/colors.css',
  //   '/css/styles.css'
  // ],
  ssr: true,
  runtimeConfig: {
    public: {
      apiBaseUrlBrowser: process.env.NUXT_API_BASE_URL_BROWSER,
    },
    apiBaseUrlServer: process.env.NUXT_API_BASE_URL_SERVER,
  },
  sanctum: {
    baseUrl: process.env.NUXT_API_BASE_URL_SERVER, // Laravel API
    mode: 'token',
    endpoints: {
      user: "/ka/api/iAuth/me",
      login: "/ka/api/iAuth/login",
      logout: "/ka/api/iAuth/logout",
    }
  },
  router: {
    linkActiveClass: 'active',
  }
})