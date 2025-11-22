import { createApp } from 'vue'
import App from "./App.vue"
import * as VueRouter from 'vue-router'
import VueSplide from '@splidejs/vue-splide';
import Main from "./Main.vue"

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory("/portfolio/"),
    routes : [
        {
            path : '/',
            name : 'Accueil',
            component : App
        }
    ]
})


const app = createApp(Main)
app.use(VueSplide)
app.use(router)
app.mount('#app')