<template>
    <div id="activitiesWrapper">
        <div id="activitesDeco">

        </div>
        <template v-for="(card,index) in Object.keys(cards)" :id="'card'+card" class="card">
            <div class="card":id="'card'+card" :style="{'grid-column': index+1}">

            </div>
            <img :src="'/svg/'+cards[card].icon+'.svg'" :style="[{'grid-column': index+1}, cards[card].style]">
            <div class="activitesNameWrapper" :style="{'grid-column': index+1}">
                <div class="activitesNameDeco"></div>
                <p class="activitesName">{{ cards[card].name }}</p>
                <div class="activitesNameDeco"></div>
            </div>
            <p class="activitiesPresentation" :style="{'grid-column': index+1}">{{ cards[card].presentation }}</p>
        </template>
    </div>
</template>

<script setup>
    import { ref } from "vue"

    const emit = defineEmits(['language'])

    const cards = ref({
        "1":{
            icon : "developer",
            name : "Développeur",
            presentation : "Je crée des applications modernes et efficaces, en explorant différentes technologies pour transformer des idées en solutions utiles et soignées."
        },
        "2":{
            icon : "diploma",
            style : {"filter" : "invert(100%)"},
            name : "Étudiant",
            presentation : "Étudiant en cycle ingénieur, je développe une approche rigoureuse de l’informatique et j’apprends à concevoir des solutions fiables et innovantes."
        },
        "3":{
            icon : "data_dashboard",
            style : {"filter" : "invert(100%)"},
            name : "Intelligence Artificielle",
            presentation : "Passionné d’IA, j’expérimente avec des modèles, réseaux de neurones et projets de vision pour comprendre et créer des systèmes intelligents."
        }
    })
</script>

<style scoped>
    #activitiesWrapper img{
        grid-row: 1;
        width: 3vw;
    }
    #activitesDeco{
        background-color: rgba(20,20,20,.5);
        backdrop-filter: blur(15px);
        width: 110%;;
        position: absolute;
        z-index: 0;
        top: 0;
        bottom: 0;
        border-radius: 25px;
        grid-row: 3/4;
    }
    .activitiesPresentation{
        color: white;
        z-index: 2;
        margin-top: 2vh;
        text-align: justify;
        grid-row: 3;
        width: 90%;
    }
    .activitesNameWrapper{
        display: flex;
        align-items: center;
        gap: .5vw;
        grid-row: 2;
        width: max-content;
    }
    .activitesNameDeco{
        width: 1.5vw;
        height: 3px;
        background: rgba(0,0,0,.5);
    }
    .activitesName{
        font-family: "Climate Crisis", sans-serif;
        color: rgba(0,0,0,.5);
        margin: 0px;
    }
    .imgWrapper{
        width: 1.3vw;
        height: 1.3vw;
        border-radius: 50%;
        background: rgba(0,0,0,.5);
        padding: .3vw;
        margin-top: 2vh;
    }
    #activitiesWrapper{
        margin-left: 50%;
        transform: translateX(-50%);
        width: max-content;
        display: grid;  
        gap: 1vw;
        margin-top: 5vw;
        position: relative;
        height: fit-content;
        place-items: center;
        grid-template-columns: repeat(3, minmax(0, 20vw));
    }
    .card{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-bottom: 1vh;
        border-radius: 1vw;
        grid-row: 1/5;
        grid-column: 1;
        height: 100%;
        width: 100%;
        z-index: -1;
    }
    #card3{
        background-color: #FF6E7B;
    }
    #card2{
        background-color: #FF7C77;
    }
    #card1{
        background: rgba(255, 140, 108, 0.75);
    }
</style>