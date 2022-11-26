import { createRouter, createWebHistory } from 'vue-router'

import AppHome from "./pages/AppHome.vue"

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: AppHome },
        {
            path: '/',
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
});

export default router