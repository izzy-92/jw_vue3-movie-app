<template>
  <div class="container">
    <div class="skeletons">
      <div class="skeleton poster"></div>
      <div class="specs">
        <div class="skeleton title"></div>
        <div class="skeleton spec"></div>
        <div class="skeleton plot"></div>
        <div class="skeleton etc"></div>
        <div class="skeleton etc"></div>
        <div class="skeleton etc"></div>
      </div>
    </div>
    <Loader 
      :size="3" 
      :z-index="9"
      :fixed="true" />
  </div>
</template>

<script>
// 컴포넌트 추가
import Loader from '~/components/Loader'
export default {
  components : {
    Loader
  },
  created() {
    console.log(this.$route)
    this.$store.dispatch('movie/searchMovieWithId', {
      id: this.$route.params.dynamicID 
    })
  }
}
</script>

<style lang="scss" scoped>
@import "~/scss/main";

.container {
  padding-top: 40px;
}
.skeletons {
  display: flex;
  .poster {
    flex-shrink: 0; // 브라우저가 줄어들어도 포스터는 감소하지않고 가로사이즈 유지되도록 감소너비 사용X
    width: 500px;
    height: 500px * 3 / 2;
    margin-right: 70px;
  }
  .specs {
    flex-grow: 1;
  }
  /*
  의문) 한 요소를 뺀 나머지 요소들에 중복되는 속성을 적용해야할때 별도의 선택자를 추가하는 방법과 
         코드가 길어지더라도 중복되는 속성을 한줄씩 추가하는방법중 동작하는데 있어 어느것이 더 효율적일까?

   적용방식) 유지보수에 있어서 선택자 추가 방식이 보다 효율적이라 판단.
    => 가상요소 선택자를 추가하여 skeleton의 title을 제외한 spec~etc 요소들에만 
       margin-top 속성이 적용되도록 코드를 정리해보았다!
  */
  .specs .skeleton:nth-child(n+2) {
    margin-top: 20px;
  }
  .skeleton {
    border-radius: 10px;
    background-color: $gray-200;
    
    &.title {
      width: 80%;
      height: 70px;
    }
    &.spec {
      width: 60%;
      height: 30px;
    }
    &.plot {
      width: 100%;
      height: 250px;
    }
    &.etc {
      width: 50%;
      height: 50px;
    }
  }
}

</style>