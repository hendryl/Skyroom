export function configRouter(router) {
  router.map({
    '/home': {
      component: require('./components/home/index.vue'),
    },
    '/star': {
      component: require('./components/star/index.vue'),
    },
    '/star/description': {
      component: require('./components/star/index.vue'),
    },
    '/star/composition': {
      component: require('./components/star/index.vue'),
    },
    '/star/mass': {
      component: require('./components/star/index.vue'),
    },
    '/star/temperature': {
      component: require('./components/star/index.vue'),
    },
    '/star/death': {
      component: require('./components/star/index.vue'),
    },
    '/constellation': {
      component: require('./components/constellation/index.vue'),
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
