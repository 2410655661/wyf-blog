<template>
  <div class="text-unselect page-list-item">
    <router-link :to="pageData.path">
      <h3 class="page-list__title">{{ pageInfo.title }}</h3>
    </router-link>
    <p class="page-list__text">{{ pageInfo.description }}</p>
    <p class="page-list__tips">
      <span class="page-list__tips--mark">发布时间: {{ pageData.path | generateTime }}</span>
      <span class="page-list__tips--mark">分类: {{ pageInfo.tags.filter(item => item !== '文章').join(', ') }}</span>
      <span class="page-list__tips--mark">作者: 锋晴</span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'PageListItem',
  filters: {
    generateTime (value) {
      const time = value.slice(-9, -1).replace(/^(\d{4})(\d{2})/, (string, year, month) => `${year}-${month}-`);
      return time;
    }
  },
  props: {
    pageData: {
      type: Object,
      required: true
    }
  },
  computed: {
    pageInfo () {
      return this.pageData.frontmatter;
    }
  }
}
</script>

<style lang="stylus">
.page-list-item
  &
    padding: 20px
    border-bottom: 1px solid #ddd
  .page-list
    &__title
      font: 20px / 1 normal
      font-weight: bold
      color: #333
    &__text
      margin: 15px 0
      font: 14px / 24px normal
      color: #666
      text-indent: 2em
    &__tips
      font: 12px / 24px normal
      color: #999
      &--mark
        margin-right 10px
  &:hover
    background-color: #fff
    .page-list__title
      color: #4285f4
</style>
