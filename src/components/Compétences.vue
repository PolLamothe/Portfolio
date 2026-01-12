<template>
    <div id="compétences">
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
            <div id="circle1"></div>
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
    #circle1{
        position: absolute;
        border-radius: 50%;
        display: inline-block;
        background: radial-gradient(62.94% 62.94% at 18.75% 47.07%, rgba(255, 255, 255, 0.23) 0%, rgba(255, 255, 255, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;    
        width: 50vw;
        height: 50vw;
        top: 50%;
        transform: rotate(120deg);
        z-index: -1;
    }
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