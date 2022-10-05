import {createRouter, createWebHistory} from 'vue-router'
const routes = [
    {
        path: '/',
        name: 'MangaBookList',
        component: () => import('../components/Manga')
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
