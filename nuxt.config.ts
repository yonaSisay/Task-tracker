// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr:false,
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/apollo'],
  apollo: {
    autoImports: true,
    authType: 'Bearer',
    authHeader: 'Authorization',
    tokenStorage: 'cookie',
    proxyCookies: true,
    clients: {
      default: {
        httpEndpoint: 'https://cunning-insect-12.hasura.app/v1/graphql'
      }
    },
  },
  
})
