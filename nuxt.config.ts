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
        '@nuxtjs/tailwindcss'
    ],

    routeRules: {
        '/': {prerender: true},
        '/about': {prerender: true},
        '/projects': {prerender: true},
        '/downloads': {prerender: true},
        '/dashboard': {prerender: true},
    }
})