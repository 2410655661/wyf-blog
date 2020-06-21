module.exports = {
  base: '/wyf-blog/',
  title: '锋晴的个人博客',
  description: 'Technical exchange with your colleagues',
  permalink: '/:slug/:year:month:day',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    logo: '/blog_logo.png',
    nav: [
      { text: '主页', link: '/' },
      { text: 'JavaScript', link: '/js/' },
      { text: 'Node', link: '/node/' },
      { text: '算法', link: '/algorithm/' },
      { text: '面试', link: '/interview/' },
      { text: '其它', link: '/other/' },
      { text: 'GitHub', link: 'https://github.com/2410655661' }
    ],
    footer: 'Copyright © 锋晴的技术博客官网 2020 | Powered by WYF'
  },
  markdown: {
    anchor: {
      permalink: false, permalinkBefore: false, permalinkSymbol: '#'
    }
  },
  plugins: ['@vuepress/back-to-top']
}
