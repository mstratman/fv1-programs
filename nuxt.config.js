let isDev = process.env.NODE_ENV !== 'production'
const path = require('path')


export default {
  mode: 'universal',
  nitro: {
    output: {
      publicDir: path.join(__dirname, "docs/")
    }
  },
  app: {
    baseURL: '/fv1-programs/'
  },
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/css/app.scss',
    '@/assets/css/normalize.css',
    '@/assets/css/skeleton.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */
  build: {
    html: {
      minify: { removeRedundantAttributes: false },
    },
    transpile: [
      '@fortawesome/vue-fontawesome',
      '@fortawesome/fontawesome-svg-core',
      '@fortawesome/free-solid-svg-icons',
    ],
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    },
  },
  router: {
    base: isDev ? '/' : '/fv1-programs/',
  },

}
