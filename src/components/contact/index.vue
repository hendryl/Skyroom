<template>
  <div id="contact">
    <logo></logo>
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          contact
        </div>
      </div>
    </div>
  </div>
  <foot></foot>
</template>

<script>
import logo from '../../components/logo';
import foot from '../../components/foot';

export default {
  components: {
    logo,
    foot,
  },
};
</script>

<style lang="scss" scoped>

#contact {
  background-image: url('../../assets/images/home/home_bg.png');
  height: 100vh;
}
</style>
