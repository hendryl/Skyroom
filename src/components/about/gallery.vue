<template>
  <div class="gallery">
    <div class="container">
      <div class="row">
        <h1 class="text-center">Our Astronomers</h1>
        <div class="hidden-xs">
          <div id="carousel" class="carousel slide">
            <ol class="carousel-indicators">
              <li data-target="#carousel" data-slide-to="0" class="active">
              <li data-target="#carousel" data-slide-to="1">
            </ol>
            <div class="carousel-inner" role="listbox">
              <div class="item active">
                <div class="col-sm-4">
                  <img class="img-responsive center-block"
                  src="../../assets/images/about/web/pic1.png" alt="Tris" />
                  <h1 class="text-center">Tris</h1>
                </div>
                <div class="col-sm-4">
                  <img class="img-responsive center-block"
                  src="../../assets/images/about/web/pic2.png" alt="Rizky" />
                  <h1 class="text-center">Rizky</h1>
                </div>
                <div class="col-sm-4">
                  <img class="img-responsive center-block"
                  src="../../assets/images/about/web/pic3.png" alt="Edo" />
                  <h1 class="text-center">Stevanus</h1>
                </div>
              </div>
              <div class="item">
                <div class="col-sm-4">
                  <img class="img-responsive center-block"
                  src="../../assets/images/about/web/pic4.png" alt="Rizky" />
                  <h1 class="text-center">Edo</h1>
                </div>
                <div class="col-sm-4">
                  <img class="img-responsive center-block"
                  src="../../assets/images/about/web/pic5.png" alt="Rizky" />
                  <h1 class="text-center">Lazu</h1>
                </div>
                <div class="col-sm-4">
                  <img class="img-responsive center-block"
                  src="../../assets/images/about/web/pic6.png" alt="Rizky" />
                  <h1 class="text-center">Dwi</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xs-12 visible-xs">
          <div id="carousel-mobile" class="carousel slide" data-ride="carousel" data-interval="2000" data-pause="false">
            <div class="carousel-inner" role="listbox">
              <div class="item active">
                <img class="img-responsive center-block"
                src="../../assets/images/about/web/pic1.png" alt="Tris" />
                <h1 class="text-center">Tris</h1>
              </div>
              <div class="item">
                <img class="img-responsive center-block"
                src="../../assets/images/about/web/pic2.png" alt="Rizky" />
                <h1 class="text-center">Rizky</h1>
              </div>
              <div class="item">
                <img class="img-responsive center-block"
                src="../../assets/images/about/web/pic3.png" alt="Edo" />
                <h1 class="text-center">Stevanus</h1>
              </div>
              <div class="item">
                <img class="img-responsive center-block"
                src="../../assets/images/about/web/pic4.png" alt="Rizky" />
                <h1 class="text-center">Edo</h1>
              </div>
              <div class="item">
                <img class="img-responsive center-block"
                src="../../assets/images/about/web/pic5.png" alt="Rizky" />
                <h1 class="text-center">Lazu</h1>
              </div>
              <div class="item">
                <img class="img-responsive center-block"
                src="../../assets/images/about/web/pic6.png" alt="Rizky" />
                <h1 class="text-center">Dwi</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.gallery {
  background-color: rgba(0, 0, 0, 0.5);
}

#carousel {
  padding-bottom: 60px;
}

.carousel img {
  padding-bottom: 10px;
}

.carousel-indicators {
  bottom: 0px;

  li {
    background-color: transparent;
    background-image: url('../../assets/images/about/page.png');
    background-position: center;
    background-repeat: no-repeat;
    border: none;
    margin: 0 5px;
    width: 26px;
    height: 25px;

    &.active {
      background-color: transparent;
      background-image: url('../../assets/images/about/page_active.png');
      background-position: center;
      background-repeat: no-repeat;
      margin: 0 5px;
      width: 26px;
      height: 25px;
    }
  }
}
</style>
