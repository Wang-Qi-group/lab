import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
const { path } = require('@vuepress/utils')

export default defineUserConfig<DefaultThemeOptions>({
  lang: 'zh-CN',
  title: 'CoCrypto Lab @ SUSTech',
  description: "CoCrypto Lab (编码理论与密码学实验室)",

  extendsMarkdown: (md) => {
    md.use(require('./plugins/markdown-it-katex'))
    md.use(require('markdown-it-task-lists'))
    md.linkify.set({ fuzzyEmail: false })
  },

  themeConfig: {
    editLink: false,
    lastUpdated: false,
    contributors: false,
    createdTime: false,
    // logo: '/logo.png',
    darkMode: false,
    navbar: [
      // NavbarItem
      {
        text: 'Home',
        link: '/',
      },
      {
        text: 'Publication',
        link: '/publication',
        // children: [{
        //   text: 'Cryptography',
        //   link: '/publication/#cryptography-and-its-applications'
        // }, 
        // {
        //   text: 'Coding theory, Combinatorics, Sequences',
        //   link: '/publication/#coding-theory-combinatorics-sequences'
        // }, 
        // ],
      },
      {
        text: 'Members',
        link: '/members',
      },
      {
        text: 'Join Us',
        link: '/join_us',
      },
      // {
      //   text: 'Projects',
      //   link: '/projects/',
      // },
      // NavbarGroup
      // {
      //   text: 'Group',
      //   children: ['/group/foo.md', '/group/bar.md'],
      // },
      // // 字符串 - 页面文件路径
      // '/bar/README.md',
    ],
  },
  plugins: [
    [
      '@vuepress/register-components',
      {
        components: {
          HomePage: path.resolve(__dirname, './components/HomePage.vue'),
          ProfileCard: path.resolve(__dirname, './components/ProfileCard.vue'),
          ProfileSection: path.resolve(__dirname, './components/ProfileSection.vue'),
        },
      },
    ],
    [
      '@vuepress/plugin-medium-zoom',
      {
        selector: ':not(a, #logo) > img'
      }
    ],
    // [
    //   '@vuepress/plugin-toc@next', 
      
    // ]
    
    // [
    //   '@vuepress/plugin-search',
    //   {
    //     locales: {
    //       '/': {
    //         placeholder: 'Search',
    //       },
    //     },
    //   },
    // ],
    
  ],
  head: [
    ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/katex@0.15.1/dist/katex.min.css' }],
    ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css' }],
    ['script', { src: 'https://cdn.jsdelivr.net/npm/katex@0.15.1/dist/katex.min.js' }],
    ['link', { rel: 'icon', href: '/logo_white.png' }],
  ]
})