<template>
    <h1>Mes Compétences</h1>
    <div id="globalWrapper">
        <div v-for="categorie in Object.keys(skills)" class="globalWrapper">
        <div style="display: flex;flex-direction: row;align-items: center;gap: 1vw;">
            <p class="categorieTitle">{{ categorie }}</p>
            <div class="titleDecoration"></div>
        </div>  
        <div class="categorieWrapper">
            <div class="elementDecoration"></div>
            <div v-for="element in skills[categorie]" class="elementWrapper">
                <img :src="'/img/tech/'+element+'.png'">
                <p>{{ element }}</p>
            </div>
        </div>
    </div>
    </div>
</template>
<script setup>
const skills = {
    "Langages":["Javascript","Python","Kotlin","Java","SQL","Golang","PHP"],
    "Backend" : ["NodeJS","MongoDB","Laravel","Docker","SpringBoot","Jenkins"],
    "Frontend" : ["VueJS","React"],
    "Programmation" : ["MVC","Design Pattern","OOP","Numpy"]
}
</script>
<style scoped>
    #globalWrapper{
        width: fit-content;
        margin-left: 50vw;
        transform: translateX(-50%);
    }
    .titleDecoration{
        width: 32px;
        height: 4px;
        background-color: #FFE2AA;
    }
    h1{
        color: #FFE2AA;
        font-family: "Climate Crisis", sans-serif;
        text-align: center;
        font-size: 40px;
    }
    .categorieTitle{
        font-size: 24px;
        color: #FFE2AA;
        font-family: Roboto;
    }
    .elementWrapper img{
        width: 4vw;
        height: 4vw;
        object-fit: contain;
        background-color: white;
        padding: .5vw;
        border-radius: 50%;
    }
    .elementWrapper p{
        margin-bottom: 2vw;
    }
    .elementWrapper{
        color: white;
        font-family: Roboto;
        text-align: center;
        backdrop-filter: blur(50px);
        background: rgba(0,0,0,.3);
        width: fit-content;
        border-radius: 4vw;
        padding: 10px;
        height: fit-content;
        display: flex;
        flex-direction: column;
        gap: 1vw;
        font-size: 20px;
    }
    .elementDecoration{
        background-color: #FF7C77;
        position: absolute;
        width: 105%;
        height: 50%;
        top: 25%;
        left: -2.5%;
        border-radius: 10vw;
    }
    .categorieWrapper{
        display: flex;
        flex-direction: row;
        width: fit-content;
        gap: .5vw;
        position: relative;
    }
</style>