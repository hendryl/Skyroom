<template>
  <div>
    <div id="bottom-layer" data-stellar-background-ratio="0.5"></div>
    <div id="top-layer" data-stellar-background-ratio="0.8"></div>
    <div id="app">
      <logo></logo>
      <div id="content">
        <router-view></router-view>
      </div>
      <foot></foot>
    </div>
  </div>
</template>

<script>
import logo from './components/logo';
import foot from './components/foot';

export default {
  components: {
    logo,
    foot,
  },
};
</script>

<style lang="scss">
@import "./assets/fonts/stylesheet.css";
@import "./assets/css/variables.scss";

html {
  height: 100%;
  width: 100%;
}

body {
  background-color: $background-color;
  color: $grey-color;
  font-family: $opensans-font;
  font-size: 16px;
  height: 100%;
  width: 100%;

  @media (max-width: 900px) {
    font-size: 15px;
  }

  @media (max-width: 400px) {
    font-size: 14px;
  }
}

::selection {
  color: white;
  background-color: $grey-color;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  color: $purple-color;
  font-family: $arctic-font;
}

h1 {
  font-size: 2.25em;
}
h2 {
  font-size: 2em;
}
h3 {
  font-size: 1.75em;
}
h4 {
  font-size: 1.5em;
}
h5 {
  font-size: 1.125em;
}

a, button {
  font-family: $moon-font;
}

#app {
  background-color: transparent;
  display: table;
  height: 100%; // firefox needs this
  min-height: 100%;
  position: relative;
  width: 100%;
}

#bottom-layer, #top-layer {
  background-position: top;
  background-size: 40%;
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  z-index: 0;
}

#top-layer {
  background-image: url('./assets/images/home/home_bg.png');
}

#bottom-layer {
  background-image: url('./assets/images/home/home_bg_lower.png');
}

.container {
  max-width: 960px !important;
}

.page {
  margin-bottom: 80px;
  max-height: 100%;
  min-height: 100%;
}
</style>
