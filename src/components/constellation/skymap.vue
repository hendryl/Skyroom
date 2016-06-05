<template>
  <modal id="myModal" :image="image" :title="title" :date="date" :text="text"></modal>
  <div id="constellation-skymap" class="page">
    <div class="container">
      <div class="row skymap">
        <div class="col-xs-12">
          <h1 class="text-center">The Map Of The Stars</h1>
          <div id="carousel" class="carousel slide" data-interval="false">
            <div class="carousel-inner" role="listbox">
              <img class="img-responsive frame" src="../../assets/images/constellation/skymap/frame.png" role="presentation">
              <div class="item active">
                <img class="img-responsive center-block" src="../../assets/images/constellation/skymap/spring.png" alt="Spring">
              </div>
              <div class="item">
                <img class="img-responsive center-block" src="../../assets/images/constellation/skymap/summer.png" alt="Summer">
              </div>
              <div class="item">
                <img class="img-responsive center-block" src="../../assets/images/constellation/skymap/fall.png" alt="Fall">
              </div>
              <div class="item">
                <img class="img-responsive center-block" src="../../assets/images/constellation/skymap/winter.png" alt="Winter">
              </div>
            </div>
          </div>
          <div class="label">
            <button class="btn-carousel left" href="#carousel" role="button" data-slide="prev" @click="changeSeason(-1)">
              <img class="img-responsive" src="../../assets/images/constellation/skymap/left.png" alt="left">
            </button>
            <div class="h1 text-center">{{season}}</div>
            <button class="btn-carousel right" href="#carousel" role="button" data-slide="next" @click="changeSeason(1)">
              <img class="img-responsive" src="../../assets/images/constellation/skymap/right.png" alt="right">
            </button>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2">
          <div class="description">
            <p>The position of the east constellation and the west constellation is inverted. If the map was observed from the sky towards the ground, the left is west and the right is east, while when observed from the ground towards the sky, the left become east and the right become west.</p>
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
      <div class="row">
        <div class="col-xs-12">
          <div class="pagination">
            <a v-link="{
                path: '/constellation/description',
              }">
              <img src="../../assets/images/prev.png" alt="previous">
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

const seasons = ['SPRING', 'SUMMER', 'FALL', 'WINTER'];

export default {
  components: {
    modal,
  },
  data() {
    return {
      selected: 'aquarius',
      selectedSeason: 0,
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
    season() {
      return seasons[this.selectedSeason];
    },
  },
  methods: {
    select(name) {
      this.selected = name;
    },
    changeSeason(value) {
      let current = this.selectedSeason;
      current += value;

      if (current < 0) {
        current = 3;
      } else if (current > 3) {
        current = 0;
      }

      this.selectedSeason = current;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/variables.scss";

.skymap {
  margin-bottom: 30px;
}

#carousel {
  padding: 0;

  img {
    padding: 0;
  }

  .item>img {
    animation: rotating 180s linear infinite;
  }

  .frame {
    position: absolute;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    z-index: 10;
  }
}

@keyframes rotating {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.label {
  display: block;
  margin: 0 auto;
  padding: 30px 0 0 0;
  max-width: 500px;

  .h1 {
    display: inline-block;
    color: $cyan-color;
    font-family: $arctic-font;
    font-size: 2.5em;
    margin-top: 0;
    min-width: 120px;

    @media screen and(min-width: 768px) {
      font-size: 3em;
      min-width: 155px;
    }
  }

  .btn-carousel {
    display: inline-block;
    position: relative;
    background-color: transparent;
    border: none;
    outline: none;
    height: 61px;
    width: 31px;
    padding-bottom: 14px;

    @media screen and(min-width: 768px) {
      padding-bottom: 11px;
    }


    &.left {
      margin: 0 40px 0 0;

      img {
        position: absolute;
        top: 10px;
        left: 0;
        transition-duration: 400ms;
      }

      &:hover,
      &:hover:focus {
        img {
          transform: translateX(-4px);
        }
      }
    }

    &.right {
      margin: 0 0 0 40px;

      img {
        position: absolute;
        top: 10px;
        left: 0;
        transition-duration: 400ms;
      }

      &:hover,
      &:hover:focus {
        img {
          transform: translateX(4px);
        }
      }
    }
  }
}

.description {
  margin-bottom: 70px;
  border: 1px solid $purple-color;
  padding: 20px;

  p {
    text-align: justify;
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

.pagination {
  margin: 70px 0 0 0;
  width: 100%;
  text-align: center;


  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: flex-start;
  }

  a {
    display: block;
    transition-duration: 400ms;

    &:hover {
      transform: translateX(-4px);
    }
  }
}

</style>
