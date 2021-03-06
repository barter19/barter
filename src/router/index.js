/**
 * Router
 *
 * Further Reading: https://router.vuejs.org/en/
 */

import Vue from 'vue';
import Router from 'vue-router';
import routes from './routes';
// import VueMaterial from 'vue-material'
// import 'vue-material/dist/vue-material.min.css'
// import 'vue-material/dist/theme/default.css'

// Vue.use(VueMaterial)


Vue.use(Router);

export default new Router({
  routes,
});
