import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
   modules: [
    "@nuxtjs/google-fonts",
    "@nuxt/ui",
    "@nuxt/icon",
    "@nuxtjs/supabase",
  ],
  
  css: ["~/assets/css/main.css"],
 vite: {
    plugins: [
      tailwindcss(),
    ],
  },
 
   
  googleFonts: {
    prefetch: true,
    preconnect: true,
    preload: true,
    families: {
      Nunito: true,
      Poppins: true,
    },
    display: "swap",
  },
  app: {
    head: {
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content: "Nuxt Fullstack Example",
        },
        { name: "format-detection", content: "telephone=no" },
      ],
    },
  },

  supabase: {
    // This disables the aggressive redirecting to the login page set by default in the Supabase module
    // if you want to use your own middleware to handle the redirecting.
    // more info here: https://github.com/nuxt-modules/supabase/issues/227
    //redirect:false,
    redirectOptions: {
      exclude: ["/register"], // exclude the register page from the redirecting to the login page
    },
  },

  runtimeConfig: {
    public: {
      supabaseUrl: process.env.SUPABASE_URL,
      supabaseKey: process.env.SUPABASE_KEY,
    },
  },
});
