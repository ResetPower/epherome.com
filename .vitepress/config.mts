import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Epherome",
  description: "A VitePress Site",
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Intro', link: '/intro' },
          { text: 'Downloads', link: '/downloads' },
          { text: 'About', link: '/about' },
        ],
        sidebar: [
          { text: 'What is Epherome?', link: '/intro' },
          { text: 'Downloads', link: '/downloads' },
          { text: 'About', link: '/about' }
        ],
        socialLinks: [
          { icon: 'github', link: 'https://github.com/ResetPower/Epherome' }
        ]
      },
    },
    "zh-cn": {
      label: '简体中文',
      lang: 'zh-cn',
      themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
          { text: '首页', link: '/zh-cn/' },
          { text: '简介', link: '/zh-cn/intro' },
          { text: '下载', link: '/zh-cn/downloads' },
          { text: '关于', link: '/zh-cn/about' },
        ],
        sidebar: [
          { text: '什么是 Epherome？', link: '/zh-cn/intro' },
          { text: '下载', link: '/zh-cn/downloads' },
          { text: '关于', link: '/zh-cn/about' }
        ],
        socialLinks: [
          { icon: 'github', link: 'https://github.com/ResetPower/Epherome' }
        ]
      },
    },
  },
})
