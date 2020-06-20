<template>
  <aside class="person-sider">
    <h2 class="skill-tag__title">随机云标签</h2>
    <p class="text-unselect skill-tag">
      <span
        class="skill-tag__text"
        v-for="tag in tagList"
        :style="tag | fontStyle"
        :key="tag"
      >{{ tag }}</span>
    </p>
    <h2 class="skill-tag__title">作者自介</h2>
    <ul class="text-unselect about-me">
      <li class="flex-between">
        <h3 class="about-me__name">锋晴</h3>
        <img
          class="about-me__avator"
          :src="$withBase('/avator.jpg')"
          alt="avator"
        />
      </li>
      <li class="about-me__desc">一条正在徜徉在前端知识海洋中的技术咸鱼</li>
      <li class="about-me__desc">笨鸟先飞</li>
      <li class="about-me__desc">刻意练习，提升技术瓶颈</li>
    </ul>
  </aside>
</template>

<script>
export default {
  name: 'PersonSider',
  filters: {
    fontStyle () {
      const colors = ['#5cb85c', '#5bc0de', '#f0ad4e', '#4285f4'];
      const randomIndex = Math.random();
      const colorIndex = Math.floor(randomIndex * 4);
      const size = randomIndex * 16 + 8;

      return {
        color: colors[colorIndex],
        fontSize: `${size}px`
      }
    }
  },
  computed: {
    tagList () {
      return ['HTML', 'CSS', 'Javascript', 'ECMAScript', '面向对象', '正则表达式', 'Node', '工程化', 'Webpack', 'git', '设计模式', 'VUE', 'uni-app', 'Web安全', '数据交互', '算法和数据结构', '可视化', 'ECharts', '面试'];
    },
  }
}
</script>

<style lang="stylus">
.person-sider
  padding-top: 20px
  height: 100%
  .skill-tag
    &
      padding: 10px
      border-radius: 6px
      background-color: #fff
    &__title
      margin: 20px 0 15px
      padding-left: 10px
      border-left: 3px solid #4285f4
      font: 16px / 1 normal
    &__text
      margin: 0 5px
      line-height: 30px
      white-space: nowrap
  .about-me
    &
      padding: 20px
      border-radius: 6px
      background-color: #fff
    &__name
      font-size: 18px
      font-weight: bold
    &__avator
      overflow: hidden
      border-radius: 50%
      box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5)
      width: 40px
      height: 40px
    &__desc
      margin-top 10px
      &::before
        content: ''
        display inline-block
        margin-bottom 2px
        margin-right 15px
        border-radius 50%
        width: 8px
        height: 8px
        background-color: #4285f4
</style>
