module.exports = {
  base: '/wyf-blog/',
  title: '锋晴的个人博客',
  description: 'Technical exchange with your colleagues',
  permalink: '/:slug/:year:month:day',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    // search: false,
    // searchMaxSuggestions: 10,
    logo: '/blog_logo.png',
    nav: [
      { text: '主页', link: '/' },
      { text: 'js', link: '/js/' },
      { text: 'node', link: '/node/' },
      { text: '算法', link: '/algorithm/' },
      { text: '面试', link: '/interview/' },
      { text: '其它', link: '/web/' },
      { text: 'GitHub', link: 'https://github.com/2410655661' }
    ],
  },
  // plugins: [
  //   ['@vuepress/search', {
  //     searchMaxSuggestions: 10
  //   }]
  // ]
}
