<template>
  <div id="constellation">    
    <logo></logo>
    <navbar></navbar>
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          constell
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from '../../components/navbar';
import logo from '../../components/logo';

export default {
  components: {
    navbar,
    logo,
  },
};
</script>

<style lang="scss" scoped>

#constellation {
  background-image: url('../../assets/home_bg.png');
  height: 100vh;
}
</style>
