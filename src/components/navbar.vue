<template>
  <div id="navbar" class="navbar navbar-default navbar-fixed-top">
    <div class="container">
      <div class="navbar-collapse">
        <ul class="nav navbar-nav">
          <li>
            <a v-link="{path: '/'}">HOME</a>
          </li>
          <li>
            <a v-link="{path: '/star'}">STAR</a>
          </li>
          <li>
            <a v-link="{path: '/constellation'}">CONSTELLATION</a>
          </li>
          <li>
            <a v-link="{path: '/about'}">ABOUT</a>
          </li>
          <li>
            <a v-link="{path: '/contact'}">CONTACT</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div class="margin"></div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>

.margin {
  height: 51px;
}

</style>
