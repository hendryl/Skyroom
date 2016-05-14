<template>
  <div id="contact" class="page">
    <basepage>
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-sm-6">
            <h1>Contact Us</h1>
            <p>
              Jika kalian ingin bertanya atau ingin bergabung menjadi astronomer Skyroom, ayo hubungi kami!
            </p>
            <form name="contact" method="post">
              <div class="form-group">
                <label class="control-label" for="#input-name">
                  Name
                </label>
                <input required class="form-control" id="input-name"/>
              </div>
              <div class="form-group">
                <label class="control-label" for="#input-email">
                  Email
                </label>
                <input required class="form-control" id="input-email" type="email" />
              </div>
              <div class="form-group">
                <label class="control-label" for="#input-message">
                  Message
                </label>
                <textarea required class="form-control" id="input-message" cols="50" rows="4"></textarea>
              </div>
              <div class="submit">
                <input class="btn" type="submit" value="Send" />
              </div>
            </form>
            <div class="margin"></div>
            <div>
              <div>
                <label>Find Us</label>
              </div>
              <div class="hashtag">
                #SkyroomIndonesia
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        class="img-background img-responsive"
        src="../../assets/images/contact/astro.png"
        alt="" />
    </basepage>
  </div>
</template>

<script>
import basepage from '../basepage.vue';

export default {
  components: {
    basepage,
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/variables.scss";

#contact {
  background-image: url('../../assets/images/home/home_bg.png');
  position: relative;
}

.img-background {
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
    position: fixed;
    right: 0;
    top: 234px;
    z-index: -1;
  }
}

h1 {
  color: $purple-color;
}

.form-control {
  border: none;
  border-radius: 3px;
  box-shadow: none;

  &[type="textarea"] {
    height: auto;
  }
}

label {
  font-weight: 400;
  margin-bottom: 7px;
}

textarea {
  max-width: 768px - 30px;
  min-width: 100%;
  resize: vertical;

  @media screen and (min-width: 768px) {
    max-width: 100%;

  }
}

.submit {
  position: relative;
  min-height: 40px;
  margin-top: 20px;

  input[type=submit] {
    position: absolute;
    top: 0;
    right: 0;
    background-color: transparent;
    color: $red-color;
    border: 2px solid $red-color;
    border-radius: 15px;
    font-family: $moon-font;
    font-size: 18px;
    text-indent: 3px;
    letter-spacing: 3px;
    height: 40px;
    padding: 0 12px;
    line-height: 40px;
  }
}

.margin {
  height: 70px;
}

.hashtag {
  display: inline-block;
  border: 1px solid white;
  color: white;
  font-size: 24px;
  padding: 5px 10px;
}

</style>
