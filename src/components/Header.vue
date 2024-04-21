<template>
    <header>
        <img src="/logo_blanc.png">
        <a :href="'#'+idTable[button]" v-for="button in allButton">{{ button }}</a>
    </header>
</template>

<script setup>
    let allButton = ["Accueil","A propos de moi","Compétences","Projets","Contact"]

    let idTable = {
        "Accueil":"Accueil",
        "A propos de moi":"me",
        "Compétences":"skill",
        "Projets":"projects",
        "Contact":"Contact"
    }

    $(window).scroll(function(e){
        if(window.scrollY == 0){
            $("header").addClass("fixedHeader")
            $("header").removeClass("moveHeader")
        }else{
            $("header").addClass("moveHeader")
            $("header").removeClass("fixedHeader")
        }
    })
</script>

<style scoped>
    img{
        height: 100%;
    }
    header{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 0px;
        position: sticky;
        margin-bottom: 2.5vh;
        top: 0;
        gap: 5vw;
        height: 10vh;
        transition-duration: 0.25s;
        z-index: 10;
    }
    .moveHeader{
        margin-top: 2.5vh;
        height: 7.5vh;
        padding-top: 0px;
        margin-bottom: 2.5vh;
        background-color: rgba(75,75,75,0.5);
    }

    a{
        color: white;
        font-family: Roboto;
        font-size: 20px;
        border-radius: 30px;
        padding: 10px;
        cursor: pointer;
        transition-duration: 1s;
        text-decoration: none;
        align-self: center;
    }

    a:hover{
        transform: scale(1.2);
        color: lightgray;
    }

    @media screen and (max-width: 700px) {
        header{
            display: none;
        }
    }
</style>