import { createApp } from 'vue'
import App from './App.vue'

// --- Inicio das rotas
import { createRouter,createWebHashHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'

const routes = [
    {
        path: '/home', //localhost:8080/home
        component: Home
    },
    {
        path: '/login', //localhost:8080/login
        component: Login
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

// --- Fim das rotas

const Vue = createApp(App)

Vue.use(router) // adicionando as configurações de rotas a instância do vue

Vue.mount('#app')
