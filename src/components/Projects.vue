<template>
<div id="wrapper">
    <div class="titleWrapper">
        <button @click="go('<')" style="padding-right: .7vw;"><img src="/img/arrow.svg" style="transform: rotate(180deg);"></button>
        <h1>Projets</h1>
        <button @click="go('>')" style="padding-left: .7vw;"><img src="/img/arrow.svg"></button>
    </div>
    <Splide id="slider" ref="splide" data-splide='{"fixedWidth":"fit-content","gap":"5vw"}' :key="key">
            <SplideSlide class="splideElement" v-for="project in projects">
                <p class="projectName">{{ project.name }}</p>
                <p class="projectDescription">{{ project.description }}</p>
                <div class="secondWrapper">
                    <div class="stackWrapper">
                        <p v-for="element in project.stack">{{ element }}</p>
                    </div>
                    <img :src="'/img/project/'+project.img+'.png'">
                </div>
            </SplideSlide>
    </Splide>
</div>
</template>

<script setup>
    import '@splidejs/splide/dist/css/splide.min.css';
    import { ref } from 'vue';

    const splide = ref();
    
    const go = (direction) => {
        if (splide.value) {
            splide.value.go(direction);
        }
    };

    const projects = [
        {
            name : "Réseaux de neurones artificiels",
            img : "IADetecteurDeNombre",
            description : "Un projet de création d'lA from scratch avec diverses implémentations dans du machine learning",
            stack : ["Python","IA","Math"]
        },
        {
            name : "Simulateur de collisions",
            img : "PhysicSimulator",
            description : "Un similateur de collisions codé en Javascript",
            stack : ["JS","HTML/CSS","Math"]
        },
        {
            name : "Laurelin",
            img : "Laurelin",
            description : "Un site de e-commerce pour une marque fictive",
            stack : ["PHP/Laravel","HTML/CSS","JS/VueJS","SQL","Équipe"]
        },
        {
            name : "Villa Loch Crenn",
            img : "LochCrenn",
            description : "Un site web vitrine pour la location saisonnière d’une maison",
            stack : ["HTML/CSS","JS","PHP"]
        },
        {
            name : "Instinct-If",
            img : "InstinctIf",
            description : "Un site de mini jeux",
            stack : ["HTML/CSS","JS"]
        },
        {
            name : "Note If",
            img : "NoteIf",
            description : "Une extension pour navigateur web permettant aux étudiants de Nantes d’être avertis de publications de notes",
            stack : ["HTML/CSS","NodeJS","MongoDB","Équipe"]
        },
        {
            name : "Projet Quadtree",
            img : "Quadtree",
            description : "Un jeu vidéo codé en Golang utilisant la bibliothèque Ebiten",
            stack : ["Golang","Réseaux"]
        },
        {
            name : "Air-PC",
            img : "AIRPC",
            description : "Un site web vitrine victif de vente d'ordinateur",
            stack : ["HTML/CSS"]
        },
        {
            name : "PolyUno",
            img : "PolyUno",
            description : "Un jeu Uno fonctionnant en réseau de façon décentralisé",
            stack : ["Python","Réseaux","Équipe"]
        }
    ]
</script>

<style scoped>
    .titleWrapper button img{
        filter: invert(100%);
        width: 1vw;
    }
    .titleWrapper button{
        background: rgba(0,0,0,.5);
        height: fit-content;
        padding: .5vw;
        border-radius: 50%;
        border: none;
        cursor: pointer;
    }
    .titleWrapper{
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 2vw;
    }
    .secondWrapper{
        display: flex;
        flex-direction: row;
        gap: 5vw;
    }
    .stackWrapper p{
        color: white;
        background-color: #FF8C6C;
        font-family: Roboto;
        padding: .5vw;
        width: fit-content;
        border-radius: 1vw;
        padding-left: 1vw;
        padding-right: 1vw
    }
    .splideElement img{
        width: 30vw;
        aspect-ratio: 16/9;
        object-fit: cover;
    }
    .splideElement{
        background-color: rgba(0,0,0,.4);
        padding: 2vw;
        border-radius: 1vw;
        height: fit-content;
        width: fit-content;
    }
    .projectDescription{
        font-family: Roboto;
        color: gray;
        font-size: 18px;
    }
    .projectName{
        font-family: Roboto;
        color: white;
        margin-top: 0px;
        font-size: 24px;
    }
    h1{
         color: #FFE2AA;
        font-family: "Climate Crisis", sans-serif;
        text-align: center;
        font-size: 40px;
    }
    #slider{
        width: 80vw;
        margin-top: 3vw;
    }
    #wrapper{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 3vw;
    }
</style>