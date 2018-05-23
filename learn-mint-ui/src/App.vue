<template>
  <div id="app">
    <router-link class="page-back" v-if="visible" :to="'/'">
      <i class="mintui mintui-back"></i>
    </router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    visible() {
      return ['/', '/header', '/search'].indexOf(this.$route.path) < 0;
    }
  }
}
</script>

<style>
  @reset-global mobile;

  html, body {
    background-color: #fafafa;
    -webkit-overflow-scrolling: touch;
    user-select: none;
  }
  body {
    margin: 0;
    font-size: 14px;
    font-family: "Helvetica Neue", Helvetica, STHeiTi, Arial, sans-serif;
  }
  a {
    color: inherit;
  }
  @component page {
    @descendent title {
      font-size: 20px;
      margin: 20px auto;
      text-align: center;
      display: block;
      line-height: 1;
    }
    @descendent back {
      display: inline-block;
      top: 12px;
      left: 10px;
      position: absolute;
      width: 40px;
      height: 40px;
      text-align: center;
    }
    @descendent part {
      margin-bottom: 15px;
    }
  }
  .page-back i {
    font-size: 24px;
    line-height: 40px;
  }
</style>
