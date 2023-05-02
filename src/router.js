// --- Inicando as rotas com vue router

// 1) Fazer as importações dos componentes e metodos do router
import {createRouter, createWebHashHistory} from 'vue-router'

import Contratos from '@/components/vendas/Contratos.vue'
import Dashboard from '@/components/dashboard/Dashboard.vue'
import DashboardRodape from '@/components/dashboard/DashboardRodape.vue'
import Home from '@/views/Home.vue'
import Indicadores from '@/components/servicos/Indicadores.vue'
import Lead from '@/components/vendas/Lead.vue'
import Leads from '@/components/vendas/Leads.vue'
import Login from '@/views/Login.vue'
import Opcoes from '@/components/servicos/Opcoes.vue'
import PaginaNaoEncontrada from '@/views/PaginaNaoEncontrada.vue'
import Servico from '@/components/servicos/Servico.vue'
import Servicos from '@/components/servicos/Servicos.vue'
import Site from '@/views/Site.vue'
import Vendas from '@/components/vendas/Vendas.vue'
import VendasPadrao from '@/components/vendas/VendasPadrao.vue'


// 2) Definir um array de rotas(objetos) contendo o caminho e o nome do componente
const routes = [
    {path: '/', component: Site},
    {path: '/home', component: Home, children:
        //filhos de home
        [
            { path: 'vendas', component: Vendas, children: 
                // filhos de vendas
                [
                    {path: 'leads', component: Leads, name:'leads'},
                    {path: 'leads/:id', component: Lead, name: 'lead'},
                    {path: 'contratos', component: Contratos},
                    {path: '', component: VendasPadrao},
                ]    
                // fim dos filhos de vendas
            },
            { path: 'servicos', component: Servicos, name: 'servicos', children: 
                // filhos de serviços
                [
                    {path:':id', name: 'servico', components:
                        { 
                            default: Servico,
                            opcoes: Opcoes,
                            indicadores: Indicadores
                        } 
                    },
                ]
                // fim dos filhos de serviço
            },
            { path: 'dashboard', components: 
                {
                    default: Dashboard,
                    rodape: DashboardRodape,
                } 
            },
        ]
        //Fim dos filhos de home
    },
    // Rota coringa para capturar um caminho que não foi especificado na nossa aplicação
    {path: '/login', component: Login},
    {path: '/:catcAll(.*)*', component: PaginaNaoEncontrada }
]

// 3) definir uma instancia de router
const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

export default router