<template>
  <div id="navbar" class="navbar navbar-static-top  center">
    <div class="navbar-collapse navbar-inner">
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
  <div class="margin"></div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>

.navbar.center .navbar-inner {
  text-align: center;
}

.navbar.center .navbar-inner .nav {
  display: inline-block;
  float: none;
  vertical-align: top;
}

li > a {
  color: white;
  padding: 5px 20px;
}

@media screen and (min-width: 768px){
  li > a {
    padding: 5px 25px;
    margin: 0 15px;
  }
}

@media screen and (min-width: 992px) {
  li > a {
    padding: 5px 30px;
    margin: 0 20px;
  }
}

@media screen and (min-width: 1200px) {
  li > a {
    padding: 5px 35px;
    margin: 0 35px;
  }
}

@media screen and (min-width: 1500px) {
  li > a {
    padding: 5px 40px;
    margin: 0 50px;
  }
}


li > a:hover {
  color: black;
  background-color: white;
  border-radius: 15px;
}

.margin {
  height: 51px;
}

</style>
