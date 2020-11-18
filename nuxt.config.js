require('dotenv').config()
const { CONTENTFUL_SPACE_ID, CONTENTFUL_ACCESS_TOKEN, BASE_URL } = process.env

export default {
  env: {
    CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID
      ? process.env.CONTENTFUL_SPACE_ID
      : CONTENTFUL_SPACE_ID,
    CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN
      ? process.env.CONTENTFUL_ACCESS_TOKEN
      : CONTENTFUL_ACCESS_TOKEN,
    BASE_URL: process.env.BASE_URL ? process.env.BASE_URL : BASE_URL,
  },
  target: 'static',
  head: {
    title: 'myhp',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  plugins: [{ src: '@/plugins/contentful' }],
  components: true,
  buildModules: ['@nuxt/typescript-build'],
  modules: ['bootstrap-vue/nuxt', '@nuxtjs/dayjs', '@nuxtjs/style-resources'],
  dayjs: {
    locales: ['ja'],
    defaultLocale: 'ja',
  },
  styleResources: {
    scss: ['~/assets/colorVariable.scss'],
  },
  build: {},
}
