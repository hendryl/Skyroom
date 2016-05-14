<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {};
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

#app {
  position: relative;
  max-height: 100%;
  min-height: 100%;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: $eiga-font;
}

h1 {
  font-size: 3em;
}
h2 {
  font-size: 2.5em;
}
h3 {
  font-size: 2em;
}

a, button {
  font-family: $moon-font;
}

.container {
  max-width: 960px !important;
}

.page {
  padding-bottom: 91px + 50px;
  position: relative;
  max-height: 100%;
  min-height: 100vh;

  @media screen and (min-width: 768px) {
    padding-bottom: 70px + 50px;
  }
}

</style>
