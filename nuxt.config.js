let isDev = process.env.NODE_ENV !== 'production'

export default {
  mode: 'universal',
  generate: {
    dir: 'docs',
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
    '@/assets/css/app.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {src: '~plugins/vue-sweetalert2.js', mode: 'client', ssr: false},
    {src: '~plugins/vue-toasted.js', mode: 'client', ssr: false},
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
