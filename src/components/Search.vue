<template>
  <div class="container">
    <!-- 검색 필터 추가 -->
    <input 
      v-model="title"
      class="form-control"
      type="text" 
      placeholder="Search for Movies, Series & more" 
      @keyup.enter="apply" />
    <div class="selects">
      <select
        v-for="filter in filters"
        v-model="$data[filter.name]"
        :key="filter.name"
        class="form-select">
        <!-- value 속성같은 경우 option의 실제 값을 제공할수있다. -->
        <option 
          v-if="filter.name ==='year'"
          value="">
          All Years
        </option>
        <option
          v-for="item in filter.items"
          :key="item">
          {{ item }}
        </option>
      </select>
    </div>
    <!-- Apply Button -->
    <button
      class="btn btn-primary" 
      @click="apply">
      Apply
    </button>
  </div>
</template>


<script>
import axios from 'axios'

export default {
  data() {
    return {
      title: '',
      type: 'movie',
      number: 10,
      year: '',
      filters: [
        {
        name: 'type',
        items: ['movie', 'series', 'episode']
        },
        {
        name: 'number',
        items: [10, 20, 30]
        },
        {
        name: 'year',
        
        items: (() => {
          const years = []
          const thisYear = new Date().getFullYear() // 최신년도 자동계산
          for (let i = thisYear; i >= 1985; i -= 1) {
            years.push(i)
          }
          return years
        })()
        }
      ]
    }
  },
  methods: {
    async apply() {
      // Movie Search..
      const OMDB_API_KEY = '7035c60c'
      const res = await axios.get(`https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${this.title}&type=${this.type}&y=${this.year}&page=1`)
      console.log(res)
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  > * {   // 컨테이너의 모든 자식요소들 사이여백적용
    margin-right: 10px;
    font-size: 15px;
    // 마지막 요소 여백 제외
    &:last-child { 
      margin-right: 0; 
    }
  }
  .selects {
    display: flex;
    select {
      width: 120px;
      margin-right: 10px;
      &:last-child {
        margin-right: 0;
      }
    }
  }
  .btn {
    width: 120px;   // 지정된 가로너비
    height: 50px;
    font-weight: 700;
    flex-shrink: 0; // 감소 비율 작동방지
  }
}
</style>