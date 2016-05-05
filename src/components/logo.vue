<template>
  <div id="logo">
    <div class="navbar-header">
      <div class="navbar-container">
        <button type="button"
        v-on:click="setActive"
        class="navbar-toggle"
        data-target="#navbar-dropdown">
        <div class="icons">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar bar-1"></span>
          <span class="icon-bar bar-2"></span>
          <span class="icon-bar bar-3"></span>
        </div>
        </button>
        <div id="navbar-dropdown" class="navbar-inner">
          <ul class="nav">
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
    </div>
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <div class="logo-container">
            <a v-link="{path: '/home'}">
              <img class="img-responsive logo" src="../assets/skyroom_logo.png">
              </img>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div id="navbar"
    role="navigation"
    class="navbar navbar-static-top center">
      <div id="navbar-content" class="navbar-inner">
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
  </div>
</template>

<script>
import $ from 'jquery';

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

function handleResize() {
  if ($('.navbar-header').hasClass('active')) {
    $('.navbar-toggle').click();
  }
}

const navbar = {
  el() {
    return '#navbar';
  },
  data() {
    return {
      routes,
    };
  },
  methods: {
    setActive() {
      $('.navbar-header').toggleClass('active');
    },
  },
  ready() {
    window.addEventListener('resize', handleResize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', handleResize);
  },
};

export default navbar;

</script>

<style lang="scss" scoped>

.logo-container {
  position: relative;
  width: 100%;
  height: 100%;
  margin: 70px 0 30px 0;
}

.logo {
  max-width: 350px;
  margin: 0 auto;
}

/*
*---------------------------------------------------------------------------------
*---------------------------------------------------------------------------------
*---------------------------------------------------------------------------------
*---------------------------------------------------------------------------------
*---------------------------------------------------------------------------------
*---------------------------------------------------------------------------------
*---------------------------------------------------------------------------------
*---------------------------------------------------------------------------------
*---------------------------------------------------------------------------------
*---------------------------------------------------------------------------------
*---------------------------------------------------------------------------------
*---------------------------------------------------------------------------------
*/

.navbar-header {
  position: fixed;
  top: 10%;
  left: 5%;
  z-index: 1000;
  width: 50px;
  height: 50px;
  border: 1px solid white;
  background-color: rgba(0, 0, 0, 0.6);
  transition: all 350ms;
  overflow: hidden;

  @media screen and (min-width: 769px) {
    display: none;

    .navbar-toggle {
      display: none;
    }
  }
}

.navbar-header.active {
  width: 140px;
  height: 280px;
  border: 1px solid white;
  border-radius: 0;
  background-color: rgba(0, 0, 0, 0.6);
  overflow: hidden;

  .navbar-toggle {
    padding: 10px;
  }

  .navbar-toggle>.icons {
    .bar-1 {
      top: 50%;
      transform: translateY(-50%) rotateZ(45deg);
    }

    .bar-2 {
      opacity: 0;
    }

    .bar-3 {
      top: 50%;
      transform: translateY(-50%) rotateZ(-45deg);
    }
  }
}

.navbar-container {
  position: relative;
  width: 140px;
  height: 280px;
}

.navbar-toggle {
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  margin: 0;
  border: none;
  padding: 14px;
  height: 50px;
  width: 50px;
  transition: all 100ms;

  .icons {
    position: relative;
    height: 100%;
    width: 100%;

    .icon-bar {
      position: absolute;
      background-color: white;
      width: 100%;
    }

    .bar-1 {
      top: 0;
      left: 0;
    }

    .bar-2 {
      top: 50%;
      left: 0;
      transform: translateY(-50%);
    }

    .bar-3 {
      bottom: 0;
      left: 0;
    }
  }
}

.navbar-toggle .icon-bar+.icon-bar {
  margin: 0;
}

#navbar-dropdown {
  position: absolute;
  left: 0;
  bottom: 0;
  margin: 0;
  border: none;
  width: 140px;

  transition: all 100ms;

  ul {
    top: 0;
    left: 0;
    width: 100%;
    margin: 0;
  }

  ul>li>a {
    position: relative;
    color: white;
    padding: 12px 10px;
    margin: 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  }

  ul>li>a:hover {
    color: white;
    background-color: lighten(rgba(0, 0, 0, 0.4), 50%);
    border-radius: 0;
  }

  ul>li>a.active:hover {
    color: white;
    background-color: lighten(rgba(0, 0, 0, 0.4), 60%);
    border-radius: 0;
  }

  ul>li>a:focus:active {
    color: black;
    background-color: darken(white, 10%);
    border-radius: 0;
  }

  ul>li>a.active {
    background-color: lighten(rgba(0, 0, 0, 0.4), 50%);
    border-radius: 0;
  }
}

#navbar-dropdown.navbar-collapse {
  @media screen and (min-width: 768px) {
    display: none !important;
  }
}

/*
*---------------------------------------------------------------------------------
*---------------------------------------------------------------------------------
*---------------------------------------------------------------------------------
*---------------------------------------------------------------------------------
*---------------------------------------------------------------------------------
*---------------------------------------------------------------------------------
*---------------------------------------------------------------------------------
*---------------------------------------------------------------------------------
*---------------------------------------------------------------------------------
*---------------------------------------------------------------------------------
*---------------------------------------------------------------------------------
*---------------------------------------------------------------------------------
*/

#navbar {
  position: relative;

  @media screen and (max-width: 768px) {
      display: none;
  }
}

.navbar {
  margin: 0;
  border: none;
}

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

  @media screen and (min-width: 768px){
    padding: 5px 25px;
    margin: 0 15px;
  }

  @media screen and (min-width: 992px) {
    padding: 5px 30px;
    margin: 0 20px;
  }

  @media screen and (min-width: 1200px) {
    padding: 5px 35px;
    margin: 0 35px;
  }

  @media screen and (min-width: 1500px) {
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
