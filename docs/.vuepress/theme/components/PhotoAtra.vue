<template>
  <div class="photo-atra">
    <img
      class="photo-atra__img"
      v-for="(item, index) in bannerList"
      :src="$withBase(item.img)"
      :style="geneTransformStyle(index)"
      :alt="item.text"
      :key="item.id"
    />
  </div>
</template>

<script>
export default {
  name: 'PhotoAtra',
  props: {
    index: {
      type: Number
    }
  },
  computed: {
    bannerList () {
      return this.$frontmatter.banners
    }
  },
  methods: {
    receiveIndex (index, midIndex, len) {
      index = index - this.index;
      return index > midIndex ? index - len : index < -midIndex ? len + index : index;
    },
    geneTransformStyle (index) {
      const len = this.bannerList.length;
      const midIndex = Math.floor(len / 2);
      const piexIndex = this.receiveIndex(index, midIndex, len);
      const absIndex = Math.abs(piexIndex);
      const translateX = piexIndex * 80;
      const rotateY = piexIndex * 30;
      const scaleY = 0.85 - absIndex * 0.1;
      const zIndex = len - absIndex;
      return {
        transform: `translateX(${translateX}px) scaleX(${scaleY}) scaleY(${scaleY}) rotateY(${rotateY}deg)`,
        zIndex
      }
    }
  }
}
</script>

<style lang="stylus">
.photo-atra
  &__img
    position: absolute
    left: 50%
    top: 50%
    display: inline-block
    margin-top: -100px
    margin-left: -120px
    border-radius: 10px
    width: 240px
    height: 200px
    object-fit: cover
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.4)
    transition:all 1s ease-in-out
</style>
