import fetch from 'node-fetch';

const usersAmount = 11; // from 1 to 10 including 10

const getRoutesAmountArray = async () => {
  const users = await fetch('https://jsonplaceholder.typicode.com/users');
  const parsedUsers = await users.json();
  return Array.from(Array((parsedUsers?.length  ?? -1) +1 ).keys())
}

export default {
  target: 'static',
  // Disable this for static generation with crawler
  generate: {
    crawler: false,
    routes: async () => (await getRoutesAmountArray()).map(idx => `/users/${idx}`)
  },
  // ------------------
  head: {
    title: 'task2',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  css: [
  ],

  plugins: ['~/plugins/currentDate.server.js', '~/plugins/currentDate.client.js'],

  components: true,

  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
  ],

  modules: [
  ],

  build: {
  }
}
