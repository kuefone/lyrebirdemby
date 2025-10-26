import { defineConfig } from 'vitepress'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "LyrebirdEmby",
  description: "A WiKi Page for LyrebirdEmby",
  themeConfig: {
    logo: '/images/lyrebird-logo-small.webp',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '使用文档', link: '/introduce' }
    ],
    sidebar: [
      {
        text: 'WIKI文档',
        items: [
          { text: '介绍', link: '/introduce' },
          { text: '使用须知', link: '/rules' },
          { text: '求片指南', link: '/download' },
          { text: '种子命名规则', link: '/seed-naming-rules' },
          { text: '合作机场', link: '/airport' },
          { text: '线路使用', link: '/line' },
          { text: '疑难杂症', link: '/faq' },
          { text: '关于我们', link: '/about' },
        ]
      },
      // --- vvv 新增的分类指南分组 vvv ---
      {
        text: '分类指南', // 新的分组标题
        collapsed: false, // 默认不折叠
        items: [
          { text: '成人影片指南', link: '/guide-adult-video' },
          { text: '动漫指南', link: '/guide-anime' },
          { text: '电影电视指南', link: '/guide-movies-tv' }
        ]
      }
      // --- ^^^ 新增的分类指南分组 ^^^ ---
    ],
    socialLinks: [
      { icon: 'telegram', link: 'https://t.me/lyrebirdchat' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © LyrebirdEmby 2025'
    },
    lastUpdated: {
      text: '最后更新时间',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'short'
      }
    }
  }
})