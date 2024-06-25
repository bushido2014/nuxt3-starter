export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxtjs/supabase',
    "@nuxt/ui"
  ],
  tailwindcss: {
    cssPath: '~/assets/css/main.css',
    configPath: 'tailwind.config.js',
    exposeConfig: false,
    config: {},
    injectPosition: 0,
    viewer: true,
  },
  googleFonts: {
    prefetch: true,
    preconnect: true,
    preload: true,
    families: {
      Nunito: true,
      Poppins: true,
    },
    display: 'swap',
  },
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Nuxt Fullstack Example',
      },
      { name: 'format-detection', content: 'telephone=no' },
    ],
  },
});