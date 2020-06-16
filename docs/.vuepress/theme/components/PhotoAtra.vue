<template>
  <div class="photo-atra">
    <!-- <div class="photo-atra__item"> -->
    <img
      class="photo-atra__img"
      v-for="(item, index) in imgs"
      :style="geneTransform(index)"
      :key="item.id"
      :src="$withBase(item.img)"
      :alt="item.text"
    />
    <!-- </div> -->
  </div>
</template>

<script>
export default {
  name: 'PhotoAtra',
  props: {
    imgs: {
      type: Array
    },
    index: {
      type: Number
    }
  },
  computed: {
    translateMap () {
      const len = this.imgs.length;
      const index = this.index;
      const num = (len + 1) / 2;
      const data = {
        [index]: 0
      }

      for (let i = 1; i < num; i++) {
        const prev = this.generateIndex(index - i);
        const next = this.generateIndex(index + i);

        data[prev] = -i;
        data[next] = i
      }
      return data;
    }
  },
  methods: {
    generateIndex (index) {
      return index > 5 ? this.generateIndex(index - 5) : index < 0 ? this.generateIndex(index + 5) : index;
    },
    geneTransform (index) {
      const piexIndex = this.translateMap[index];
      const absIndex = Math.abs(piexIndex);
      const translateX = piexIndex === 0 ? 0 : piexIndex * 50;
      const rotateY = piexIndex === 0 ? 0 : piexIndex * 30;
      const scaleY = 1 - absIndex * 0.15
      const zIndex = this.imgs.length - absIndex;
      return {
        transform: `translateX(${translateX}px) rotateY(${rotateY}deg) scaleY(${scaleY})`,
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
    right: 0
    top: 50%
    display: inline-block
    margin-top: -85px
    border-radius: 10px
    width: 200px
    height: 170px
    object-fit: cover
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.4)
</style>
