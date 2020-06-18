<template>
  <span class="flex-start">
    <span
      v-for="(child, index) in children"
      :key="child.text"
    >
      <router-link
        v-if="child.link"
        class="text-unselect nav-link"
        :to="child.link"
        active-class="nav-link--active"
        exact
      >{{ child.text }}</router-link>
      <div
        v-else
        class="text-unselect text-cursor nav-link"
      >
        <span>{{ child.text }}</span>
        <ul class="nav-link__subnav">
          <router-link
            class="text-unselect nav-link"
            v-for="item in child.items"
            :to="item.link"
            active-class="nav-link--active"
            tag="li"
            :key="item.link"
          >{{ item.text }}</router-link>
        </ul>
      </div>
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
  data () {
    return {

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