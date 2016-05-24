<template>
  <div id="constellation-skymap" class="page">
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <h1 class="text-center">The Map Of The Stars</h1>
          <div id="carousel" class="carousel slide">
            <div class="carousel-inner" role="listbox">
              <div class="item active">
                <img class="img-responsive center-block" src="../../assets/images/constellation/skymap/spring.png" alt="Spring">
                <h1 class="text-center">Spring</h1>
              </div>
              <div class="item">
                <img class="img-responsive center-block" src="../../assets/images/constellation/skymap/summer.png" alt="Summer">
                <h1 class="text-center">Summer</h1>
              </div>
              <div class="item">
                <img class="img-responsive center-block" src="../../assets/images/constellation/skymap/fall.png" alt="Fall">
                <h1 class="text-center">Fall</h1>
              </div>
              <div class="item">
                <img class="img-responsive center-block" src="../../assets/images/constellation/skymap/winter.png" alt="Winter">
                <h1 class="text-center">Winter</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12">
          <h1 class="text-center">The Zodiacs</h1>
        </div>
        <div class="zodiacs">
          <div class="col-xs-4 col-sm-3">
            <a>
              <img class="img-responsive center-block" src="../../assets/images/constellation/skymap/zodiacs/capricornnus.png" alt="capricornnus">
            </a>
          </div>
          <div class="col-xs-4 col-sm-3">
            <a>
              <img class="img-responsive center-block" src="../../assets/images/constellation/skymap/zodiacs/aquarius.png" alt="aquarius">
            </a>
          </div>
          <div class="col-xs-4 col-sm-3">
            <a>
              <img class="img-responsive center-block" src="../../assets/images/constellation/skymap/zodiacs/taurus.png" alt="taurus">
            </a>
          </div>
          <div class="col-xs-4 col-sm-3">
            <a>
              <img class="img-responsive center-block" src="../../assets/images/constellation/skymap/zodiacs/gemini.png" alt="gemini">
            </a>
          </div>
          <div class="col-xs-4 col-sm-3">
            <a>
              <img class="img-responsive center-block" src="../../assets/images/constellation/skymap/zodiacs/virgo.png" alt="virgo">
            </a>
          </div>
          <div class="col-xs-4 col-sm-3">
            <a>
              <img class="img-responsive center-block" src="../../assets/images/constellation/skymap/zodiacs/libra.png" alt="libra">
            </a>
          </div>
          <div class="col-xs-4 col-sm-3">
            <a>
              <img class="img-responsive center-block" src="../../assets/images/constellation/skymap/zodiacs/pisces.png" alt="pisces">
            </a>
          </div>
          <div class="col-xs-4 col-sm-3">
            <a>
              <img class="img-responsive center-block" src="../../assets/images/constellation/skymap/zodiacs/aries.png" alt="aries">
            </a>
          </div>
          <div class="col-xs-4 col-sm-3">
            <a>
              <img class="img-responsive center-block" src="../../assets/images/constellation/skymap/zodiacs/cancer.png" alt="cancer">
            </a>
          </div>
          <div class="col-xs-4 col-sm-3">
            <a>
              <img class="img-responsive center-block" src="../../assets/images/constellation/skymap/zodiacs/leo.png" alt="leo">
            </a>
          </div>
          <div class="col-xs-4 col-sm-3">
            <a>
              <img class="img-responsive center-block" src="../../assets/images/constellation/skymap/zodiacs/scorpionus.png" alt="scorpionus">
            </a>
          </div>
          <div class="col-xs-4 col-sm-3">
            <a>
              <img class="img-responsive center-block" src="../../assets/images/constellation/skymap/zodiacs/sagitarius.png" alt="sagitarius">
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#carousel {
  .item {
    background-image: url('../../assets/images/constellation/skymap/frame.png');
    background-repeat: no-repeat;
    background-position: center;

    img {
      padding-bottom: 100px;
    }
  }
}

.zodiacs {
  padding: 0 15px;
  .col-xs-4 {
    padding: 0 2px;

    &:nth-child(3n+0) {
      padding: 0 0px 0 2px;
    }

    &:nth-child(3n+1) {
      padding: 0 2px 0 0px;
    }
  }

  @media screen and(min-width: 768px) {
    .col-sm-3 {
      &:nth-child(1n) {
        padding: 0 2px;
      }
    }
  }
}

a {
  display: block;

  &:hover {
    cursor: pointer;
  }
}
</style>
