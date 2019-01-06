import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home';
import About from './views/About';
import Menu from './views/Menu';
import Signin from './views/Signin';
import Join from './views/Join';

Vue.use(Router);

export default new Router({
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
            component: About
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
