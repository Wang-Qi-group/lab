import { defineClientAppEnhance } from '@vuepress/client'
import naive from 'naive-ui'
// import VueClipboard from 'vue3-clipboard'

export default defineClientAppEnhance(({ app, router, siteData }) => {
  app.use(naive)
  // .use(VueClipboard)
})