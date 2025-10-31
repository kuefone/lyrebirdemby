import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "LyrebirdEmby",
  description: "A WiKi Page for LyrebirdEmby",
  
  themeConfig: {
    logo: '/images/lyrebird-logo-small.webp',
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
    },

    nav: [
      { text: '主页', link: '/' },
      { text: '使用文档', link: '/1.getting-started/' }
    ],
    
    sidebar: [
      {
        text: '👋 新手上路',
        collapsed: false,
        items: [
          { text: '必读：三分钟上路流程', link: '/1.getting-started/' },
          { text: '📜 核心行为准则 (红线)', link: '/1.getting-started/rules' },
          { text: '🖥️ 客户端白名单', link: '/1.getting-started/clients' },
          { text: '💬 资源黑话速查', link: '/1.getting-started/terminology' }
        ]
      },
      {
        text: '⚙️ 核心服务',
        collapsed: false,
        items: [
          { text: '服务总览', link: '/2.services/' },
          { text: '💰 鸟币系统与保号', link: '/2.services/account' },
          { text: '📥 求片机器人', link: '/2.services/downloading' },
          { text: '🌐 线路选择与优化', link: '/2.services/connectivity' }
        ]
      },
      {
        text: '🤝 合作伙伴',
        collapsed: false,
        items: [
          { text: '伙伴总览', link: '/3.partners/' },
          { text: '✈️ 合作机场指南', link: '/3.partners/airport' }
        ]
      },
      {
        text: '📚 硬核指南 (选读)',
        collapsed: true,
        items: [
          { text: '指南索引', link: '/4.deep-dive/' },
          { text: '🎬 电影电视指南', link: '/4.deep-dive/movies-tv' },
          { text: '🌸 动漫收藏指南', link: '/4.deep-dive/anime' },
          { text: '🔞 成人影像指南', link: '/4.deep-dive/adult' }
        ]
      },
      {
        text: '💬 社区与帮助',
        collapsed: false,
        items: [
          { text: '社区索引', link: '/5.community/' },
          { text: '🙋‍♂️ 常见问题 (FAQ)', link: '/5.community/faq' },
          { text: '🐦 关于我们 (名人堂)', link: '/5.community/about' }
        ]
      }
    ]
  }
})