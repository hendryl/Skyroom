<template>
  <modal id="myModal"
  :image=image
  :title=title
  :date=date
  :text=text >
  </modal>
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
            <a @click="select('capricornus')" data-toggle="modal" data-target="#myModal">
              <img class="img-responsive center-block hover-hidden" src="../../assets/images/constellation/skymap/zodiacs/capricornus.png" alt="capricornus">
              <img class="img-responsive center-block hover-visible" src="../../assets/images/constellation/skymap/zodiacs/capricornus_hover.png" alt="capricornnus">
            </a>
          </div>
          <div class="col-xs-4 col-sm-3">
            <a @click="select('aquarius')" data-toggle="modal" data-target="#myModal">
              <img class="img-responsive center-block hover-hidden" src="../../assets/images/constellation/skymap/zodiacs/aquarius.png" alt="aquarius">
              <img class="img-responsive center-block hover-visible" src="../../assets/images/constellation/skymap/zodiacs/aquarius_hover.png" alt="aquarius">
            </a>
          </div>
          <div class="col-xs-4 col-sm-3">
            <a @click="select('taurus')" data-toggle="modal" data-target="#myModal">
              <img class="img-responsive center-block hover-hidden" src="../../assets/images/constellation/skymap/zodiacs/taurus.png" alt="taurus">
              <img class="img-responsive center-block hover-visible" src="../../assets/images/constellation/skymap/zodiacs/taurus_hover.png" alt="taurus">
            </a>
          </div>
          <div class="col-xs-4 col-sm-3">
            <a @click="select('gemini')" data-toggle="modal" data-target="#myModal">
              <img class="img-responsive center-block hover-hidden" src="../../assets/images/constellation/skymap/zodiacs/gemini.png" alt="gemini">
              <img class="img-responsive center-block hover-visible" src="../../assets/images/constellation/skymap/zodiacs/gemini_hover.png" alt="gemini">
            </a>
          </div>
          <div class="col-xs-4 col-sm-3">
            <a @click="select('virgo')" data-toggle="modal" data-target="#myModal">
              <img class="img-responsive center-block hover-hidden" src="../../assets/images/constellation/skymap/zodiacs/virgo.png" alt="virgo">
              <img class="img-responsive center-block hover-visible" src="../../assets/images/constellation/skymap/zodiacs/virgo_hover.png" alt="virgo">
            </a>
          </div>
          <div class="col-xs-4 col-sm-3">
            <a @click="select('libra')" data-toggle="modal" data-target="#myModal">
              <img class="img-responsive center-block hover-hidden" src="../../assets/images/constellation/skymap/zodiacs/libra.png" alt="libra">
              <img class="img-responsive center-block hover-visible" src="../../assets/images/constellation/skymap/zodiacs/libra_hover.png" alt="libra">
            </a>
          </div>
          <div class="col-xs-4 col-sm-3">
            <a @click="select('pisces')" data-toggle="modal" data-target="#myModal">
              <img class="img-responsive center-block hover-hidden" src="../../assets/images/constellation/skymap/zodiacs/pisces.png" alt="pisces">
              <img class="img-responsive center-block hover-visible" src="../../assets/images/constellation/skymap/zodiacs/pisces_hover.png" alt="pisces">
            </a>
          </div>
          <div class="col-xs-4 col-sm-3">
            <a @click="select('aries')" data-toggle="modal" data-target="#myModal">
              <img class="img-responsive center-block hover-hidden" src="../../assets/images/constellation/skymap/zodiacs/aries.png" alt="aries">
              <img class="img-responsive center-block hover-visible" src="../../assets/images/constellation/skymap/zodiacs/aries_hover.png" alt="aries">
            </a>
          </div>
          <div class="col-xs-4 col-sm-3">
            <a @click="select('cancer')" data-toggle="modal" data-target="#myModal">
              <img class="img-responsive center-block hover-hidden" src="../../assets/images/constellation/skymap/zodiacs/cancer.png" alt="cancer">
              <img class="img-responsive center-block hover-visible" src="../../assets/images/constellation/skymap/zodiacs/cancer_hover.png" alt="cancer">
            </a>
          </div>
          <div class="col-xs-4 col-sm-3">
            <a @click="select('leo')" data-toggle="modal" data-target="#myModal">
              <img class="img-responsive center-block hover-hidden" src="../../assets/images/constellation/skymap/zodiacs/leo.png" alt="leo">
              <img class="img-responsive center-block hover-visible" src="../../assets/images/constellation/skymap/zodiacs/leo_hover.png" alt="leo">
            </a>
          </div>
          <div class="col-xs-4 col-sm-3">
            <a @click="select('scorpius')" data-toggle="modal" data-target="#myModal">
              <img class="img-responsive center-block hover-hidden" src="../../assets/images/constellation/skymap/zodiacs/scorpius.png" alt="scorpius">
              <img class="img-responsive center-block hover-visible" src="../../assets/images/constellation/skymap/zodiacs/scorpius_hover.png" alt="scorpionus">
            </a>
          </div>
          <div class="col-xs-4 col-sm-3">
            <a @click="select('sagittarius')" data-toggle="modal" data-target="#myModal">
              <img class="img-responsive center-block hover-hidden" src="../../assets/images/constellation/skymap/zodiacs/sagittarius.png" alt="sagitarius">
              <img class="img-responsive center-block hover-visible" src="../../assets/images/constellation/skymap/zodiacs/sagittarius_hover.png" alt="sagittarius">
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import modal from './modal/modal';
import content from './content';

console.log(content);

export default {
  components: {
    modal,
  },
  data() {
    return {
      selected: 'aquarius',
    };
  },
  computed: {
    image() {
      return require(`../../assets/images/constellation/skymap/modal/${this.selected}.png`);
    },
    text() {
      return content[this.selected].text;
    },
    title() {
      return this.selected.substring(0, 1).toUpperCase() + this.selected.substring(1);
    },
    date() {
      return content[this.selected].date;
    },
  },
  methods: {
    select(name) {
      this.selected = name;
    },
  },
};
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

  .hover-visible {
    display: none;
  }

  .hover-hidden {
    display: block;
  }

  &:hover {
    cursor: pointer;

    .hover-visible {
      display: block;
    }

    .hover-hidden {
      display: none;
    }
  }
}
</style>
