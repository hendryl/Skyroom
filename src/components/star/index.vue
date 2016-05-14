<template>
  <div id="star" class="page">
    <basepage>
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            star
          </div>
        </div>
      </div>
    </basepage>
  </div>
</template>

<script>
import basepage from '../basepage.vue';

export default {
  components: {
    basepage,
  },
};
</script>

<style lang="scss" scoped>

#star {
  background-image: url('../../assets/images/home/home_bg.png');
}
</style>
