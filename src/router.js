import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home';
import About from './views/About';
import Menu from './views/Menu';
import Signin from './views/Signin';
import Join from './views/Join';
import store from '@/store';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/About',
            name: 'About',
            component: About,
            meta: {
                authRequired: true // route 가드
            }
        },
        {
            path: '/Menu',
            name: 'Menu',
            component: Menu
        },
        {
            path: '/Signin',
            name: 'Signin',
            component: Signin
        },
        {
            path: '/Join',
            name: 'Join',
            component: Join
        }
    ]
});

router.beforeEach((to, from, next) => { 
    // 네이게이션 가드
    if (to.matched.some(record => record.meta.authRequired)) {
        if (!store.state.isAuthenticated) {
            next({
                path: '/Signin'
            });
        } else {
            next();
        }
    } else {
        next();
    }
});

// eslint-disable-next-line prettier/prettier
export default router;