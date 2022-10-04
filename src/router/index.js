import {createRouter, createWebHistory} from 'vue-router'
import Home from '../Pages/Home.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/manga',
        name: 'MangaBookList',
        component: () => import('../components/Manga')
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
