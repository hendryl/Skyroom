<template>
  <div id="star" class="page">
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
        <div class="anchor" id="des">
          <a v-link="{path: '/star/description'}">
            <div class="hidden-xs">
              <img class="img-responsive"
              src="../../assets/images/star/start/des.png"
              alt="" />
            </div>
            <div class="visible-xs">
              <img class="img-responsive"
              src="../../assets/images/star/start/mobile/des.png"
              alt="" />
            </div>
          </a>
        </div>
        <div class="anchor" id="mas">
          <a v-link="{path: '/star/mass'}">
            <div class="hidden-xs">
              <img class="img-responsive"
              src="../../assets/images/star/start/mas.png"
              alt="" />
            </div>
            <div class="visible-xs">
              <img class="img-responsive"
              src="../../assets/images/star/start/mobile/mas.png"
              alt="" />
            </div>
          </a>
        </div>
        <div class="anchor" id="temp">
          <a v-link="{path: '/star/temperature'}">
            <div class="hidden-xs">
              <img class="img-responsive"
              src="../../assets/images/star/start/temp.png"
              alt="" />
            </div>
            <div class="visible-xs">
              <img class="img-responsive"
              src="../../assets/images/star/start/mobile/temp.png"
              alt="" />
            </div>
          </a>
        </div>
        <div class="anchor" id="death">
          <a v-link="{path: '/star/death'}">
            <div class="hidden-xs">
              <img class="img-responsive"
              src="../../assets/images/star/start/death.png"
              alt="" />
            </div>
            <div class="visible-xs">
              <img class="img-responsive"
              src="../../assets/images/star/start/mobile/death.png"
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
import routeTransition from '../../utils/routeTransition';

export default {
  route: routeTransition,
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/variables.scss";

#star {
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

#des:hover {
  background-image: url('../../assets/images/star/start/mobile/des_hover.png');

  @media screen and (min-width: 768px) {
    background-image: url('../../assets/images/star/start/des_hover.png');
  }
}

#mas:hover {
  background-image: url('../../assets/images/star/start/mobile/mas_hover.png');

  @media screen and (min-width: 768px) {
    background-image: url('../../assets/images/star/start/mas_hover.png');
  }
}

#temp:hover {
  background-image: url('../../assets/images/star/start/mobile/temp_hover.png');

  @media screen and (min-width: 768px) {
    background-image: url('../../assets/images/star/start/temp_hover.png');
  }
}

#death:hover {
  background-image: url('../../assets/images/star/start/mobile/death_hover.png');

  @media screen and (min-width: 768px) {
    background-image: url('../../assets/images/star/start/death_hover.png');
  }
}

.arm {
  margin: 30px 0 0 36px;
}

</style>
