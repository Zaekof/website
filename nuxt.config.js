const webpack = require('webpack');
const glob = require('glob');
let files = glob.sync( '**/*.md' , { cwd: 'articles' });

function getSlugs(post, _) {
  let slug = post.substr(0, post.lastIndexOf('.'));
  return `/blog/${slug}`;
}
export default {
  mode: 'universal',
  head: {
    title: 'loicnogier.fr - Self-Entrepreneur',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'keywords', content: 'developer web front end nogier loic développeur site français anglais english back end full stack html5 js css sass'},
      { hid: 'description', name: 'description', content: 'Self-Entrepreneur in web and mobile development. Passionate and always ready to take on new challanges. I support you in all your web and mobile projects.' },
      { lang: 'en' },
      { author: 'loic nogier' }      
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js",
        type: "text/javascript"
      },
    ] 
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#FF5733' },
  /*
  ** Global CSS
  */
 css: ["assets/main.scss"],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc:https://github.com/nuxt-community/modules/tree/master/packages/bulma
    '@nuxtjs/bulma',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/style-resources'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  generate: {
    routes: function() {
      return files.map(getSlugs)
    }
  },  
  /*
  ** Build configuration
  */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.md$/,
        use: ['raw-loader']
      });
    },   
  }
}
