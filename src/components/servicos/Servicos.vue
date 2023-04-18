<template>
    <div>
       <h5>Serviços</h5>
       <hr>
       <div>
            <div class="row">
                <div class="col mb-2" v-for="(d, index) in dados" :key="index">
                    <div class="card" style="width:12rem;">
                        <img class="card-img-top" :src="`/img/${d.icone}`">
                        <div class="card-body text-center">
                            <!-- link para o componente Servico.vue: 
                            No arquivo router.js tem uma rota filha de serviços que tem o apelido
                            servico que direciona para o servico na posição id (1,2,3) -->
                            <router-link :to="{name: 'servico', params: {id: d.id}}">
                                <p class="card-text">{{ d.servico }}</p>
                            </router-link>
                            
                        </div>
                    </div>
                </div>
            </div>
       </div>

       <!-- Multiplos router-view -->
       <router-view class="mt-3"></router-view><!-- Exibição dos informações de cada serviço -->
       <router-view name="opcoes"></router-view>
       <router-view name="indicadores"></router-view>
    </div>
</template>

<script>
import ApiMixin from '@/mixins/ApiMixin.js'
/* eslint-disable */
export default {
    name: 'Servicos',
    mixins: [ApiMixin],
    created(){
        this.getDadosApi('http://localhost:3000/servicos')
    }
}
</script>