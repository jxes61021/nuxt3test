import { defineNuxtConfig } from 'nuxt'
// import { tw } from 'twind'
// export default {
//   install: (app) => {
//     app.config.globalProperties.tw = tw
//   },
// }
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  buildModules: [
    '@pinia/nuxt',
  ],
  // css: [
  //   '@/assets/css/main.scss', 
  //   'normalize.css/normalize.css'
  // ],
  // build: {
  //   postcss: {
  //     postcssOptions: require("./postcss.config.js"),
  //   },
  // },
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
 
