<template>
  <div
    :style="{
      // 2rem
      width: `${size}rem`,
      height:`${size}rem`,
      zIndex
    }"
    :class="{ absolute, fixed }" 
    class="spinner-border text-primary"></div>
</template>

<script>
export default {
  props: {
    size: {
      type: Number,
      default: 2
    },
    absolute: {
      type: Boolean,  
      default: false
    },
    fixed: {
      type: Boolean,
      default: false
    },
    zIndex: {
      type: Number,
      default: 0
    }

  }
}
</script>

<style lang="scss" scoped>
.spinner-border {
  margin: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  // 아래 클래스가 붙었을때 position, fixed 속성이 적용됨.
  &.absolute {  
    position: absolute;
  }
  &.fixed {
    position: fixed;
  }
}
</style>