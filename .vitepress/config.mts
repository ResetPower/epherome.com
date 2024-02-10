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
        sidebarMenuLabel: '菜单',
        darkModeSwitchLabel: '主题',
        logo: { src: '/Epherome.svg', width: 24, height: 24 }
      },
    },
  },
})
