<template>
  <div class="theme-container">
    <layout-container>
      <banner-list></banner-list>
      <div class="flex-start theme-container__body">
        <article-list class="article-list"></article-list>
        <person-sider class="person-sider"></person-sider>
      </div>
    </layout-container>
  </div>
</template>

<script>
import BannerList from '../components/BannerList';

export default {
  components: {
    BannerList
  }
}
</script>

<style lang="stylus">
.theme-container__body
  align-items flex-start
  margin auto
  width 80%
  .article-list
    margin-right 10px
    flex: 3
  .person-sider
    margin-left 10px
    flex: 1
</style>
