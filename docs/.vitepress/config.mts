import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "LyrebirdEmby",
  description: "A WiKi Page for LyrebirdEmby",
  
  // 顶部 Logo 配置
  themeConfig: {
    logo: '/images/lyrebird-logo-small.webp',
    
    // 首页 Hero 和 Features 配置 (这里省略，假设你已放在 config.mts 中 themeConfig 的顶部)
    hero: {
      name: "LyrebirdEmby",
      text: "硬盘与云端的完美融合",
      tagline: "我们整合本地硬盘的高速响应、115网盘的秒传与谷歌云盘的海量存储，为您带来前所未有的观影体验。",
      actions: [
        { theme: 'brand', text: '快速开始', link: '/introduce' },
        { theme: 'alt', text: '加入Telegram群组', link: 'https://t.me/+8X2ZFrDPq5lkYTU1' } 
      ],
      image: {
        src: '/images/lyrebird-logo-large.webp',
        alt: 'LyrebirdEmby'
      }
    },
    features: [
      { icon: '🚀', title: '本地极速加载', details: '核心资源由本地服务器G口带宽加持，4K原盘秒开秒拖，完美支持杜比视界，告别一切缓冲等待。' },
      { icon: '☁️', title: '谷歌无限云盘', details: '精选纪录片、学习资料、稀有资源存放于谷歌云盘。无需担心本地硬盘空间，海量内容触手可及。' },
      { icon: '💾', title: '115网盘秒传', details: '利用115网盘的离线与秒传特性，实现资源的快速入库与冷备份。双重保障，确保您的收藏永不丢失。' },
      { icon: '🤖', title: '智能求片系统', details: '集成自研求片机器人，无论是稀有老片还是最新剧集，一键提交，自动搜刮全网并下载入库。' },
      { icon: '🔄', title: '全平台兼容性', details: '全面兼容Infuse、Vidhub、Jellyfin等主流播放器。我们提供详细配置教程，助您轻松连接，畅享影音。' },
      { icon: '💰', title: '轻松保号无忧', details: '独特的鸟币经济系统，125币/月，每日签到即可轻松保号。分享与贡献，皆有回报，打造高质量影音社区。' }
    ],
    
    // 顶部导航栏
    nav: [
      { text: '主页', link: '/' },
      { text: '使用文档', link: '/introduce' }
    ],

    // 侧边栏结构 (已修复)
    sidebar: [
      {
        text: 'WIKI文档',
        collapsed: false,
        items: [
          { text: '📄 介绍', link: '/introduce' },
          { text: '📄 使用须知', link: '/rules' },
          { text: '📄 求片指南', link: '/download' },
          { text: '📄 合作机场', link: '/airport' },
          { text: '📄 线路使用', link: '/line' },
          { text: '📄 疑难杂症', link: '/faq' },
          { text: '📄 关于我们', link: '/about' }
        ]
      },
      {
        text: '🔰 下片指南',
        collapsed: false,
        items: [
          { text: '📄 傻瓜式上手指南', link: '/quick-start' }, 
          { text: '📄 🎬 电影电视指南', link: '/guide-movies-tv' },
          { text: '📄 🌸 动漫指南', link: '/guide-anime' },
          { text: '📄 🔞 成人影片指南', link: '/guide-adult-video' }
        ]
      }
    ],

    // 社交链接
    socialLinks: [
      { icon: 'telegram', link: 'https://t.me/lyrebirdchat' }
    ],

    // 底部 Footer
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © LyrebirdEmby 2025'
    },

    // 最后更新时间配置
    lastUpdated: {
      text: '最后更新时间',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'short'
      }
    }
  } // 结束 themeConfig
}) // 结束 defineConfig