<template>
  <div id="app">
    <navbar></navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import navbar from './components/navbar';

export default {
  components: {
    navbar,
  },
};
</script>

<style lang="scss">
html {
  height: 100%;
  margin: 0;
}

body {
  height: 100%;
  margin: 0;
}

</style>
