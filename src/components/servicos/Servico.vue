<template>
    <div class="card">
        <div class="card-header bg-primary text-white">{{ dados.servico }}</div>
        <div class="card-body">
            <p class="card-text">{{ dados.descricao }}</p>
        </div>
    </div>
</template>
<script>
import ApiMixin from '@/mixins/ApiMixin';

    /* eslint-disable */
    export default {
        name: 'Servico',
        mixins: [ApiMixin],
        created(){
            /*
                esse trecho faz um requisição ao json server e armazena as informações recebidas
                na variável "dados" que vem da "ApiMixin";
            */
            this.getDadosApi(`http://localhost:3000/servicos/${this.$route.params.id}`)
        },
        /* 
            Ao entrarmos na guia "serviços" e ao clicarmos em um dos seguros disponivíes só
            podemos acessar um deles, isso porque a requisição dos dados é feita no momento
            da criação do componente. Por questões de performance o vue não tenta recriar
            o componente, então o componente não será atualizado ao clicarmos em outro seguro.
            Para que isso aconteça é necessário utilizar a propriedade "watch" que observará
            quando houver alguma alteração na variavel "$route". Também podemos fixar esse problema
            com o "beforeRouteUpdate()";
        */
        beforeRouteUpdate(to,from,next){
            //to = $route para onde estamos indo;
            //from = $route de onde estamos vindo;
            //next = faz com que o fluxo de navegação continue;
            this.getDadosApi(`http://localhost:3000/servicos/${to.params.id}`)

        }
        /*
        watch: {
            $route(to){ // to = valor atual, from = valor antigo
                //previnido erro do componente servico tentar carregar uma pagina com indice undefined
                if(to.params.id != undefined)
                this.getDadosApi(`http://localhost:3000/servicos/${to.params.id}`)
            }
        }
        */
    }
</script>