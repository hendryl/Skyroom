export function configRouter(router) {
  router.map({
    '/home': {
      component: require('./components/home/index.vue'),
    },
    '/star': {
      component: require('./components/star/index.vue'),
    },
    '/star/description': {
      component: require('./components/star/description.vue'),
    },
    '/star/mass': {
      component: require('./components/star/mass.vue'),
    },
    '/star/temperature': {
      component: require('./components/star/temperature.vue'),
    },
    '/star/death': {
      component: require('./components/star/death.vue'),
    },
    '/constellation': {
      component: require('./components/constellation/index.vue'),
    },
    '/constellation/description': {
      component: require('./components/constellation/description.vue'),
    },
    '/constellation/skymap': {
      component: require('./components/constellation/skymap.vue'),
    },
    '/about': {
      component: require('./components/about/index.vue'),
    },
    '/contact': {
      component: require('./components/contact/index.vue'),
    },
  });

  router.redirect({
    '*': '/home',
  });
}
