import { createRouter, createWebHashHistory } from 'vue-router';
import LoginPage from './components/LoginPage.vue'
import GalleryPage from './components/GalleryPage.vue'

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: '/main', component: GalleryPage},
        {path: '/login', component: LoginPage }
    ]
})



