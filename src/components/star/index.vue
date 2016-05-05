<template>
  <div id="star">
    <logo></logo>
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          star
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

#star {
  background-image: url('../../assets/home_bg.png');
  height: 100vh;
}
</style>
