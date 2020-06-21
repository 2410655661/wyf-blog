<template>
  <layout-container>
    <div
      class="page-list"
      v-if="isShow"
    >
      <page-list-item
        v-for="pageItem in pageList"
        :page-data="pageItem"
        :key="pageItem.path"
      ></page-list-item>
    </div>
  </layout-container>
</template>

<script>
import PageListItem from '../components/PageListItem';

export default {
  name: 'PageList',
  components: {
    PageListItem
  },
  computed: {
    isShow () {
      return this.pageList && this.pageList.length;
    },
    pageList () {
      const params = this.$frontmatter.permalink;
      const regExp = new RegExp(`${params}.+\/`);

      return this.$site.pages.filter(page => regExp.test(page.regularPath));
    }
  }
}
</script>

<style lang="stylus" src="../styles/interpolation.styl"></style>
<style lang="stylus">
.page-list
  margin: auto
  padding-top: 20px
  width: 80%
  &-item:last-child
    border: 0
</style>
