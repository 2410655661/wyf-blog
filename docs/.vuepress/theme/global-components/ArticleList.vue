<template>
  <span
    class="article-list"
    v-if="isShow"
  >
    <page-list-item
      v-for="pageItem in pageList"
      :page-data="pageItem"
      :key="pageItem.path"
    ></page-list-item>
  </span>
</template>

<script>
import PageListItem from '../components/PageListItem';

export default {
  name: 'ArticleList',
  components: {
    PageListItem
  },
  computed: {
    pageList () {
      const pages = [];
      let len = pages.length;
      let pageNums = this.$site.pages.length;
      let page;

      while (len < 5 && pageNums--) {
        page = this.$site.pages[pageNums];
        !page.frontmatter.tags.includes('列表') && pages.push(page);
      }
      return pages;
    },
    isShow () {
      return this.pageList && this.pageList.length > 0;
    }
  }
}
</script>

<style lang="stylus">
.article-list
  margin: 30px 0
</style>