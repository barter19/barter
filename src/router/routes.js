/**
 * Routes
 *
 * This maps our view components to routes and lets vue-router know where to
 * render them.
 *
 * Further Reading: https://router.vuejs.org/en/api/options.html#routes
 */

// Lazy Load Routes
const RegistrationPage = () => import('@/views/RegistrationPage');

export default [
  {
    path: '/registration',
    name: 'RegistrationPage',
    component: RegistrationPage,
  },
];
