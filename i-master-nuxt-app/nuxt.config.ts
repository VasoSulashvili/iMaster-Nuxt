// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'node:path'
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxt/image', '@nuxt/scripts'],

  // css: [
  //   'publi/css/colors.css',
  //   '/css/styles.css'
  // ],
  ssr: true,
  runtimeConfig: {
    public: {
      apiBaseClient: process.env.API_BASE_CLIENT || 'http://imaster.local:80', // browser/client
    },
    apiBase: process.env.API_BASE || 'http://laravel.test:80', // server/SSR
  }
})