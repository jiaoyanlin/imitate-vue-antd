import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@views/home/index';
import NoFound from '@views/noFound';

Vue.use(VueRouter);

const menuRoutes = [{
    path: '/',
    name: 'home',
    component: Home,
}, {
    path: '*',
    name: 'noFound',
    component: NoFound
}];

const router = new VueRouter({
    // mode: 'history',  //使用history防止url中出现#
    routes: menuRoutes
});

export default router;
