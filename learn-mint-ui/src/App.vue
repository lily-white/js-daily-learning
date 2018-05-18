<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
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
</style>
