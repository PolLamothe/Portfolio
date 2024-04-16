<template>
    <div class="wrapperLanding">
        <div id="bigTextDiv">
            <h1 id="name">Pol Lamothe</h1>
            <h2 id="job">Dévelopeur</h2>
        </div>
        <img src="../assets/img/hero-devices.svg" id="img1">
    </div>
</template>

<script setup>
</script>

<style scoped>
    .wrapperLanding{
        height: 90vh;
        margin-top: 0px;
    }
    #bigTextDiv{
        position: relative;
        padding-top: 30vh;
        padding-left: 50vw;
    }
    #name{  
        color: white;
        font-family: Roboto;
        font-size: 55px;
        margin: 0px;
    }
    #job{
        background : -webkit-linear-gradient(red,blue);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-size: 50px;
        font-family: "Jersey 20";
    }
    #img1{
        width: 35vw;
        position: absolute;
        bottom: 0px;
        margin-left: 10vw;
    }
</style>