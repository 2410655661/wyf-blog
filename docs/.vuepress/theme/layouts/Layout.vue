<template>
  <div class="theme-container">
    <layout-container>
      <banner-list></banner-list>
      <div class="flex-start">
        <article-list></article-list>
        <person-sider></person-sider>
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

<style lang="stylus" src="../styles/index.styl"></style>
<style lang="stylus" src="../styles/interpolation.styl"></style>
