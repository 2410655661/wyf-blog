<template>
  <header class="nav-bar">
    <nav class="flex-between nav-bar__container">
      <router-link
        class="flex-start nav-title"
        :to="$localePath"
      >
        <img
          class="nav-title__logo"
          :src="$withBase($themeConfig.logo)"
          alt="wyf"
        />
        <h1 class="nav-title__text">{{ $siteTitle }}</h1>
      </router-link>
      <div class="flex-start">
        <SearchBox></SearchBox>
        <nav-link :children="$themeConfig.nav"></nav-link>
      </div>
    </nav>
  </header>
</template>

<script>
import NavLink from './NavLink';
import SearchBox from '@SearchBox';

export default {
  components: {
    NavLink,
    SearchBox
  }
}
</script>

<style lang="stylus">
@import '../styles/variable.styl'
$nav-height = 30px
.nav-bar
  background-color: #fff
  &__container
    margin: auto
    width: $page-width
    .nav-title
      &__logo
        height: $nav-height
      &__text
        margin-left: 10px
        font-size: $article-size
        color: $title-color
</style>
