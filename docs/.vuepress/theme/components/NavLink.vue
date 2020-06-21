<template>
  <span class="flex-start">
    <span
      v-for="(child, index) in children"
      :key="child.text"
    >
      <router-link
        class="text-unselect nav-link"
        v-if="isInnerLink(child.link)"
        :to="child.link"
        active-class="nav-link--active"
        exact
      >{{ child.text }}</router-link>
      <a
        v-else
        class="text-unselect nav-link"
        :href="child.link"
        target="_blank"
      >{{ child.text }} <OutboundLink></OutboundLink></a>
    </span>
  </span>
</template>

<script>
export default {
  name: 'NavLink',
  props: {
    children: {
      type: Array,
      required: true
    }
  },
  methods: {
    isInnerLink(link) {
      return /^(?!https?:\/\/)/i.test(link);
    }
  }
}
</script>

<style lang="stylus">
.nav-link
  &
    position: relative
    margin-left: 30px
    font-size: $nav-size
    line-height: 60px
    font-weight: bold
    color: $title-color
  &:hover, &--active
    color: $focus-color
  &:hover &__subnav
    display: block
  &__subnav
    display: none
    position: absolute
    top: 45px
    left: 0
    padding: 20px 15px
    border-radius: 5px
    box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.2)
    background-color: #fff
    .nav-link
      line-height: 20px
</style>