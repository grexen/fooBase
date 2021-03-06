import axios from 'axios';
const dataProvider = require('./modules/dataProvider');

export default {
    mode: 'universal',
    /*
    ** Headers of the page
    */
    head: {
        title: "fooBase",
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: process.env.npm_package_description || ''}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
        ],
        script: [
            {src: 'https://identity.netlify.com/v1/netlify-identity-widget.js'}
        ],
    },
    /*
    ** Customize the progress-bar color
    */
    loading: {color: '#fff'},
    /*
    ** Global CSS
    */
    css: [],
    /*
    ** Plugins to load before mounting the App
    */
    plugins: [],
    /*
    ** Nuxt.js dev-modules
    */
    buildModules: [
        // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
        '@nuxtjs/tailwindcss',
    ],
    /*
    ** Nuxt.js modules
    */
    modules: [
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',
        // Doc: https://github.com/nuxt-community/dotenv-module
        '@nuxtjs/dotenv',
        // Doc: https://content.nuxtjs.org/advanced
        '@nuxt/content'
    ],
    /*
    ** Axios module configuration
    ** See https://axios.nuxtjs.org/options
    */
    axios: {},
    /*
    ** Build configuration
    */
    build: {
        /*
        ** You can extend webpack config here
        */
        extend(config, ctx) {
            config.node = {
                fs: 'empty'
            };
        }
    },
    generate: {
        async routes() {
            const { $content } = require('@nuxt/content');
            const fooVideos = await $content('fooVideos').only(['slug']).fetch();
            const fooPlayers = await $content('fooPlayers').only(['slug']).fetch();

            const fooVideoRoutes = fooVideos.map((fooVideo) => {
                return {
                    route: `foovideos/${fooVideo.slug}`,
                }
            })

            const fooPlayerRoutes = fooPlayers.map((fooPlayer) => {
                return {
                    route: `fooplayers/${fooPlayer.slug}`
                }
            })

            return fooVideoRoutes.concat(fooPlayerRoutes);
        }
    },
}
