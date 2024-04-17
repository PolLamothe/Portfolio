import { createApp } from 'vue'
import App from "./App.vue"
import * as VueRouter from 'vue-router'
import VueSplide from '@splidejs/vue-splide';

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes : [
        {
            path : '/accueil',
            name : 'Accueil',
            component : App
        }
    ]
})


const app = createApp(App)
app.use(VueSplide)
app.use(router).mount("#app")
app.mount('app')