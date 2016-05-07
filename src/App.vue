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

$background-color: #1C0E1E;
$red-color: #E82639;
$blue-color: #30A0D2;

$eiga-font: "eigaregular";
$hero-font: "hero_lightlight";
$moon-font: "moonbold";

html {
  height: 100%;
  margin: 0;
}

body {
  height: 100%;
  margin: 0;
  background-color: $background-color;
  color: white;

  font-family: $hero-font;
  font-size: 16px;

  @media (max-width: 900px) {
    font-size: 15px;
  }

  @media (max-width: 400px) {
    font-size: 14px;
  }
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
  letter-spacing: 3px;
}

</style>
