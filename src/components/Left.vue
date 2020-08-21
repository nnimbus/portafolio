<template>
  <div class="container-fluid" id="primero"> 
    <div class="container" id="trabajo">        
        <a class="" href=""><img src="../assets/elbaul1.png" alt="" class="img-thumbnail" id="img1"></a>
        <a class="" href=""><img src="../assets/elbaul2.png" alt="" class="img-thumbnail" id="img2"></a>
    </div>     
  </div>
</template>

<script>

export default {
    name: "Left"
}
</script>

<style scoped>
#init{
    background-image: linear-gradient(to top,rgba(100, 148, 237, 0.253), rgba(100, 148, 237, 0.055));
    height: 1000px;
}
#trabajo{
    margin-top: 20px;
    position: relative;
}
#img1{
    position:absolute;
    width: 1000px;
    top: 120px;
    left: -300px;
    z-index: 1;
}
#img2{
    position:absolute;
    width: 1000px;
    top: 350px;
    left: 300px;
    z-index: 2;
}

</style>