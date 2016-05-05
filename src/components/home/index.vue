<template>
  <div id="home">
    <logo></logo>
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          Home
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import logo from '../../components/logo';

export default {
  components: {
    logo,
  },
};
</script>

<style lang="scss" scoped>

#home {
  background-image: url('../../assets/home_bg.png');
  height: 100vh;
}
</style>
