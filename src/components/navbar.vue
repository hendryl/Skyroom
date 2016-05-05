<script>
const routes = [
  {
    path: '/home',
    text: 'HOME',
  },
  {
    path: '/star',
    text: 'STAR',
  },
  {
    path: '/constellation',
    text: 'CONSTELLATION',
  },
  {
    path: '/about',
    text: 'ABOUT',
  },
  {
    path: '/contact',
    text: 'CONTACT',
  },
];

const navbar = {
  el() {
    return '#navbar';
  },
  data() {
    return {
      routes,
    };
  },
};

export default navbar;
</script>

<template>
  <div id="navbar"
  role="navigation"
  class="navbar navbar-static-top center">
    <div class="navbar-header">
      <button type="button"
      class="navbar-toggle collapsed"
      data-toggle="collapse"
      data-target="#navbar-content">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
    </div>
    <div id="navbar-content" class="collapse navbar-collapse navbar-inner">
      <ul class="nav navbar-nav">
        <li v-for="route in routes">
          <a v-link="{
            path: route.path,
            activeClass: 'active'
            }">
            {{ route.text }}
          </a>
        </li>
      </ul>
    </div>
  </div>
  <div class="margin"></div>
</template>

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

li > a:focus {
  color: black;
  background-color: white;
  border-radius: 15px;
}

li > a:focus:active {
  color: black;
  background-color: darken(white, 10%);
  border-radius: 15px;
}

.active {
  color: black;
  background-color: white;
  border-radius: 15px;
}

.margin {
  height: 51px;
}

</style>
