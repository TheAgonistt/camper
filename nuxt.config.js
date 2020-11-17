require('dotenv').config()
import axios from 'axios'
import path from 'path'
import fs from 'fs'


export default {
  mode: 'universal',
  target: 'static',
  generate: {
    routes: function() {
      const fs = require('fs');
      const path = require('path');
      return fs.readdirSync('./content/blog').map(file => {
        return {
          route: `/blog/${path.parse(file).name}`, // Return the slug
          payload: require(`./content/blog/${file}`),
        };
      });
    },
  },
  /*
  ** Headers of the page
  */
  serverMiddleware: [
    '~/api/contact',
  ],

  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#00C0F3' },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/stylesheets/prod/app.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/vue-easy-lightbox.js', mode: 'client' },
    { src: '~/plugins/vue-agile.js', mode: 'client' },
    { src: '~/plugins/vue-infiniteslidebar.js', mode: 'client' },
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    // "@nuxtjs/eslint-module",
    '@nuxtjs/gtm',
  ],
  /*
  ** Nuxt.js dev-modules
  */
  devModules: [],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/dotenv',
    '@nuxtjs/svg',
    '@nuxt/content',
    //['nuxt-gmaps', {
      //  key: `${process.env.GMAP_API}`,
      //you can use libraries: ['places']
    //}
  ],
  styleResources: {
    scss: [
      '~assets/stylesheets/prod/_vars.scss',
      '~assets/stylesheets/prod/_config.scss',
      '~assets/stylesheets/prod/includes/mediaq.scss',
      '~assets/stylesheets/prod/includes/mixin.scss'
    ]
  },
  /*
  ** Local server
  */
  server: {
    https: {
      // follow this tutorial : https://shopify.github.io/slate/docs/create-a-self-signed-ssl-certificate
      key: fs.readFileSync(path.resolve(__dirname, 's-key.pem')),
      cert: fs.readFileSync(path.resolve(__dirname, 's-cert.pem'))
    }
  },
  /*
  ** Build configuration
  */
  build: {
    transpile: ['vue-agile'],
    transpile: ['vue-Infiniteslidebar'],
    /*
    ** You can extend webpack config here
    */
    extend (config, { isDev, isClient }) {
  },

  html: {
    minify: {
        collapseWhitespace: true,
        removeComments: true,
      },
    },
  },
}
