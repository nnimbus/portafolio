<template>
    <div class="container-fluid">
        <span class=""><h2 class="text-dark pt-5">Nestor Vega | Desarrollador Web</h2></span>
        <div class="btn-group">
            <router-link to="/left"><button type="button" class="btn btn-info">Left</button></router-link>
            <router-link to="/middle"><button type="button" class="btn btn-info">Middle</button></router-link>
            <router-link to="/right"><button type="button" class="btn btn-info">Right</button></router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HeaderC',
    methods:{
        cambiarPagina(ruta){
            this.$router.push(ruta)
            console.log('METODO EJECUTADO')
        }
    }
}
</script>

<style>

</style>