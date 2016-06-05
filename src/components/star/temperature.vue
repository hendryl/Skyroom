<template>
  <div id="star-temperature" class="page">
    <div class="container">
      <div class="row hot">
        <div class="col-xs-12">
          <div class="col-xs-12 col-sm-6">
            <h1>How Hot Can A Star Get?</h1>
            <p>Stars are basically giant burning balls of plasma, which means that stars are really hot. The temperature of the stars in the universe have a range of around 3000 &deg;C to more than 25.000 &deg;C. The hotter a star the brighter it appears in space. The sun falls in the middle of the range and has an average temperature of over 6000 &deg;C. But deep inside the core of the sun, temperature can reach up to 15.000.000 &deg;C. There are still a lot of stars that are much hotter than our star and can reach hundred of thousands degree.</p>
          </div>
          <div class="col-xs-12 col-sm-6">
            <div class="hot-anim">
              <div class="flare">
                <img class="img-responsive anim flare-1" src="../../assets/images/star/temp/flare_1.png" alt="">
                <img class="img-responsive anim flare-2" src="../../assets/images/star/temp/flare_2.png" alt="">
                <img class="img-responsive anim flare-3" src="../../assets/images/star/temp/flare_3.png" alt="">
              </div>
              <img class="img-responsive anim astro" src="../../assets/images/star/temp/astro.png" alt="">
              <img src="../../assets/images/star/temp/star.png" alt="" class="img-responsive">
            </div>
          </div>
        </div>
      </div>
      <div class="margin-section"></div>
      <div class="row">
        <div class="col-xs-12">
          <p>
            The temperature of a star can change in its entire life. When a star starts to die, it will increase the temperature in its core and grow larger and more luminous than before. In case of high mass star, the star keeps heating up because of the contraction in its core. It can be reach a temperature of thousand times hotter than when they were still fusing hydrogen.
          </p>
          <p>
            Stars also have atmosphere, thin layers of gas above the denser inner layer. This gasses absorb light at specific wave from the light below depending on the elements in the star. This absorption prevents the light from passing into space, which causes the light produced by the stars to have different colors.
          </p>
        </div>
      </div>
      <div class="margin-section"></div>
      <div class="row compare">
        <div class="col-xs-4">
          <img src="../../assets/images/star/temp/red.png" alt="red star" class="img-responsive center-block">
          <div class="label red">
            &lt;3.000 &deg;C
          </div>
        </div>
        <div class="col-xs-4">
          <img src="../../assets/images/star/temp/yellow.png" alt="yellow star" class="img-responsive center-block">
          <div class="label yellow">
            6.000 &deg;C
          </div>
        </div>
        <div class="col-xs-4">
          <img src="../../assets/images/star/temp/blue.png" alt="blue star" class="img-responsive center-block">
          <div class="label blue">
            &gt;25.000 &deg;C
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 margin-section"></div>
        <div class="col-xs-12 visible-xs">
          <p>
            Temperature of a star also affects the color of the star. Hotter stars will appear blue and colder stars will appear red. Most of the stars in the universe has a range of color from bright blue, orange, yellow, and dim red depending on their temperature. There is a graph that scientists use to identify and categorize different types of stars according to their temperature and luminosity, which is called the HR Diagram. With this graph, scientists can learn about the star's life and future.
          </p>
        </div>
        <div class="col-xs-12 visible-xs margin"></div>
      </div>
      <div class="row hr-diagram">
        <div class="col-xs-12">
          <div class="h1">HR Diagram</div>
        </div>
        <div class="col-xs-12 col-sm-6">
          <img src="../../assets/images/star/temp/hr-diagram.png" alt="HR Diagram" class="img-responsive center-block" />
        </div>
        <div class="col-sm-6 hidden-xs">
          <p>
            Temperature of a star also affects the color of the star. Hotter stars will appear blue and colder stars will appear red. Most of the stars in the universe has a range of color from bright blue, orange, yellow, and dim red depending on their temperature. There is a graph that scientists use to identify and categorize different types of stars according to their temperature and luminosity, which is called the HR Diagram. With this graph, scientists can learn about the star's life and future.
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12">
          <div class="pagination">
            <a class="left" v-link="{
                path: '/star/mass',
              }">
              <img src="../../assets/images/prev.png" alt="prev">
            </a>
            <a class="right" v-link="{
                path: '/star/death',
              }">
              <img src="../../assets/images/next.png" alt="next">
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
@import "../../assets/css/variables.scss";

.margin {
  height: 30px;
}

.margin-section {
  height: 70px;
}

.hot {
  .hot-anim {
    position: relative;
    max-width: 351px;
    margin: 0 auto;
  }

  .flare {
    overflow: hidden;
    min-height: 100%;
    min-width: 100%;
    position: absolute;
  }

  .anim {
    position: absolute;
  }

  .flare-1 {
    animation: rotate 50s linear infinite;
  }

  .flare-2 {
    animation: rotate 75s linear reverse infinite;
  }

  .flare-3 {
    animation: rotate 90s linear infinite;
  }

  .astro {
    animation: float-temp 60s linear infinite;
  }
}

@keyframes float-temp {
  0% {
    transform: translate(0, 0);
  }

  20% {
    transform: translate(10%, 4%);
  }

  35% {
    transform: translate(6%, 10%);
  }

  50% {
    transform: translate(-4%, -8%);
  }

  70% {
    transform: translate(-8%, 2%);
  }

  85% {
    transform: translate(-4%, 10%);
  }

  100% {
    transform: translate(-0.1%, 0.1%);
  }
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.compare {
  .label {
    display: block;
    font-family: $arctic-font;
    font-size: 1.2em;
    padding: 14px 0 0 0;
    margin: 30px auto 0 auto;
    width: 100%;
    max-width: 120px;
    border-radius: 0;
    font-weight: 400;

    @media screen and (min-width: 768px) {
      width: 120px;
    }
  }

  .red {
    color: $red-color;
    border: 2px solid #BE1E2D;
  }

  .yellow {
    color: $yellow-color;
    border: 2px solid #F9EC31;
  }

  .blue {
    color: $blue-color;
    border: 2px solid #26A9E0;
  }
}

.hr-diagram {
  .h1 {
    text-align: center;
    color: $purple-color;
    font-family: $arctic-font;

    @media screen and(min-width: 768px) {
      text-align: left;
      padding-left: 32px;
    }

    @media screen and(min-width: 996px) {
      padding-left: 63px;
    }
  }
}

.pagination {
  margin-top: 40px;
  width: 100%;
  text-align: center;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }

  a {
    display: inline-block;
    transition-duration: 400ms;

    &.left {
      margin-right: 25px;

      &:hover {
        transform: translateX(-4px);
      }
    }

    &.right {
      margin-left: 25px;

      &:hover {
        transform: translateX(4px);
      }
    }
  }
}

</style>
