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
        <div class="col-xs-12">
          <img class="img-responsive center-block"
          src="../../assets/images/about/telescope.png" alt="" />
          <h1 class="text-center">Our Mission</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2">
          <div class="mission-block">
            <p>
              We have a mission to educate and provide students, young readers, and astronomy enthusiasts with reliable and helpful content that are both educational and fun to share with friends and family.
            </p>
            <p>
              The goal is to fill the readers with a sense of wonder and curiosity to start wondering and seeking knowledge about astronomy since it is not a common subject in Indonesia. Skyroom is here to plant the seed of exploration to everyone so they will go learn and understand the beauty of the universe and acknowledge our existence in the universe not only as a human being, but also as a part of the universe.
            </p>
            <p>
              We hope by visiting and reading the information in Skyroom, we can give you a glimpse of the grand beauty and the miracles of the universe that we live in.
            </p>
          </div>
        </div>
      </div>
    </div>
    <gallery></gallery>
  </div>
</template>

<script>
import gallery from './gallery.vue';

export default {
  components: {
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

.mission-block {
  border: 1px solid $purple-color;
  padding: 20px;
  margin-bottom: 60px;
}

</style>
