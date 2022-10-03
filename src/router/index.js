import {createRouter, createWebHistory} from 'vue-router'
import Home from '../Pages/Home.vue'
import Manga from '@/components/Manga'
import Chapter from '@/components/Chapter'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/manga',
        name: 'MangaBookList',
        component: Manga
    },
    {
        path: '/manga',
        name: 'Chapter',
        component: Chapter
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
