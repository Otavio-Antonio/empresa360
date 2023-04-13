<template>
    <div>
        <h5 class="mt-5">{{dados.nome}}</h5>
        <hr>
        <div class="mb-3 row">
            <label class="col-sm-2 col-form-label">ID</label>
            <div class="col-sm-10">
                <input type="text" readonly class="form-control-plaintext" :value="dados.id">
            </div>
        </div>
        <div class="mb-3 row">
            <label class="col-sm-2 col-form-label">Nome</label>
            <div class="col-sm-10">
                <input type="text" readonly class="form-control-plaintext" :value="dados.nome">
            </div>
        </div>
        <div class="mb-3 row">
            <label class="col-sm-2 col-form-label">Telefone</label>
            <div class="col-sm-10">
                <input type="text" readonly class="form-control-plaintext" :value="dados.telefone">
            </div>
        </div>

        <div class="col-auto">
            <button type="button" class="btn btn-outline-secondary btn-space" @click="$router.push({name:'leads'})">Voltar</button>
            <button type="button" class="btn btn-outline-primary">Atualizar</button>
        </div>

    </div>
</template>

<script>
/* eslint-disable */
import ApiMixin from '@/mixins/ApiMixin.js'
export default {
    name: 'Lead',
    mixins: [ApiMixin],
    created(){
        this.getDadosApi(`http://localhost:3000/leads/${this.$route.params.id}`)
    }
}
</script>
<style scoped>
.btn-space{
    margin-right: 5px;
}
</style>