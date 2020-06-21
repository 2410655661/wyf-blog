<template>
  <div class="layout-container">
    <nav-bar></nav-bar>
    <div class="layout-container__body">
      <slot />
    </div>
    <footer class="layout-container__footer">
      <p class="layout-container__footer--text">{{ $themeConfig.footer }}</p>
    </footer>
  </div>
</template>

<script>
import NavBar from '../components/NavBar';

export default {
  components: {
    NavBar
  }
}
</script>

<style lang="stylus">
.layout-container
  &
    position: relative
    width: $fill-width
    min-height: 100vh
  &__body
    background-color: transparent
  &__footer
    margin-top: 35px
    height: 54px
    &--text
      position: absolute
      left: 0
      bottom 0
      padding: 20px 0
      width: 100%
      font-size: 14px
      text-align: center
      color: #666
      background-color: #fff
</style>
