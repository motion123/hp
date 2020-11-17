export default {
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
  css: [],
  plugins: [{ src: '@/plugins/contentful' }],
  components: true,
  buildModules: ['@nuxt/typescript-build'],
  modules: ['bootstrap-vue/nuxt', '@nuxtjs/dayjs'],
  dayjs: {
    locales: ['ja'],
    defaultLocale: 'ja',
  },
  build: {},
}
