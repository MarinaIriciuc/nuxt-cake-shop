export default defineNuxtConfig({
    devtools: {enabled: true},
    modules: [
        '@sidebase/nuxt-auth',
        '@nuxtjs/tailwindcss',
    ],
    runtimeConfig: {
        public: {
            googleMapKey: process.env.GOOGLE_MAPS_API_KEY,
        },
        AUTH_SECRET: process.env.AUTH_SECRET,
        GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
        GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET
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
