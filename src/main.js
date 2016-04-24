import Vue from 'vue';
import VueRouter from 'vue-router';
import { configRouter } from './route-config';

import App from './App';

Vue.use(VueRouter);

const router = new VueRouter();
configRouter(router);
router.start(App, '#app');

window.router = router;
