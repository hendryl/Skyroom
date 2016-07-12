/* global $ */

import Vue from 'vue';
import VueRouter from 'vue-router';

import { configRouter } from './route-config';
import App from './App.vue';

const isMobile = {
  android: () => navigator.userAgent.match(/Android/i),
  blackBerry: () => navigator.userAgent.match(/BlackBerry/i),
  iOS: () => navigator.userAgent.match(/iPhone|iPad|iPod/i),
  opera: () => navigator.userAgent.match(/Opera Mini/i),
  windows: () => navigator.userAgent.match(/IEMobile/i),
  any: () => (
    isMobile.android()
    || isMobile.blackBerry()
    || isMobile.iOS()
    || isMobile.opera()
    || isMobile.windows()
  ),
};

Vue.use(VueRouter);

const router = new VueRouter();

configRouter(router);

router.beforeEach((transition) => {
  $('.navbar-header').removeClass('active');
  transition.next();
});

router.start(App, '#app');

window.router = router;

if (!isMobile.any()) {
  $(window).stellar();
}
