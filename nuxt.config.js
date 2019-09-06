const webpack = require('webpack');

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'loicnogier.fr',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'keywords', content: 'developer web front end nogier loic développeur site français anglais english back end full stack html5 js css sass'},
      { hid: 'description', name: 'description', content: 'Auto-Entrepreneur en informatique spécialité développement web/mobile/logiciel. Passioné et toujours prêt pour relever de nouveaux challanges. Je vous accompagne dans tous vos projets web et mobiles.' },
      { lang: 'fr' },
      { author: 'loic nogier' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: 'https://cdn.jsdelivr.net/npm/sweetalert2' },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js' },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/TweenMax.min.js' },
      { src: 'https://use.fontawesome.com/releases/v5.0.7/js/all.js' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  modules: [
    '@nuxtjs/markdownit'
  ],
 
  // [optional] markdownit options
  // See https://github.com/markdown-it/markdown-it
  markdownit: {
    preset: 'default',
    injected: true,
    linkify: true,
    breaks: true,
    use: [
      'markdown-it-div',
      'markdown-it-attrs'
    ]
  },  
  /*
  ** Build configuration
  */ 
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    vendor: ['jquery', 'axios'],
    plugins: [
      new webpack.ProvidePlugin({
        '$':              'jquery',
        $:                'jquery',
        jQuery:           'jquery',
        'window.jQuery':  'jquery',
        '_':              'lodash'
      })
    ]
  }
}

