
require('./bootstrap');

window.Vue = require('vue');

//to make SWITCHING view illusion
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

let Myheader = require('./components/Myheader');
let Myfooter = require('./components/Myfooter');

// SHOULD BE SWITCHED
let home = require('./components/Home');
let about = require('./components/About');

// COPY FROM DOCUMENTATION : VUE ROUTE PATH
const routes = [
    { path: '/home', component: home },
    { path: '/about', component: about }
];

const router = new VueRouter({
    mode: 'history', // removes # from the URL while switching between HOME & ABOUT
    routes // short for `routes: routes`
});
//

const app = new Vue({
    el: '#app',

    router,

    components:{Myheader, Myfooter}


});
