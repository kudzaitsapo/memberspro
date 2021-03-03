import Vue from 'vue';
import VueRouter from 'vue-router';
import NProgress from 'nprogress';

// Components
import Members from '../components/Members';
import MemberProfile from '../components/MemberProfile';

Vue.use(VueRouter);

const routes = [
    { path: '/', component: Members, name: 'Home' },
    { path: '/member/:id', component: MemberProfile, name: 'Profile' }
];

const router = new VueRouter({
    routes // short for `routes: routes`
});

router.beforeResolve((to, from, next) => {
    if (to.name) {
        NProgress.start();
    }
    next();
  });
  
  router.afterEach((to, from) => {
    console.log(to);
    console.log(from);
    NProgress.done();
  });

export default router;