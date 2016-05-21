<template>
  <div id="star" class="page">
    <div class="container">
      <div class="row">
        <div class="col-xs-12 trapesium">
          <img class="img-responsive center-block"
          src="../../assets/images/star/start/trap_1.png"
          alt="" />
        </div>
      </div>
      <div class="row destinations">
        <div class="anchor" id="des">
          <a v-link="{path: '/star/description'}">
            <img class="img-responsive"
            src="../../assets/images/star/start/des.png"
            alt="" />
          </a>
        </div>
        <div class="anchor" id="com">
          <a v-link="{path: '/star/composition'}">
            <img class="img-responsive"
            src="../../assets/images/star/start/com.png"
            alt="" />
          </a>
        </div>
        <div class="anchor" id="mas">
          <a v-link="{path: '/star/mass'}">
            <img class="img-responsive"
            src="../../assets/images/star/start/mas.png"
            alt="" />
          </a>
        </div>
        <div class="anchor" id="temp">
          <a v-link="{path: '/star/temperature'}">
            <img class="img-responsive"
            src="../../assets/images/star/start/temp.png"
            alt="" />
          </a>
        </div>
        <div class="anchor" id="death">
          <a v-link="{path: '/star/death'}">
            <img class="img-responsive"
            src="../../assets/images/star/start/death.png"
            alt="" />
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
  display: flex;
  justify-content: center;
  margin: 20px 0;
}

.anchor {
  margin-left: -2px;

  &:first-of-type {
    margin-left: 0px;
  }

  &:hover {
    background-repeat: no-repeat;
    background-size: cover;

    img {
      opacity: 0;
    }
  }
}

#des:hover {
  background-image: url('../../assets/images/star/start/des_hover.png');
}

#com:hover {
  background-image: url('../../assets/images/star/start/com_hover.png');
}

#mas:hover {
  background-image: url('../../assets/images/star/start/mas_hover.png');
}

#temp:hover {
  background-image: url('../../assets/images/star/start/temp_hover.png');
}

#death:hover {
  background-image: url('../../assets/images/star/start/death_hover.png');
}


.arm-wrapper {
  margin-top: 20px;
}

.arm {
  position: absolute;
  right: 0;
}

</style>
