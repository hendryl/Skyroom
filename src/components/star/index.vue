<template>
  <div id="star" class="page">
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <h1 class="text-center">Choose Your Destination</h1>
        </div>
        <div class="col-xs-12 trapesium">
          <img class="img-responsive center-block"
          src="../../assets/images/star/start/trap_1.png"
          alt="" />
        </div>
      </div>
      <div class="row destinations">
        <a v-link="{path: '/star/description'}">
          <div class="anchor col-xs-12" id="des">
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
          </div>
        </a>
        <div class="anchor col-xs-12" id="com">
          <a v-link="{path: '/star/composition'}">
            <div class="hidden-xs">
              <img class="img-responsive"
              src="../../assets/images/star/start/com.png"
              alt="" />
            </div>
            <div class="visible-xs">
              <img class="img-responsive"
              src="../../assets/images/star/start/mobile/com.png"
              alt="" />
            </div>
          </a>
        </div>
        <div class="anchor col-xs-12" id="mas">
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
        <div class="anchor col-xs-12" id="temp">
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
        <div class="anchor col-xs-12" id="death">
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
        <div class="col-xs-12 trapesium">
          <img class="img-responsive center-block"
          src="../../assets/images/star/start/trap_2.png"
          alt="" />
        </div>
      </div>
    </div>
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
@import "../../assets/css/variables.scss";

#star {
  background-image: url('../../assets/images/home/home_bg.png');
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
  display: inline-block;
  outline: none;

  .img-responsive {
    max-width: 300px;
    margin: 0 auto;
  }

  @media screen and (min-width: 768px) {
    margin: 0 0 0 -2px;

    &:first-of-type {
      margin-left: 0px;
    }

    &:hover {
      background-repeat: no-repeat;
      background-size: cover;

      .img-responsive {
        opacity: 0;
      }
    }

    .img-responsive {
      max-width: 100%;
      margin: 0;
    }
  }

  @media screen and (min-width: 992px) {
    &:hover {
      background-size: contain;
    }
  }
}

a:focus {
  outline: none;
}

#des:hover {
  @media screen and (min-width: 768px) {
    background-image: url('../../assets/images/star/start/des_hover.png');
  }
}

#com:hover {
  @media screen and (min-width: 768px) {
    background-image: url('../../assets/images/star/start/com_hover.png');
  }
}

#mas:hover {
  @media screen and (min-width: 768px) {
    background-image: url('../../assets/images/star/start/mas_hover.png');
  }
}

#temp:hover {
  @media screen and (min-width: 768px) {
    background-image: url('../../assets/images/star/start/temp_hover.png');
  }
}

#death:hover {
  @media screen and (min-width: 768px) {
    background-image: url('../../assets/images/star/start/death_hover.png');
  }
}


.arm-wrapper {
  margin-top: 20px;
}

.arm {
  position: absolute;
  right: 0;
}

</style>
