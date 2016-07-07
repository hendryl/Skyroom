<template>
  <div id="app">
    <basepage>
      <div id="content">
        <router-view></router-view>
      </div>
    </basepage>
  </div>
</template>

<script>
import basepage from './components/basepage';
import logo from './components/logo';
import foot from './components/foot';

export default {
  components: {
    basepage,
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
  min-height: 100%;
  margin: 0;
}

body {
  height: 100%;
  margin: 0;
  background-color: $background-color;
  color: $grey-color;

  font-family: $opensans-font;
  font-size: 16px;

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

#app {
  display: table;
  position: relative;
  min-height: 100%;
  width: 100%;
  background-color: transparent;
  background-image: url('./assets/images/home/home_bg.png');
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

.container {
  max-width: 960px !important;
}

.page {
  margin-bottom: 80px;
  max-height: 100%;
  min-height: 100%;
}
</style>
