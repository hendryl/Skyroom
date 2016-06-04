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
      <div class="row weight">
        <div class="col-xs-12"></div>
        <div class="col-xs-12"></div>
      </div>
      <div class="row compare"></div>
      <div class="row chart"></div>
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
export default {};
</script>

<style lang="scss" scoped>
@import "../../assets/css/variables.scss";

.astro {
  padding-bottom: 25px;
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
