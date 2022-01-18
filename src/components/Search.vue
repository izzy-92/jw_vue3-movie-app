<template>
  <div class="container">
    <!-- 검색 필터 추가 -->
    <input 
      v-model="title"
      class="form-control"
      type="text" 
      placeholder="Search for Movies, Series & more" />
  </div>
</template>


<script>
export default {
  data() {
    return {
      title: ''
    }
  }
}
</script>