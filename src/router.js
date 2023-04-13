// --- Inicando as rotas com vue router

// 1) Fazer as importações dos componentes e metodos do router
import {createRouter, createWebHashHistory} from 'vue-router'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import Site from '@/views/Site.vue'
import Vendas from '@/components/vendas/Vendas.vue'
import Servicos from '@/components/servicos/Servicos.vue'
import Leads from '@/components/vendas/Leads.vue'
import Lead from '@/components/vendas/Lead.vue'
import Contratos from '@/components/vendas/Contratos.vue'
import Dashboard from '@/components/dashboard/Dashboard.vue'

// 2) Definir um array de rotas(objetos) contendo o caminho e o nome do componente
const routes = [
    {path: '/', component: Site},
    {path: '/home', component: Home, children: [
            { path: 'dashboard', component: Dashboard },
            { path: 'vendas', component: Vendas,
                children: [
                    {path: 'leads', component: Leads, name:'leads'},
                    {path: 'leads/:id', component: Lead, name: 'lead'},
                    {path: 'contratos', component: Contratos},
                ]
            },
            { path: 'servicos', component: Servicos },
        ]
    },
    {path: '/login', component: Login},
]

// 3) definir uma instancia de router
const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

export default router