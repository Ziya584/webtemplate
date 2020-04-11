import Vue from 'vue';
import Router from 'vue-router'
import Home from "../components/Home";
import About from "../components/About";

Vue.use(Router);


const router = new Router({
    mode: 'history',
    base: '/',

    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/about',
            name: 'About',
            component: About
        }
    ],
});

export default router;