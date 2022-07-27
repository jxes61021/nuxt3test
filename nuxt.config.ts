import { defineNuxtConfig } from 'nuxt'
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  buildModules: [
    '@pinia/nuxt',
  ],
  // ssr: false,
  build: {
    transpile: ['swiper']
  },
  css: [
    'normalize.css/normalize.css'
  ],
  tailwindcss: {
    cssPath: '@/assets/css/main.scss',
    configPath: 'tailwind.config.js',
    exposeConfig: true,
  },
  runtimeConfig: {
    // The private keys which are only available within server-side
    privatetest: 'private',
    // Keys within public, will be also exposed to the client-side
    public: {
      publictest: 'public'
    }
  },
  modules: ['@nuxtjs/tailwindcss']
 });
 
