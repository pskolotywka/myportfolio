import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import login from "./components/login.vue"

const routes = [
    {
        path: '/login',
        components: login
    }
];

export default new VueRouter({ routes, mode: 'history' });