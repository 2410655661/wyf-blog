<template>
  <div
    class="banner-list"
    v-if="bannerList"
    ref="banner"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <div
      class="banner-list__bg"
      :style="{ backgroundImage: backgroundImg }"
    ></div>
    <ul>
      <li
        class="text-cursor banner-list__prev"
        v-show="isShow"
        @click="handlePrev"
      ></li>
      <li
        class="flex-between banner-list__item"
        v-for="(bannerItem, index) in bannerList"
        v-show="activeIndex === index"
        :style="{ background: geneBackgroundColor(bannerItem.color) }"
        :key="bannerItem.id"
      >
        <div class="banner-aside">
          <p class="banner-aside__desc">Docker</p>
          <h4 class="banner-aside__title">{{ bannerItem.text }}</h4>
        </div>
      </li>
      <li
        class="text-cursor banner-list__next"
        v-show="isShow"
        @click="handleNext"
      ></li>
    </ul>
    <photo-atra
      class="banner-list__atra"
      :index="activeIndex"
    ></photo-atra>
    <div class="banner-tips">
      <span
        v-for="index in bannerList.length"
        :class="[
          'text-cursor',
          'banner-tips__item',
          {
            'banner-tips__item--active': activeIndex === index - 1
          }
        ]"
        :key="index"
        @click="handleJump(index - 1)"
      ></span>
    </div>
  </div>
</template>

<script>
import PhotoAtra from './PhotoAtra';

export default {
  name: 'BannerList',
  components: {
    PhotoAtra
  },
  data () {
    return {
      activeIndex: 0,
      timer: null,
      isShow: false
    }
  },
  computed: {
    bannerList () {
      return this.$frontmatter.banners
    },
    backgroundImg () {
      return `url(${this.$withBase(this.bannerList[this.activeIndex].img)})`;
    },
  },
  created () {
    this.initSwiper();
  },
  beforeDestroy () {
    this.timer && this.clearSwiper();
  },
  methods: {
    geneBackgroundColor ([fromColor, toColor]) {
      return `linear-gradient(120deg, rgba(${fromColor}, 0.2), rgba(${toColor}, 0.8))`
    },
    clearSwiper () {
      clearInterval(this.timer);
      this.timer = null;
    },
    initSwiper () {
      this.timer && this.clearSwiper();
      this.timer = setInterval(() => {
        if (this.activeIndex >= this.bannerList.length - 1) {
          this.activeIndex = 0;
        } else {
          this.activeIndex++;
        }
      }, 5000);
    },
    handleMouseEnter () {
      this.isShow = true;
      this.clearSwiper();
    },
    handleMouseLeave () {
      this.isShow = false;
      this.initSwiper();
    },
    handleJump (index) {
      this.activeIndex = index;
      this.initSwiper();
    },
    handlePrev () {
      const index = this.activeIndex - 1;

      this.activeIndex = index > -1 ? index : this.bannerList.length - 1;
      this.initSwiper();
    },
    handleNext () {
      const index = this.activeIndex + 1;

      this.activeIndex = index > this.bannerList.length - 1 ? 0 : index;
      this.initSwiper();
    }
  }
}
</script>

<style lang="stylus">
$desc-color = rgba(255, 255, 255, 0.75)
$banner-height = 300px
.banner-list
  &
    position: relative
    overflow: hidden
    height: $banner-height
  &__bg
    position: absolute
    z-index: -1
    width: 100%
    height: $banner-height
    filter: blur(16px)
    opacity: 0.28
  &__prev, &__next
    position: absolute
    top: 50%
    z-index: 9
    margin-top: -10px
    width: 20px
    height: 20px
    &::after
      content: ''
      display: block
      border-width: 2px 2px 0 0
      border-color: #fff
      border-style: solid
      width: 20px
      height: 20px
  &__prev
    left: 30px
    &::after
      transform: rotate(225deg)
  &__next
    right: 30px
    &::after
      transform: rotate(45deg)
  &__item
    padding: 0 10vw
    width: 80vw
    height: $banner-height
    animation: hideIndex 0.3s
    -moz-animation: hideIndex 0.3s
    -webkit-animation: hideIndex 0.3s
    -o-animation: hideIndex 0.3s
  &__atra
    position: absolute
    top: 0
    right: 0
    z-index: 5
    width: 50%
    height: $banner-height
@keyframes hideIndex
  0%
    opacity: 0
    transform: translate(800px, 0)
  100%
    opacity: 1
    transform: translate(0, 0)
.banner-aside
  &
    width: 50%
  &__desc
    font-size: 14px
    color: $desc-color
    &::after
      content: ''
      display: block
      margin-top: 10px
      width: 30px
      height: 1px
      background-color: $desc-color
  &__title
    margin: 30px 0
    font-size: 24px
    line-height: 1.25
    color: #fff
.banner-tips
  &
    position: absolute
    bottom: 20px
    left: 0
    right: 0
    margin: auto
    text-align: center
  &__item
    display: inline-block
    margin: 0 4px
    padding: 5px
    border-radius: 5px
    width: 0
    background-color: rgba(255, 255, 255, 0.75)
    &--active
      width: 20px
      background-color: #fff
</style>
