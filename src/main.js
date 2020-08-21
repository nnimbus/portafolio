import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Left from './components/Left'
import Middle from './components/Middle'
import Right from './components/Right'
import Error404 from './components/Error404'

Vue.use(VueRouter);
Vue.use(BootstrapVue);

const routes = [
    { path: '/left', name: 'left', component: Left },
    { path: '/middle', name: 'middle', component: Middle },
    { path: '/', name: 'home', component: Middle },
    { path: '/right', name: 'right', component: Right },
    { path: '*', component: Error404 }
];
const router = new VueRouter({
    routes,
    mode: 'history'
});
Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')