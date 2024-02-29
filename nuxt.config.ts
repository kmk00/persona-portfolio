// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    ["@pinia/nuxt", { autoImports: ["defineStore", "acceptHMRUpdate"] }],
  ],
  css: ["@/assets/styles/main.css"],
  tailwindcss: {
    config: {
      theme: {
        extend: {
          colors: {
            customRed: {
              100: "#F50000",
              200: "#C10000",
              300: "#B90000",
              400: "#6A0202",
            },
            customGray: {
              100: "#D3D3D3",
              200: "#686868",
              300: "#404040",
              400: "#0A0A0A",
            },
            customYellow: "#D5C31C",
            customPing: {
              100: "#FD86CB",
              200: "#EF637B",
            },
            customBlue: {
              100: "#00C5D0",
              200: "#008D95",
              300: "#0056FF",
            },
          },
          fontFamily: {
            expose: ["expose"],
            markin: ["markin"],
            p5shatty: ["p5shatty"],
            prototype: ["prototype"],
          },
        },
      },
    },
  },
});
