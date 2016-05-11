<script>
export default {};
</script>

<template>
<footer class="footer">
  <div class="container">
    <div class="content">
      <div class="col-sm-6 hidden-xs left-block">
        <div class="footer-text">
          Designed by SKYROOM 2016
        </div>
        <div class="footer-text">
          All rights reserved &copy;2016
        </div>
      </div>
      <div class="col-xs-12 col-sm-6">
        <div class="buttons">
          <div class="button-text footer-text text-right hidden-xs">Follow Us</div>
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
  height: 90px;
  background-color: rgba(0, 0, 0, 0.3);

  @media screen and (min-width:768px) {
    height: 70px;
  }
}

.container {
  position: relative;
  min-height: 100%;
  padding: 0 15px;
  border-top: 1px solid white;

  @media screen and (min-width: 768px) {
    border: none;
  }
}

.col-sm-3 {
  padding: 0;
  max-height: 70px;
  min-height: 70px;
}

.col-sm-6 {
  padding: 0;
  max-height: 70px;
  min-height: 70px;
}

.left-block .footer-text:first-of-type {
  padding-right: 30px;
}

.footer-text {
  display: inline-block;
  margin-top: 9px;
  line-height: 61px;
  font-size: 12px;
}

.buttons {
  max-height: 90px;
  min-height: 90px;
  text-align: center;

  @media screen and (min-width:768px) {
    max-height: 70px;
    min-height: 70px;
    display: flex;
    -webkit-justify-content: flex-end;
    justify-content: flex-end;
    max-height: 32px;
  }
}

.button-text {
  line-height: 61px;
  margin: 9px 15px 0 0;
}

a {
  margin: 21px 18px 21px 0;

  @media screen and (min-width: 768px) {
    margin: 24px 18px 14px 0;
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
  background-position: center;

  @media screen and (min-width:768px) {
    height: 32px;
    width: 32px;
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
  margin-right: 0;
  background-image: url("../assets/images/footer/ig.png");
  background-size: 32px 32px;
  background-repeat: no-repeat;
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

</style>
