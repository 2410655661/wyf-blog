<template>
  <div
    v-if="bannerList"
    class="banner-list"
    ref="banner"
  >
    <div
      class="banner-list__bg"
      :style="{ backgroundImage: backgroundImg }"
    ></div>
    <ul
      class="flex-start banner-list__container"
      :style="{ width: bannerWidth, transform: translateXValue }"
    >
      <li
        v-for="(bannerItem, index) in bannerList"
        :class="[
          'flex-between',
          'banner-list__item',
          {
            'banner-list__item--active': activeIndex === index
          }
        ]"
        :style="{ background: geneBackgroundColor(bannerItem.color) }"
        :key="bannerItem.id"
      >
        <div class="banner-aside">
          <p class="banner-aside__desc">Docker</p>
          <h4 class="banner-aside__title">{{ bannerItem.text }}</h4>
        </div>
      </li>
    </ul>
    <photo-atra
      class="banner-list__atra"
      :imgs="bannerList"
      :index="activeIndex"
    ></photo-atra>
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
      timer: null
    }
  },
  computed: {
    bannerList () {
      return this.$frontmatter.banners
    },
    bannerWidth () {
      return `${this.bannerList.length * 100}vw`;
    },
    backgroundImg () {
      return `url(${this.$withBase(this.bannerList[this.activeIndex].img)})`;
    },
    translateXValue () {
      return `translateX(-${this.activeIndex * 100}vw)`;
    }
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
    }
  }
}
</script>

<style lang="stylus">
$desc-color = rgba(255, 255, 255, 0.75)
$banner-height = 300px
.banner-list
  overflow: hidden
  position: relative
  width: 100vw
  &__bg
    position: absolute
    z-index: -1
    width: 100vw
    height: $banner-height
    background-position: center
    background-size: cover
    opacity: 0.28
    filter: blur(16px)
  &__container
    height: $banner-height
  &__item
    box-sizing: border-box
    padding: 0 2%
    width: 100vw
    height: 100%
    font-size: 16px
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
        color: #fff
  &__atra
    position: absolute
    top: 0
    right: 100px
    height $banner-height
</style>