<template>
  <div class="modal fade" tabindex="-1" role="dialog">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-body">
          <div class="container-fluid">
            <div class="row">
              <div class="col-xs-12">
                <img class="img-responsive center-block" :src=image alt="" />
                <div class="title text-center">
                  <img class="left-border" src="../../../assets/images/constellation/skymap/modal/left.png" role="presentation" />
                  <div class="h1">
                    {{title}}
                  </div>
                  <img class="right-border" src="../../../assets/images/constellation/skymap/modal/right.png" role="presentation" />
                </div>
                <div class="content-wrapper">
                  <div class="flex">
                    <div class="date text-center">
                      {{date}}
                      <div class="divider"></div>
                    </div>
                  </div>
                  <p class="content">
                    {{text}}
                  </p>
                </div>
                <div class="close-button">
                  <button type="button" data-dismiss="modal">
                    <img src="../../../assets/images/constellation/skymap/modal/back.png" alt="" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        required: true,
      },
      date: {
        type: String,
        required: true,
      },
      text: {
        type: String,
        required: true,
      },
      image: {
        type: String,
        required: true,
      },
    },
  };
</script>

<style media="screen" lang="scss" scoped>
@import "../../../assets/css/variables.scss";

.modal-dialog {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}

.modal-content {
  border: none;
  border-radius: 0;
  box-shadow: none;
  min-height: 100%;
  width: 100%;
  background-color: $background-color;
}

.modal-body {
  max-width: 680px;
  margin: 0 auto;
}

.title {
  display: block;
  margin: 0 auto;
  padding: 25px 0 15px 0;
  max-width: 400px;

  .h1 {
    display: inline-block;
    padding-top: 5px;
    color: $cyan-color;
    font-family: $arctic-font;
  }

  .left-border {
    display: inline-block;
    margin: -15px 20px 0 0;
  }

  .right-border {
    display: inline-block;
    margin: -15px 0 0 20px;
  }
}

.content-wrapper {
  border: 1px solid $purple-color;
  padding: 30px 16px;
  margin-bottom: 30px;
}

.flex {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.date {
  display: inline-block;
  font-size: 1.5em;
  color: $purple-color;
  font-family: $arctic-font;
  margin: 0 auto;

  .divider {
    width: 100%;
    margin: 0px 0 20px 0;
    height: 2px;
    background-color: $purple-color;
  }
}

.content {
  color: $purple-color;
  text-align: justify;
}

.close-button {
  text-align: center;
}

button {
  background: none;
  outline: none;
  border: none;
}

</style>
