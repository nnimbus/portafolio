<template>
    <div class="container-fluid bg-light p-4">
        <span class=""><h2 class="text-dark">Nestor Vega | Desarrollador Web</h2></span>
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