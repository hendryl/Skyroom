<template>
  <div id="constellation-description" class="page">
    <div class="container">
      <div class="row top">
        <div class="top-img hidden-xs">
          <img src="../../assets/images/constellation/description/constell.png" alt="" class="img-responsive center-block">
        </div>
        <div class="col-xs-12 col-sm-6">
          <h1>What Is A Constellation?</h1>
          <p>
            Thousands of years ago, ancient people discovered an effective way to get to know about the sky, although this may appear somewhat naive. Using great imagination, our ancestors realised that the configuration of certain bright stars in the sky resembled an animal, a legendary figure, a hero or something from their daily lives. They also realized that certain stars only appear in certain times only. It seems there was a pattern in which the stars appear and their position in the sky. Using the ability to recognize the patterns and characteristics of stars, our ancestors can navigate through the night, predict seasonal changes, and also calculated the perfect time for a migration of animals. They gained this knowledge by identifying and remembering the pattern of the stars in the night sky.
          </p>
          <p>
            The constellations which were identified in ancient times were named after animals like Taurus the bull, Aquila the eagle, Lupus the wolf, Ursa Major The Great Bear, Pisces the fishes, and more. The constellations also get their names from famous figures like the great hunter Orion, heroes and other mythical figures such as Hercules, Cepheus, Perseus and also musical instruments like Lyra, or everyday objects like Sagitta/Arrow. The most famous constellations are inspired from greek mythology and legend but there are also many other civilizations like ancient China, Egypt, Mesopotamia, and Mayan that observed and understood the role of the stars to their daily life.
          </p>
        </div>
        <div class="col-xs-12 visible-xs">
          <img src="../../assets/images/constellation/description/constell.png" alt="" class="img-responsive center-block">
        </div>
      </div>
      <div class="margin-section"></div>
      <div class="row">
        <div class="col-xs-12">
          <p>
            During the second half of the fifteenth century, navigators began to notice that the further south they travelled, the lower Polaris or North Star appeared on the northern horizon. Once they were beyond the equator it could longer be seen. On the southern horizon, stars were becoming visible that had not previously been observed, not visible in more northerly parts. The configuration of these stars naturally suggested new shapes to these seamen, who began to give them names. Gradually new constellations appeared, some of which were necessary for navigation in these uncharted waters.
          </p>
          <p>
            After 1603, maps of the stars began to include new constellations. As they originated in relatively recent times, the objects of the day were somewhat different. Thus, gradually, constellations appeared with seafaring names, such as Pyxis the compass, Circinus the drafting compass, and more. They also name the new constellations after instruments, birds, as well as various designations of a more technical rather than mythical nature, peculiar to the seventeenth century.
          </p>
        </div>
        <div class="col-xs-12 margin"></div>
        <div class="col-xs-12">
          <img src="../../assets/images/constellation/description/pyxis.png" alt="" class="img-responsive center-block">
        </div>
        <div class="col-xs-12 margin"></div>
      </div>
      <div class="row">
        <div class="col-xs-12">
          <p>
            Nowadays, people still use constellations to navigate their way through the night sky or predicting seasonal changes. In ancient times, our ancestors can look up to the sky and see a clear and dark sky full of stars that can be easily observed. Nowadays, it's not easy for us to go out and see the stars because of light pollution in cities from all of the artificial lights. People usually go to mountains, villages, or places that's far from cities.
          </p>
        </div>
        <div class="col-xs-12 margin"></div>
        <div class="col-xs-12 col-sm-4">
          <img src="../../assets/images/constellation/description/sky1.png" alt="" class="img-responsive center-block">
        </div>
        <div class="col-xs-12 col-sm-4">
          <img src="../../assets/images/constellation/description/sky2.png" alt="" class="img-responsive center-block">
        </div>
        <div class="col-xs-12 col-sm-4">
          <img src="../../assets/images/constellation/description/sky3.png" alt="" class="img-responsive center-block">
        </div>
      </div>
      <div class="margin-section"></div>
      <div class="row">
        <div class="col-xs-12 col-sm-6">
          <p>In order to identify a constellation, you have to start by locating the brightest star, or two or three of the brightest around it. By doing so we can identify and observe what constellation it belongs to. Sadly stars are not forever, in thousands or millions of years from now the stars will drift away from each other or die and turn into darkness. This will make the constellations we see today become unrecognizable. So for now let's enjoy the beauty, the magnificence, and secrets of the stars and constellations while we still can.</p>
        </div>
        <div class="col-xs-12 col-sm-6">
          <img src="../../assets/images/constellation/description/telescope.png" alt="" class="img-responsive center-block">
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12">
          <div class="pagination">
            <a class="right" v-link="{
                path: '/constellation/skymap',
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
.margin {
  height: 30px;
}

.margin-section {
  height: 70px;
}

.top {
  @media screen and(min-width: 768px) {
    display: flex;
    align-items: flex-end;

    div {
      width: 50%;
    }
  }
}

.pagination {
  margin: 70px 0 0 0;
  width: 100%;
  text-align: center;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: flex-end;
  }

  a {
    display: inline-block;
    transition-duration: 400ms;

    &.right {
      margin-left: 25px;

      &:hover {
        transform: translateX(4px);
      }
    }
  }
}
</style>
