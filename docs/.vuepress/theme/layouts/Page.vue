<template>
  <div class="page">
    <ul
      v-if="isShowTag"
      class="flex-start page__tag-list"
    >
      <li
        class="page__tag-item"
        v-for="tag in tagList"
        :key="tag"
      >{{ tag }}</li>
    </ul>
    <h2 class="page__title">{{ $frontmatter.title }}</h2>
    <p class="perface">
      <Content slot-key="perface" />
    </p>
    <Content />
  </div>
</template>

<script>
export default {
  name: 'Page',
  computed: {
    tagList () {
      return this.$frontmatter.tags;
    },
    isShowTag () {
      return this.tagList && this.tagList.length;
    }
  }
}
</script>

<style lang="stylus">
.page
  &
    margin: auto
    width: 80%
    .perface
      margin: 20px 0
      padding: 10px 0 10px 20px
      border-left: 5px solid #eee
      p
        font: italic 16px / 1.25 normal
        color: #4285f4
  &__tag-list
    margin: 15px 0
    .page__tag-item
      margin-right: 15px
      padding: 0 10px
      border: 1px #999 solid
      border-radius: 14px
      font-size: 14px
      line-height: 26px
      color: #999
  &__title
    margin 15px 0 35px
    font-size 32px

  .content__default
    text-indent 2em
    p
      margin 15px 0
      line-height 1.25
</style>