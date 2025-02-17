// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: {enabled: true},

    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },

    css: [
        '/public/css/global.css',
    ],

    modules: [
        'nuxt-particles',
        '@nuxtjs/tailwindcss',
        'nuxt-anchorscroll',
    ],

    routeRules: {
        '/': {prerender: true},
        '/about': {prerender: true},
        '/projects': {prerender: true},
        '/downloads': {prerender: true},
        '/dashboard': {prerender: true},
    },

    runtimeConfig: {
        // The private keys which are only available within server-side
        public: {
            pocketBaseUrl: process.env.NUXT_PUBLIC_POCKETBASE_URL,
        }
    }
})