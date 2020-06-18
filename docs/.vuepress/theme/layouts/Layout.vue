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

<style lang="stylus" src="../styles/interpolation.styl"></style>
<style lang="stylus">
.theme-container__body
  margin auto
  width 80%
  .article-list
    flex: 3
  .person-sider
    flex: 1
</style>
