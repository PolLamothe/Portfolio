<template>
    <div id="activitiesWrapper">
        <div id="activitesDeco">

        </div>
        <div v-for="card in Object.keys(cards)" :id="'card'+card" class="card">
            <div class="imgWrapper">
                <img :src="'/svg/'+cards[card].icon+'.svg'" :style="cards[card].style">
            </div>
            <div class="activitesNameWrapper">
                <div class="activitesNameDeco"></div>
                <p class="activitesName">{{ cards[card].name }}</p>
                <div class="activitesNameDeco"></div>
            </div>
            <p class="activitiesPresentation">COUCOU</p>
        </div>
    </div>
</template>

<script setup>
    import { ref } from "vue"

    const emit = defineEmits(['language'])

    const cards = ref({
        "1":{
            icon : "developer",
            name : "Développeur"
        },
        "2":{
            icon : "diploma",
            style : "filter : invert(100%)",
            name : "Étudiant"
        },
        "3":{
            icon : "data_dashboard",
            style : "filter : invert(100%)",
            name : "Intelligence Artificielle"
        }
    })
</script>

<style scoped>
    #activitesDeco{
        background-color: rgba(20,20,20,.5);
        backdrop-filter: blur(6.85px);
        width: 110%;
        height: 50%;
        position: absolute;
        z-index: 1;
        margin-left: 50%;
        transform: translateX(-50%);
        bottom: 1vh;
        border-radius: 25px;
    }
    .activitiesPresentation{
        color: white;
        font-family: roboto;
        z-index: 2;
        margin-top: 2vh;
    }
    .activitesNameWrapper{
        display: flex;
        align-items: center;
        gap: .5vw;
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
    .card img{
        width: 100%;
        height: 100%;
    }
    #activitiesWrapper{
        margin-left: 50%;
        transform: translateX(-50%);
        width: fit-content;
        display: flex;
        gap: 1vw;
        margin-top: 20vh;
        height: fit-content;
        position: relative;
    }
    .card{
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 1vw;
        width: 16vw;
        height: 19vh;
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