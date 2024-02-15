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
          { text: 'Introduction', link: '/intro' },
          { text: 'Contributing', link: '/contributing/' },
          { text: 'Downloads', link: '/downloads' },
          { text: 'About', link: '/about' },
        ],
        sidebar: [
          { text: 'What is Epherome?', link: '/intro' },
          { text: 'Downloads', link: '/downloads' },
          { text: 'About', link: '/about' },
          {
            text: 'Developer Documentation',
            items: [
              { text: 'Contributing', link: '/contributing/' },
              { text: 'Translations', link: '/contributing/translations' }
            ]
          }
        ],
        socialLinks: [
          { icon: 'github', link: 'https://github.com/ResetPower/Epherome' }
        ],
        logo: { src: '/Epherome.svg', width: 24, height: 24 },
        footer: {
          message: 'Epherome Official Website',
          copyright: `Copyright &copy; 2021-${new Date().getFullYear()} ResetPower`
        }
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
          { text: '开发文档', link: '/zh-cn/contributing/' },
          { text: '下载', link: '/zh-cn/downloads' },
          { text: '关于', link: '/zh-cn/about' },
        ],
        sidebar: [
          { text: '什么是 Epherome？', link: '/zh-cn/intro' },
          { text: '下载', link: '/zh-cn/downloads' },
          { text: '关于', link: '/zh-cn/about' },
          {
            text: '开发者文档',
            items: [
              { text: '代码贡献', link: '/zh-cn/contributing/' },
              { text: '本地化/国际化', link: '/zh-cn/contributing/translations' }
            ]
          }
        ],
        socialLinks: [
          { icon: 'github', link: 'https://github.com/ResetPower/Epherome' }
        ],
        footer: {
          message: 'Epherome 官方网站',
          copyright: `版权所有 &copy; 2021-${new Date().getFullYear()} ResetPower`
        },
        docFooter: {
          prev: '上一页',
          next: '下一页'
        },
        outline: {
          label: '页面导航'
        },
        logo: { src: '/Epherome.svg', width: 24, height: 24 },
        langMenuLabel: '多语言',
        returnToTopLabel: '回到顶部',
        sidebarMenuLabel: '菜单',
        darkModeSwitchLabel: '主题',
        lightModeSwitchTitle: '切换到浅色模式',
        darkModeSwitchTitle: '切换到深色模式'
      },
    },
  },
})
