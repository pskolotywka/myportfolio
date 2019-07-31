import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import login from "./components/login.vue"
import addwork from "./components/addwork.vue"
import about from "./components/about.vue"
import reviews from "./components/addreviews.vue"

const routes = [
    {
        path: '/login',
        component: login
    },
    {
        path: '/work',
        component: addwork
    },
    {
        path: '/',
        component: about
    },
    {
        path: '/reviews',
        component: reviews
    },
    
]

export default new VueRouter({ routes });