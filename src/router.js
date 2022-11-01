import { createRouter, createWebHistory } from 'vue-router'

import AppHome from "./pages/AppHome.vue"

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: AppHome },
    ],
});

export default router