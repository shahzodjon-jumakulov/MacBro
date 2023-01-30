import { createRouter, createWebHistory } from 'vue-router'

import AppHome from "./pages/AppHome.vue"

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/base', component: AppHome },
        {
            path: '/base',
            redirect: { name: 'Home' }
        },
        {
            path: '/MacBro/',
            name: 'Home',
            component: Home
        },
        {
            path: '/MacBro/:queryParams(.*)',
            name: 'Result',
            component: Result,
            props: true
        }
    ],
    base: 'sub-folder',
});

export default router
