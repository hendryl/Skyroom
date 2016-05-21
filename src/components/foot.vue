<script>
export default {};
</script>

<template>
<footer class="footer">
  <div class="container">
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
        <div class="button-text footer-text text-right hidden-xs">
          Follow Us
        </div>
        <a
          href="https://www.facebook.com/skyroomindonesia/"
          target="blank"
          class="facebook"></a>
        <a
          href="https://twitter.com/skyroom_indo"
          target="blank"
          class="twitter"></a>
        <a
          href="https://www.instagram.com/skyroom.indonesia/"
          target="blank"
          class="instagram"></a>
      </div>
    </div>
  </div>
</footer>
</template>

<style lang="scss" scoped>
@import "../assets/css/variables.scss";

.footer {
  display: table-row;
  background-color: rgba(0, 0, 0, 0.3);
  height: 91px;
  width: 100%;

  @media screen and (min-width:768px) {
    height: 70px;
  }
}

.container {
  border-top: 1px solid white;
  min-height: 100%;
  padding: 0 15px;
  position: relative;

  @media screen and (min-width: 768px) {
    border: none;
  }
}

.col-sm-3,
.col-sm-6 {
  max-height: 90px;
  min-height: 90px;
  padding: 0;

  @media screen and (min-width: 768px) {
    max-height: 70px;
    min-height: 70px;
  }
}

.left-block .footer-text:first-of-type {
  padding-right: 30px;
}

.footer-text {
  display: inline-block;
  font-size: 12px;
  line-height: 70px;
  margin-top: 0px;
}

.buttons {
  max-height: 90px;
  min-height: 90px;
  text-align: center;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: flex-end;
    -webkit-justify-content: flex-end;
    max-height: 70px;
    min-height: 70px;
  }

  .button-text {
    margin-right: 15px;
  }
}

a {
  display: inline-block;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 32px 32px;
  height: 48px;
  margin: 21px 9px 0 9px;
  padding: 8px;
  width: 48px;

  @media screen and (min-width: 768px) {
    height: 32px;
    margin: 19px 9px 0 9px;
    padding: 0;
    width: 32px;
  }

  &:first-of-type {
    margin-left: 0;
  }

  &:last-of-type {
    margin-right: 0;
  }

  &.facebook {
    background-image: url("../assets/images/footer/fb.png");

    &:hover {
      background-image: url("../assets/images/footer/fb_hover.png");
    }
  }

  &.twitter {
    background-image: url("../assets/images/footer/tw.png");

    &:hover {
      background-image: url("../assets/images/footer/tw_hover.png");
    }
  }

  &.instagram {
    background-image: url("../assets/images/footer/ig.png");

    &:hover {
      background-image: url("../assets/images/footer/ig_hover.png");
    }
  }
}
</style>
