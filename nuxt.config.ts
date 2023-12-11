// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/css/quasar.scss"],
  devtools: { enabled: true },
  modules: ["nuxt-quasar-ui", "@nuxtjs/tailwindcss"],
  quasar: {},
  postcss: {
    plugins: {
      tailwindcss: {
        cssPath: '~/assets/css/tailwind.css',
        configPath: 'tailwind.config'
      },
      autoprefixer: {},
    },
  },
  router: {
    base: '/fm-qr-code-component/'
  }
});
