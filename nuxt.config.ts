// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/image", "@nuxt/eslint", "@nuxtjs/tailwindcss"],
  runtimeConfig: {
    public: {
      AVATAR_API: import.meta.env.NUXT_PUBLIC_AVATAR_API || "https://api.testingbot.com/",
    },
  },
});
