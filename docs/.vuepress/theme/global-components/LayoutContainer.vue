<template>
  <div class="layout-container">
    <nav-bar @toggle-sidebar="toggleSidebar"></nav-bar>
    <div class="layout-container__body">
      <slot />
    </div>
  </div>
</template>

<script>
import NavBar from '../components/NavBar';

export default {
  components: {
    NavBar
  },
  data () {
    return {

    }
  },
  methods: {
    toggleSidebar () {

    }
  }
}
</script>

<style lang="stylus">
@import '../styles/variable.styl'
.layout-container
  &
    width: $fill-width
  &__body
    background-color: transparent
</style>