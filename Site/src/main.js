import { createApp } from 'vue'
import App from "./App.vue"
import Blog from "./Blog.vue"
import Main from "./Main.vue"
import Post from "./Post.vue"
import * as VueRouter from 'vue-router'
import VueSplide from '@splidejs/vue-splide';

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes : [
        {
            path : '/',
            name : 'Accueil',
            component : App
        },
        {
            path : '/blog',
            name : 'Blog',
            component : Blog
        },
        {
            path : "/post/:ID",
            name : "Post",
            component : Post
        }
    ]
})


const app = createApp(Main)
app.use(VueSplide)
app.use(router)
app.mount('#app')