export function configRouter(router) {
  router.map({
    '*': {
      component: require('./components/home/index.vue'),
    },
    '/': {
      component: require('./components/home/index.vue'),
    },
    '/star': {
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
}
