<template>
    <div>
        <h3> Leads </h3>
        <table class="table table-hover">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">NOME</th>
                    <th scope="col">TELEFONE</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(d, index) in dados" :key="index">
                    <td>{{d.id}}</td>
                    <td>{{d.nome}}</td>
                    <td>{{d.telefone}}</td>
                    <td>
                        <!--<router-link :to="`/home/vendas/leads/${d.id}`" class="btn btn-sm btn-primary">-->
                        <router-link :to="{name: 'lead', params:{id: d.id}}" class="btn btn-sm btn-primary">
                            <i class="bi bi-pencil-square" style="cursor: pointer;"></i>
                        </router-link>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import ApiMixin from '@/mixins/ApiMixin.js'
/* eslint-disable */
export default {
    name: 'Leads',
    mixins: [ApiMixin],
    created(){
        this.getDadosApi('http://localhost:3000/leads')
    }
}
</script>