<template>
  <div id="constellation" class="page">
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <h1 class="text-center">Choose Your Destination</h1>
        </div>
        <div class="col-xs-12">
          <div class="hidden-xs center-block">
            <img class="img-responsive"
            src="../../assets/images/dest/trap_1.png"
            alt="" />
          </div>
          <div class="visible-xs center-block">
            <img class="img-responsive"
            src="../../assets/images/dest/mobile/trap_1.png"
            alt="" />
          </div>
        </div>
      </div>
      <div class="row destinations">
        <div class="anchor" id="cons">
          <a v-link="{path: '/constellation/description'}">
            <div class="hidden-xs">
              <img class="img-responsive"
              src="../../assets/images/constellation/start/cons.png"
              alt="" />
            </div>
            <div class="visible-xs">
              <img class="img-responsive"
              src="../../assets/images/constellation/start/mobile/cons.png"
              alt="" />
            </div>
          </a>
        </div>
        <div class="anchor" id="sky">
          <a v-link="{path: '/constellation/skymap'}">
            <div class="hidden-xs">
              <img class="img-responsive"
              src="../../assets/images/constellation/start/sky.png"
              alt="" />
            </div>
            <div class="visible-xs">
              <img class="img-responsive"
              src="../../assets/images/constellation/start/mobile/sky.png"
              alt="" />
            </div>
          </a>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12">
          <div class="hidden-xs center-block">
            <img class="img-responsive"
            src="../../assets/images/dest/trap_2.png"
            alt="" />
          </div>
          <div class="visible-xs center-block">
            <img class="img-responsive"
            src="../../assets/images/dest/mobile/trap_2.png"
            alt="" />
          </div>
        </div>
      </div>
      <div class="row arm">
        <div class="col-xs-12">
          <div class="center-block">
            <img class="img-responsive"
            src="../../assets/images/dest/arm.png"
            alt="" />
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
@import "../../assets/css/variables.scss";

#constellation {
  margin-bottom: 0;
}

.destinations {
  max-width: 820px;
  margin: 20px auto;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
  }

  .col-xs-12 {
    @media screen and (min-width: 768px) {
      padding: 0;
    }
  }
}

.anchor {
  display: block;
  outline: none;
  max-width: 300px;
  margin: 0 auto;

  &:hover {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    .img-responsive {
      opacity: 0;
    }
  }

  @media screen and (min-width: 768px) {
    max-width: 100%;
    margin: 0;

    &:hover {
      background-repeat: no-repeat;
      background-size: cover;
    }
  }
}

a {
  display: block;

  &:focus {
    outline: none;
  }
}

.img-responsive {
  max-width: 300px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    max-width: 100%;
  }
}

#cons:hover {
  background-image: url('../../assets/images/constellation/start/mobile/cons_hover.png');

  @media screen and (min-width: 768px) {
    background-image: url('../../assets/images/constellation/start/cons_hover.png');
  }
}

#sky:hover {
  background-image: url('../../assets/images/constellation/start/mobile/sky_hover.png');

  @media screen and (min-width: 768px) {
    background-image: url('../../assets/images/constellation/start/sky_hover.png');
  }
}

.arm {
  margin: 30px 0 0 36px;
}

</style>
