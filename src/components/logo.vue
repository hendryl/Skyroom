<template>
  <div id="logo">
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <div class="logo-container">
            <a v-link="{path: '/'}">
              <img class="img-responsive logo" src="../assets/skyroom_logo.png">
              </img>
            </a>
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

<style lang="scss" scoped>

.logo-container {
  width: 100%;
  height: 100%;
  margin: 70px 0 30px 0;
}

.logo {
  max-width: 300px;
  margin: 0 auto;
}

</style>
