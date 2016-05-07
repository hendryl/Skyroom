<script>
export default {};
</script>

<template>
<footer class="footer">
  <div class="container">
    <div class="content">
      <div class="hidden-xs">FOLLOW US</div>
      <div class="buttons">
        <a
          href="http://www.facebook.com"
          target="blank"
          class="facebook"></a>
        <a
          href="http://www.twitter.com"
          target="blank"
          class="twitter"></a>
        <a
          href="http://www.instagram.com"
          target="blank"
          class="instagram"></a>
      </div>
      <div class="row">
        <div class="col-sm-6 hidden-xs left">Designed by SKYROOM 2016</div>
        <div class="col-sm-6 hidden-xs right">All rights reserved &copy;2016</div>
      </div>
    </div>
  </div>
</footer>
</template>

<style lang="scss" scoped>
@import "../assets/css/variables.scss";

.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  color: $blue-color;

  @media screen and (min-width:768px) {
    height: 136px;
  }
}

.container {
  position: relative;
  max-width: 800px;
  border-top: 1px solid white;
  min-height: 100%;
  padding: 14px 15px;
}

.buttons {
  max-height: 48px;
  margin: 14px 0;
  text-align: center;

  @media screen and (min-width:768px) {
    text-align: left;
    max-height: 32px;
  }
}

a.facebook {
  display: inline-block;
  height: 48px;
  width: 48px;
  padding: 8px;
  background-image: url("../assets/images/footer/fb.png");
  background-size: 32px 32px;
  background-repeat: no-repeat;
  margin-right: 18px;
  background-position: center;

  @media screen and (min-width:768px) {
    height: 32px;
    width: 32px;
    padding: 0;
  }
}

a.facebook:hover {
  cursor: pointer;
  background-image: url("../assets/images/footer/fb_hover.png");
  background-size: 32px 32px;
  background-repeat: no-repeat;
  background-position: center;
}

a.twitter {
  display: inline-block;
  height: 48px;
  width: 48px;
  padding: 8px;
  background-image: url("../assets/images/footer/tw.png");
  background-size: 32px 32px;
  background-repeat: no-repeat;
  margin-right: 18px;
  background-position: center;

  @media screen and (min-width:768px) {
    height: 32px;
    width: 32px;
    padding: 0;
  }
}

a.twitter:hover {
  cursor: pointer;
  background-image: url("../assets/images/footer/tw_hover.png");
  background-size: 32px 32px;
  background-repeat: no-repeat;
  background-position: center;
}

a.instagram {
  display: inline-block;
  height: 48px;
  width: 48px;
  padding: 8px;
  background-image: url("../assets/images/footer/ig.png");
  background-size: 32px 32px;
  background-repeat: no-repeat;
  margin-right: 18px;
  background-position: center;

  @media screen and (min-width:768px) {
    height: 32px;
    width: 32px;
    padding: 0;
  }
}

a.instagram:hover {
  cursor: pointer;
  background-image: url("../assets/images/footer/ig_hover.png");
  background-size: 32px 32px;
  background-repeat: no-repeat;
  background-position: center;
}

.left {
  text-align: left;
}

.right {
  text-align: right;
}

</style>
