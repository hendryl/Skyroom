<template>
  <div id="home" class="page">
    <div class="container">
      <div class="row">
        <div class="col-sm-7 col-xs-12">
          <img class="hero-image img-responsive center-block" src="../../assets/images/home/home-welcome.png" alt="" />
        </div>
        <div class="col-sm-5 col-xs-12">
          <div class="margin"></div>
          <h1>
            HELLO!
          </h1>
          <div class="content-text">
            <p>
              Welcome young astronomers!
            </p>
            <p>
              Let's explore the beauty of the stars in the universe and find out the secrets and wonders of the lights that shine on the night sky!
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import routeTransition from '../../utils/routeTransition';

export default {
  route: routeTransition,
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/variables.scss";

.hero-image {
  max-width: 300px;
  @media screen and(min-width: 768px) {
    max-width: 100%;
  }
}

.margin {
  height: 0;

  @media screen and (min-width: 768px) {
    height: 110px;
  }

  @media screen and (min-width: 992px) {
    height: 150px;
  }
}

h1 {
  color: $cyan-color;
  font-size: 6em;
  text-shadow: 5px 5px 0 $dark-purple-color;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 5.5em;
    margin: -10px 0;
    text-align: left;
  }

  @media screen and (min-width: 996px) {
    font-size: 6em;
  }
}

.content-text {
  margin: 0 auto;
  max-width: 330px;
  text-align: center;

  @media screen and (min-width: 768px) {
    margin: inherit;
    max-width: 320px;
    text-align: left;
  }
}

</style>
