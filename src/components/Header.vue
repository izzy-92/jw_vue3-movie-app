<template>
  <header>
    <Logo />
    <div class="nav nav-pills">
      <div 
        v-for="nav in navigations"
        :key="nav.name"
        class="nav-item">
        <!-- RouterLink 컴포넌트 생성 -->
        <RouterLink 
          :to="nav.href"
          active-class="active"
          :class="{ active: isMatch(nav.path)}"
          class="nav-link">
          {{ nav.name }}
        </RouterLink>
      </div>
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
          // 정규표현식 캐롯기호(/^/)는 어떤 특정한 표현식으로 시작하는 구조를 일치시킨다.
          path: /^\/movie/ // /movie로 시작하는 경로인경우 일치. (검색 후 선택한 영화아이템 Movie 페이지)
        },
                {
          name: 'About',
          href: '/about'
        }
      ]
    }
  },
  methods: {
    isMatch(path) {
      if(!path) return false
      console.log(this.$route)
      return path.test(this.$route.fullPath) 
    }
  }
}
</script>

<style lang="scss" scoped> 
header {
  height: 70px;
  padding: 0 40px;
  display: flex;
  align-items: center;
  .logo { 
    margin-right: 40px;
  }
}
</style>