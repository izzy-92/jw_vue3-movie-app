<template>
  <header>
    <Logo />
    <div class="nav nav-pills">
      <div 
        v-for="nav in navigations"
        :key="nav.name"
        class="nav-item">
        <RouterLink 
          :to="nav.href"
          active-class="active"
          :class="{ active: isMatch(nav.path)}"
          class="nav-link">
          {{ nav.name }}
        </RouterLink>
      </div>
    </div>
    <!-- 우측 로고 이미지 , 페이지 이동 메소드(toAbout)지정.-->
    <div
      class="user"
      @click="toAbout">
      <img 
        :src="image" 
        :alt="name" />
    </div>
  </header>
</template>

<script>
import Logo from '~/components/Logo'

export default {
  components: {
    Logo
  },
  data() {
    return {
      navigations: [
        {
          name: 'Search',
          href: '/'
        },
        {
          name: 'Movie',
          href: '/movie/tt4520988', // frozen 영화상세정보 id값 지정 (검색 전 기본 Movie페이지)
          path: /^\/movie/
        },
                {
          name: 'About',
          href: '/about'
        }
      ]
    }
  },
  computed: {
    // 이미지 경로 가져오기
    image() {
      return this.$store.state.about.image
    },
    // 사용자 이름
    name() {
      return this.$store.state.about.name
    }
  },
  methods: {
    isMatch(path) {
      if(!path) return false
      console.log(this.$route)
      return path.test(this.$route.fullPath) 
    },
    toAbout() {
      this.$router.push('/about')
    }
  }
}
</script>

<style lang="scss" scoped> 
@import "~/scss/main";

header {
  position: relative;
  height: 70px;
  padding: 0 40px;
  display: flex;
  align-items: center;
  .logo { 
    margin-right: 40px;
  }
  .user {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    box-sizing: border-box;
    cursor: pointer;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 40px;
    margin: auto;
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
  }
  // BootStrap 제공 기능 - 뷰포트의 크기가 small 사이즈보다 작은경우
  @include media-breakpoint-down(sm) {
    .nav {
      display: none;
    }
  }
}
</style>