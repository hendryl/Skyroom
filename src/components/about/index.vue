<template>
  <div id="about" class="page">
    <div class="container what-is">
      <img
        class="img-background img-responsive"
        src="../../assets/images/about/ship.png"
        alt="" />
      <div class="row">
        <div class="col-xs-12 col-sm-6 col-sm-offset-6">
          <h1>
            What is SKYROOM?
          </h1>
          <p>
            Skyroom is an educational website that provides information and facts about astronomy which focuses on the study of stars, from the description, composition, fun facts, and also the birth and death of stars.
          </p>
          <p>
            Skyroom gives people a whole new experience of study that is fun, interesting, and unique.
          </p>
          <p>
            The information in Skyroom is authentic and reliable, since it is derived from books and official sources. Skyroom is also a partner of Planetarium Jakarta, which provides both information and data for the website.
          </p>
        </div>
      </div>
      <img
        class="img-mobile img-responsive"
        src="../../assets/images/about/ship_mobile.png"
        alt="" />
    </div>
    <div class="container">
      <div class="row">
        <gallery></gallery>
      </div>
    </div>
  </div>
</template>

<script>
import basepage from '../basepage.vue';
import gallery from './gallery.vue';

export default {
  components: {
    basepage,
    gallery,
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/variables.scss";

#about {
  position: relative;
  overflow: hidden;
}

.what-is {
  min-height: 500px;
  margin-bottom: 100px;
}

.img-background {
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
  }
}

.img-mobile {
  @media screen and (min-width: 768px) {
    display: none;
  }
}

</style>
