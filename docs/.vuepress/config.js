module.exports = {
  base: '/wyf-blog/',
  title: '锋晴的个人博客',
  description: 'Technical exchange with your colleagues',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {

    // search: false,
    // searchMaxSuggestions: 10,
    logo: '/blog_logo.png',
    nav: [
      { text: '主页', link: '/' },
      {
        text: '前端',
        items: [
          { text: 'html', link: '/web/html/' },
          { text: 'css', link: 'web/css/' }
        ]
      },
      { text: 'node', link: '/node/' },
      { text: '面试', link: '/interview/' },
      { text: 'GitHub', link: 'https://github.com/2410655661' }
    ],
  },
  plugins: [
    ['@vuepress/search', {
      searchMaxSuggestions: 10
    }]
  ]
}
