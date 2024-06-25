export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  modules: [
    '@nuxtjs/google-fonts',
    '@nuxtjs/supabase',
    "@nuxt/ui",
    "@nuxt/icon"
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
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
  app: {
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
  }
},

});