<template>
  <div id="star-description" class="page">
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-sm-6">
          <img src="../../assets/images/star/desc/star1.png" alt="" class="img-responsive center-block"></img>
        </div>
        <div class="col-xs-12 margin visible-xs"></div>
        <div class="col-xs-12 col-sm-6 whatis">
          <h1>What Is A Star?</h1>
          <p>A star is a giant fireball that consists of hydrogen and helium. Stars are made from an incredible collection of mostly hydrogen atoms that slams into each other, forming an enormous gas cloud under its own gravity. The pressure in its' core keeps getting greater and stronger. In the same time the temperature keeps getting hotter and hotter. The hydrogen gas keeps accumulating and feeding the core of the proto-star.</p>
        </div>
      </div>
      <div class="margin-section"></div>
      <div class="row process">
        <div class="col-xs-12">
          <h3 class="text-center">Star Formation</h3>
        </div>
        <div class="col-xs-12 process-image">
          <img src="../../assets/images/star/desc/process.png" alt="process" class="img-responsive center-block"></img>
        </div>
        <div class="col-xs-12 visible-xs"></div>
        <div class="col-xs-12">
          <p>
            Once the core temperature reach 10,000,000 Ce, the hydrogen in the core stars fuses together. This nuclear reaction creates two things which is helium atom and energy in a form of radiation. Once this process starts the proto-star ignites and becomes a real star.
          </p>
          <p>
            The radiation from the nuclear fusion in the core pushes outward, counteracting the force of gravity that pushes the star towards the core trying to collapse itself. This opposite force pushes on each other and maintain the delicate balance between the two forces and keeping the star stable.
          </p>
        </div>
      </div>
      <div class="margin-section"></div>
      <div class="row fusion">
        <div class="col-xs-12">
          <h3 class="text-center">Nuclear Fusion</h3>
          <div class="radiation-image">
            <img src="../../assets/images/star/desc/radiation.png" alt="" class="img-responsive center-block">
          </div>
        </div>
      </div>
      <div class="row chart">
        <div class="left-text">
          Radiation
        </div>
        <div class="chart-image">
          <img class="img-responsive base" src="../../assets/images/star/desc/radiation_chart.png" alt="">
          <img class="img-responsive slider" src="../../assets/images/star/desc/radiation_chart_mover.png" alt="">
          <img class="img-responsive frame" src="../../assets/images/star/desc/frame_chart.png" alt="" />
        </div>
        <div class="right-text">
          Gravity
        </div>
      </div>
      <div class="margin-section"></div>
      <div class="row astro">
        <div class="col-xs-12 col-sm-6">
          <p>The nuclear fusion in the star's core keeps fusing hydrogen atom to heavier and heavier element that build up in its' core and blasts out from the star when they're about to die. Through this process stars fertilize the universe with many kinds of heavy elements and make the formation of planets and life possible. All the atom in our body, our house, and everything you see around you was made from the ashes of stars that die millions of years ago.</p>
        </div>
        <div class="col-xs-12 visible-xs margin"></div>
        <div class="col-xs-12 col-sm-6">
          <div class="astro-anim">
            <img src="../../assets/images/star/desc/astro_base.png" class="img-responsive base">
            <img src="../../assets/images/star/desc/astro.png" alt="" class="img-responsive anim">
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12">
          <div class="pagination">
            <a v-link="{
                path: '/star/mass',
              }">
              <img src="../../assets/images/next.png" alt="next">
            </a>
          </div>
        </div>
      </div>
    </div>
  <div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../../assets/css/variables.scss";

.margin {
  height: 50px;
}

.margin-section {
  height: 85px;
}

.whatis {
  h1 {
    text-align: center;
    padding-left: 20px;

    @media screen and(min-width: 768px) {
      text-align: left;
    }
  }

  p {
    margin-top: 40px;
  }
}

.process {
  margin: 0;

  img {
    margin: 15px 0 20px 0;
  }

  p+p {
    margin-top: 30px;
  }
}

.fusion {
  .radiation-image {
    margin: 20px 0 40px 0;
  }
}

.chart {
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0 15px;

  .left-text {
    display: inline-block;
    padding-right: 20px;
    color: $red-color;
    font-family: $arctic-font;
    font-size: 1.5em;
    line-height: 45px;
    min-width: 125px;

    @media screen and(min-width: 600px) {
      line-height: 55px;
    }

    @media screen and(min-width: 680px) {
      line-height: 65px;
    }

    @media screen and(min-width: 768px) {
      line-height: 70px;
    }
  }

  .right-text {
    display: inline-block;
    padding-left: 20px;
    color: $yellow-color;
    font-family: $arctic-font;
    font-size: 1.5em;
    line-height: 45px;
    min-width: 125px;

    @media screen and(min-width: 600px) {
      line-height: 55px;
    }

    @media screen and(min-width: 680px) {
      line-height: 65px;
    }

    @media screen and(min-width: 768px) {
      line-height: 70px;
    }
  }
}

.chart-image {
  display: inline-block;
  position: relative;
  max-width: 497px;
  margin: 0;

  .base {
    z-index: 1;
  }

  .slider {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    animation: sliding 250ms linear infinite;
  }

  .frame {
    position: absolute;
    top: 0;
    left: -1px;
    z-index: 3;
  }
}

@keyframes sliding {
  0% {
    left: -1%;
  }

  50% {
    left: 1.5%;
  }

  100% {
    left: -1.5%;
  }
}

.astro-anim {
  max-width: 344px;
  margin: 0 auto;
  position: relative;

  @media screen and(min-width: 768px) {
    margin: 0;
  }

  .anim {
    position: absolute;
    top: 0;
    animation: floating-desc infinite linear 60s;

    @media screen and(min-width: 768px) {
      left: 30px;
    }
  }
}

@keyframes floating-desc {
  0% {
    top: 0px;
    left: 30px;
  }

  20% {
    top: 17px;
    left: -12px;
  }

  30% {
    top: 30px;
    left: -4px;
  }

  40% {
    top: 0px;
    left: 10px;
  }

  50% {
    top: 1px;
    left: 31px;
  }

  60% {
    top: 40px;
    left: -2px;
  }

  70% {
    top: 28px;
    left: -8px;
  }

  80% {
    top: -5px;
    left: 21px;
  }

  90% {
    top: 32px;
    left: 5px;
  }

  100% {
    top: 1px;
    left: 29px;
  }
}

.pagination {
  margin-top: 40px;
  width: 100%;
  text-align: center;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: flex-end;
  }

  a {
    display: block;
    transition-duration: 400ms;

    &:hover {
      transform: translateX(4px);
    }
  }
}

</style>
