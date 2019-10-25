
export default {
  mode: 'universal',
  server: {
      host: '0.0.0.0'
  },
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s - Ohio POC',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [   
        {
         src: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyArm4R5-OH2OoIs2SNnzG4A8WnnWe5gTm8&libraries=places'
        }
      ]    
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#FF4F01' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/directives.js'
  ],
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
    '@nuxtjs/font-awesome'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
      host: '0.0.0.0'
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    },
    postcss: {
        // Add plugin names as key and arguments as value
        // Install them before as dependencies with npm or yarn
        plugins: {
          // Disable a plugin by passing false as value
          'postcss-nested': {},
        }
      }    
  }
}
