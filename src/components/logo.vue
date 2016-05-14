<template>
  <header>
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
                <img class="img-responsive logo" src="../assets/images/skyroom_logo.png">
                </img>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div id="navbar"
      role="navigation"
      class="navbar navbar-static-top center">
        <div class="container">
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
      </div>
      <div class="margin"></div>
    </div>
  </header>
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
  height: 100%;
  margin: 70px 0 30px 0;
  position: relative;
  width: 100%;
}

.logo {
  margin: 0 auto;
  max-width: 100%;
}

.navbar-header {
  background-color: rgba(0, 0, 0, 0.6);
  border: 1px solid white;
  height: 50px;
  left: 5%;
  overflow: hidden;
  position: fixed;
  top: 20px;
  transition: all 350ms;
  width: 50px;
  z-index: 1000;

  @media screen and (min-width: 768px) {
    display: none;

    .navbar-toggle {
      display: none;
    }
  }

  &.active {
    background-color: rgba(0, 0, 0, 0.6);
    border: 1px solid white;
    border-radius: 0;
    height: 280px;
    overflow: hidden;
    width: 180px;

    .navbar-toggle {
      padding: 10px;

      &>.icons {
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
  }
}

.navbar-container {
  height: 280px;
  position: relative;
  width: 180px;
}

.navbar-toggle {
  border: none;
  display: block;
  height: 50px;
  left: 0;
  margin: 0;
  padding: 14px;
  position: absolute;
  top: 0;
  transition: all 100ms;
  width: 50px;

  & .icon-bar+.icon-bar {
    margin: 0;
  }

  .icons {
    position: relative;
    height: 100%;
    width: 100%;

    .icon-bar {
      background-color: white;
      position: absolute;
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

#navbar-dropdown {
  position: absolute;
  left: 0;
  bottom: 0;
  margin: 0;
  border: none;
  width: 180px;

  transition: all 100ms;

  ul {
    top: 0;
    left: 0;
    width: 100%;
    margin: 0;

    &>li>a {
      position: relative;
      color: white;
      padding: 0 10px;
      margin: 0;
      border-bottom: 1px solid rgba(255, 255, 255, 0.4);
      letter-spacing: 3px;
      line-height: 45px;

      &:hover {
        color: white;
        background-color: lighten(rgba(0, 0, 0, 0.4), 50%);
        border-radius: 0;
      }

      &:focus {
        color: black;
        background-color: darken(white, 10%);
        border-radius: 0;
      }

      &:focus:active {
        color: black;
        background-color: darken(white, 10%);
        border-radius: 0;
      }

      &.active {
        background-color: lighten(rgba(0, 0, 0, 0.4), 50%);
        border-radius: 0;

        &:hover {
          color: white;
          background-color: lighten(rgba(0, 0, 0, 0.4), 60%);
          border-radius: 0;
        }

        &:focus {
          color: white;
          background-color: lighten(rgba(0, 0, 0, 0.4), 50%);
          border-radius: 0;
        }
      }
    }
  }

  &.navbar-collapse {
    @media screen and (min-width: 768px) {
      display: none !important;
    }
  }
}

#navbar {
  max-height: 30px;
  min-height: 30px;
  position: relative;

  @media screen and (max-width: 767px) {
    display: none;
  }
}

.navbar {
  margin: 0 auto;
  border: none;
}

#navbar-content {
  width: 100%;

  ul {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    width: 100%;

    li>a {
      border-radius: 15px;
      color: white;
      flex: 1 1 auto;
      letter-spacing: 3px;
      line-height: 28px;
      padding: 2px 20px 0 20px;
      text-indent: 3px;

      &:hover,
      &:focus {
        color: white;
        background-color: transparent;
        border: 2px solid white;
        padding: 2px 18px 0px 18px;
        line-height: 24px;
      }

      &:focus:active {
        border: 2px solid darken(white, 10%);
      }

      &.active {
        background-color: white;
        border-radius: 15px;
        color: black;
        padding: 2px 20px 0px 20px;
        line-height: 28px;

        &:hover,
        &:focus,
        &:active {
          background-color: white;
          color: black;
          padding: 2px 18px 0px 18px;
          line-height: 24px;
        }
      }
    }
  }
}

.margin {
  height: 20px;

  @media screen and(min-width: 768px) {
    height: 50px;
  }
}

</style>
