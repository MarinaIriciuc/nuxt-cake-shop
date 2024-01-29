export default defineNuxtConfig({
  devtools: {enabled: true},
  modules: [
    '@sidebase/nuxt-auth',
    '@nuxtjs/tailwindcss',
    '@unlok-co/nuxt-stripe'
  ],
  build: {
    transpile: ['@fortawesome/fontawesome-svg-core', '@fortawesome/vue-fontawesome', '@fortawesome/free-solid-svg-icons']
  },
  stripe: {
      server: {
          key: process.env.STRIPE_SECRET_KEY,
          options: {
            // @ts-ignore
            apiVersion: '2023-10-16'
          }
      },
      client: {
          key: process.env.STRIPE_PUBLISH_KEY
      }
  },
  runtimeConfig: {
    public: {
      googleMapKey: process.env.GOOGLE_MAPS_API_KEY,
    },
    AUTH_SECRET: process.env.AUTH_SECRET,
    GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
    GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
  },
  shadcn: {
    prefix: '',
    componentDir: './components/ui'
  },
  css: ['/assets/css/main.css', '@fortawesome/fontawesome-svg-core/styles.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  }
  ,
  components: [
    {
      pathPrefix: false,
      path: "~/components"
    }
  ],
  auth: {
    provider: {
      type: 'authjs'
    }
  }
})
