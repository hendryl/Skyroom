<template>
  <div id="home">
    <logo></logo>
    <div class="container">
      <div class="row">
        <div class="col-sm-6 col-xs-12">
          <img class="hero-image img-responsive center-block" src="../../assets/images/home/home-welcome.png" alt="" />
        </div>
        <div class="col-sm-6 col-xs-12">
          <div class="margin"></div>
          <h1 class="title">
            HELLO!
          </h1>
          <div class="content-text">
            <p>
              Selamat datang astronomer muda!
            </p>
            <p>
              Marilah bersama kita jelajahi keindahan dan misteri dari bintang-bintang yang bersinar di langit malam.
            </p>
          </div>
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
@import "../../assets/css/variables.scss";

#home {
  position: relative;
  background-image: url('../../assets/images/home/home_bg.png');
  min-height: 100%;
  padding-bottom: 105px + 20px;

  @media screen and (min-width: 768px) {
    padding-bottom: 136px + 20px;
  }
}

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

.title {
  max-width: 270px;
  font-family: $eiga-font;
  font-size: 10em;
  color: $blue-color;
  text-shadow: 5px 5px 0 $red-color;

  text-align: center;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    text-align: left;
    margin: -10px 0;
  }
}

.content-text {
  text-align: center;
  max-width: 330px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    max-width: 320px;
    text-align: left;
    margin: inherit;
  }
}

</style>
