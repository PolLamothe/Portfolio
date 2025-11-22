<template>
    <header>
        <a :href="'#'+idTable[button]" v-for="button in allButton[props.language]" :id="currentSection == idTable[button] ? 'active' : ''">{{ button }}</a>
    </header>
</template>

<script setup>
    import { ref } from "vue"

    const props = defineProps(["language"])

    let allButton = {
        "French":["Accueil","Études/Expériences","Compétences","Projets"],
        "English":["Home","Education/Experiences","Skills","Projects"]
    }

    let idTable = {
        "Accueil":"Accueil",
        "Études/Expériences":"studyExperiences",
        "Compétences":"skill",
        "Projets":"projects",
        "Home":"Accueil",
        "Études/Expériences":"studyExperiences",
        "Skills":"skill",
        "Projects":"projects",
    }

    const currentSection = ref(idTable[allButton[props.language][0]]) 

</script>

<style scoped>
    img{
        height: 100%;
    }
    header{
        display: flex;
        justify-content: center;
        align-items: center;
        position: sticky;
        margin-bottom: 2.5vh;
        top: 4vh;
        width: fit-content;
        margin-left: 50%;
        transform: translateX(-50%);
        background-color: rgba(0,0,0,.4);
        height: fit-content;
        z-index: 10;
        border-radius: 40px;
        padding: 10px;
        gap : 1vw;
    }

    a{
        color: lightgray;
        font-family: Roboto;
        font-size: 20px;
        border-radius: 30px;
        padding: 10px;
        cursor: pointer;
        transition-duration: 1s;
        text-decoration: none;
        align-self: center;
        padding-left: 1.5vw;
        padding-right: 1.5vw;
        padding-top: 1vh;
        padding-bottom: 1vh;
    }

    #active{
        background-color: rgba(255,255,255,.2);
        color: white;
    }

    @media screen and (max-width: 700px) {
        header{
            display: none;
        }
    }
</style>