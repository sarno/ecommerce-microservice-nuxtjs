// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      apiUserBaseUrl: process.env.NUXT_USER_API_BASE_URL,
    },
  },
  modules: ["@nuxt/ui", "@pinia/nuxt"],
  css: ["~/assets/css/theme.min.css"],
  build: {
    transpile: ["bootstrap"],
  },
});
