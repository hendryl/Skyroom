<template>
  <div id="star-mass" class="page">
    <div class="container">
      <div class="row top">
        <div class="col-xs-12 col-sm-6 pull-right astro">
          <img src="../../assets/images/star/mass/astro_mass.png" alt="" class="img-responsive center-block">
        </div>
        <div class="col-xs-12 col-sm-6">
          <h1>How Big Is A Star?</h1>
          <p>
            Stars come in many different type and sizes, from the smallest to an unimaginable size. The sun is around 1.400.000 kilometers in diameter, which is more than 3.5 times of the distance from earth to the moon. An average star has a range of size from a few thousand kilometers, which is categorized as dwarfs, up to more than 700 solar diameter. The distance between earth and the sun is around 215 solar diameter, which can give you an idea of just how big some stars can be in the universe.
          </p>
          <p>
            Stars also have a very huge mass which we cannot even imagine it could be real. According to its mass, stars are categorized mainly in two category, low mass stars and high mass stars. Both low and high mass stars are very different in how they are acting, temperature, age, and even how they die.
          </p>
        </div>
      </div>
      <div class="margin-section"></div>
      <div class="row weight">
        <div class="col-xs-12 scale">
          <img src="../../assets/images/star/mass/scale.png" alt="" class="img-responsive center-block">
        </div>
        <div class="col-xs-12">
          <p>
            The low mass stars consists of small red dwarf stars that are smaller thanthe sun. The sun is in the middle range of the category. This type of stars are small and not very bright. You need a telescope and clear sky to see it from earth. While the low mass stars are not that impressive, the high mass stars are much more frightening. They have a range from a few times larget up to thousands of times more massive than the sun. There are red giant, blue giant, red super giant, blue super giant, hyper giant, and they are very luminous. VY Canis Majoris is the largest star ever discovered and it has a diameter of 2 billion kilometers.
          </p>
        </div>
      </div>
      <div class="row compare">
        <div class="col-xs-12 col-sm-6">
          <h5 class="text-center">VY Canis Majoris</h5>
          <div class="bottom">
            <img src="../../assets/images/star/mass/ray_back.png" alt="" class="img-responsive">
          </div>
          <div class="top">
            <img src="../../assets/images/star/mass/ray_front.png" alt="" class="img-responsive">
          </div>
          <div class="middle">
            <img src="../../assets/images/star/mass/canis_majoris.png" alt="" class="img-responsive center-block">
          </div>
        </div>
        <div class="col-xs-12 col-sm-6">
          <img src="../../assets/images/star/mass/sun_2.png" alt="" class="img-responsive center-block">
        </div>
        <div class="description col-xs-12">
          <p>
            Our sun has a mass of 2 octillion ton of gas, 333.000 times more than the mass of earth. The mass of the star affects the pressure in it's core which generate nuclear fusions and provide the star's energy. This difference in pressure and energy affects the star's age. If the star has a lot of mass, the pressure becomes higher and the rate of nuclear fusion of turning hydrogen into helium becomes much faster. Because of this, high mass stars are more likely to have a shorter lifespan than the lower masss stars even though the high mass stars have more mass and fuel.
          </p>
        </div>
      </div>
      <div class="row chart">
        <div class="col-xs-12 col-sm-6">
          <img src="../../assets/images/star/mass/age.png" alt="" class="img-responsive center-block">
        </div>
        <div class="visible-xs col-xs-12 margin"></div>
        <div class="col-xs-12 col-sm-6">
          <p>
            The low mass stars on the other hand have a relatively weaker pressure in its core thus making the fusion of hydrogen and helium occur only in its small core. The hydrogen and helium in the low mass star are mixed together and stays convective which means the stars still have a lot of fuel to burn up. Because of this process, the low mass stars have a longer lifespan than high mass stars. A very low mass star like a small red dwarf can have a lifespan of a trillion years. The universe itself is still less than 14 bullion years old, this means that the oldest red dwarf that exists now is still in their infant state.
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12">
          <div class="pagination">
            <a class="left" v-link="{
                path: '/star/description',
              }">
              <img src="../../assets/images/prev.png" alt="prev">
            </a>
            <a class="right" v-link="{
                path: '/star/temperature',
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
import routeTransition from '../../utils/routeTransition';

export default {
  route: routeTransition,
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/variables.scss";

.margin {
  height: 30px;
}

.margin-section {
  height: 70px;
}

.astro {
  padding-bottom: 30px;
}

.weight {
  padding-bottom: 70px;

  .scale {
    padding-bottom: 30px;
  }
}

.compare {
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  .description {
    padding-top: 30px;
  }

  .top {
    max-width: 100%;
    position: relative;
    z-index: 3;

    img {
      animation: rotate 50s linear reverse infinite;
      position: absolute;
    }
  }

  .middle {
    z-index: 2;
  }

  .bottom {
    max-width: 100%;
    position: relative;
    z-index: 1;

    img {
      animation: rotate 50s linear infinite;
      position: absolute;
    }
  }
}

.chart {
  padding-top: 70px;
}

.pagination {
  margin: 70px 0 0 0;
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
