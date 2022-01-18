<template>
  <RouterLink
    to="/"
    class="logo">
    <span>OMDbAPI</span>.COM
  </RouterLink>
</template>

<style lang="scss" scoped>
@import "~/scss/main";

.logo {
  font-family: "Oswald", sans-serif;
  font-size: 20px;
  color: #000;
  text-decoration: none;
  &:hover { // 로고에 hover 했을때 기존 블랙색상 출력되도록 지정.
    color: $black;
  }
  span {
    color: $primary;
  }
}
</style>