<template>
    <div id="projects">
        <div class="titleWrapper">
            <button @click="go('<')" :style="{'padding-right' : isMobile ? '4vw' : '.7vw'}"><img src="/img/arrow.svg" style="transform: rotate(180deg);"></button>
            <h1>{{ currentContent.title }}</h1>
            <button @click="go('>')" :style="{'padding-left' : isMobile ? '4vw' : '.7vw'}"><img src="/img/arrow.svg"></button>
        </div>
        <Splide id="slider" ref="splide" data-splide='{"gap":"5vw","arrows": false, "type": "loop"}' :key="key">
                <SplideSlide class="splideElement" v-for="project in currentProjects">
                    <p class="projectName">{{ project.name }}</p>
                    <img v-if="isMobile" :src="'/img/project/'+project.img+'.png'">
                    <p class="projectDescription">{{ project.description }}</p>
                    <div class="secondWrapper">
                        <div class="stackWrapper">
                            <p v-for="element in project.stack">{{ element }}</p>
                        </div>
                        <div class="imageWrapper">
                            <a :href="project.link" target="_blank"><button>{{ currentContent.button }}</button></a>
                            <img v-if="!isMobile" :src="'/img/project/'+project.img+'.png'">
                        </div>
                    </div>
                </SplideSlide>
        </Splide>
    </div>
</template>

<script setup>
    import '@splidejs/splide/dist/css/splide.min.css';
    import { ref, computed, onMounted, onUnmounted } from 'vue';

    const props = defineProps(["language"]);

    const splide = ref();
    
    const go = (direction) => {
        if (splide.value) {
            splide.value.go(direction);
        }
    };

    const isMobile = ref(window.innerWidth <= 700);

    const checkWidth = () => {
        isMobile.value = window.innerWidth <= 700;
    };

    onMounted(() => {
        window.addEventListener('resize', checkWidth);
    });

    onUnmounted(() => {
        window.removeEventListener('resize', checkWidth);
    });

    const content = {
        French: {
            title: "Projets",
            button: "En savoir plus"
        },
        English: {
            title: "Projects",
            button: "Learn more"
        }
    };

    const currentContent = computed(() => {
        return content[props.language] || content.French;
    });

    const projectsData = {
        French: [
            {
                name : "Réseaux de neurones artificiels",
                img : "IADetecteurDeNombre",
                description : "Un projet de création d'lA from scratch avec diverses implémentations dans du machine learning",
                stack : ["Python","IA","Math"],
                link : "https://pollamothe.fr/IA"
            },
            {
                name : "Simulateur de collisions",
                img : "PhysicSimulator",
                description : "Un similateur de collisions codé en Javascript",
                stack : ["JS","HTML/CSS","Math"],
                link : "https://pollamothe.github.io/Collision-Simulator/"
            },
            {
                name : "Laurelin",
                img : "Laurelin",
                description : "Un site de e-commerce pour une marque fictive",
                stack : ["PHP/Laravel","HTML/CSS","JS/VueJS","SQL","Équipe"],
                link : "https://github.com/PolLamothe/Laurelin"
            },
            {
                name : "Villa Loch Crenn",
                img : "LochCrenn",
                description : "Un site web vitrine pour la location saisonnière d’une maison",
                stack : ["HTML/CSS","JS","PHP"],
                link : "https://www.villalochcrenn.fr"
            },
            {
                name : "Instinct-If",
                img : "InstinctIf",
                description : "Un site de mini jeux",
                stack : ["HTML/CSS","JS"],
                link : "https://pollamothe.github.io/Instinct-If/"
            },
            {
                name : "Note If",
                img : "NoteIf",
                description : "Une extension pour navigateur web permettant aux étudiants de Nantes d’être avertis de publications de notes",
                stack : ["HTML/CSS","NodeJS","MongoDB","Équipe"],
                link : "https://github.com/PolLamothe/NoteIf"
            },
            {
                name : "Projet Quadtree",
                img : "Quadtree",
                description : "Un jeu vidéo codé en Golang utilisant la bibliothèque Ebiten",
                stack : ["Golang","Réseaux"],
                link : "https://github.com/PolLamothe/Quadtree"
            },
            {
                name : "Air-PC",
                img : "AIRPC",
                description : "Un site web vitrine victif de vente d'ordinateur",
                stack : ["HTML/CSS"],
                link : "https://pollamothe.github.io/AIR-PC/"
            },
            {
                name : "PolyUno",
                img : "PolyUno",
                description : "Un jeu Uno fonctionnant en réseau de façon décentralisé",
                stack : ["Python","Réseaux","Équipe"],
                link : "https://github.com/PolLamothe/PolyUno"
            }
        ],
        English: [
            {
                name : "Artificial Neural Networks",
                img : "IADetecteurDeNombre",
                description : "An AI creation project from scratch with various machine learning implementations",
                stack : ["Python","AI","Math"],
                link : "https://pollamothe.fr/IA"
            },
            {
                name : "Collision Simulator",
                img : "PhysicSimulator",
                description : "A collision simulator coded in Javascript",
                stack : ["JS","HTML/CSS","Math"],
                link : "https://pollamothe.github.io/Collision-Simulator/"
            },
            {
                name : "Laurelin",
                img : "Laurelin",
                description : "An e-commerce site for a fictional brand",
                stack : ["PHP/Laravel","HTML/CSS","JS/VueJS","SQL","Team"],
                link : "https://github.com/PolLamothe/Laurelin"
            },
            {
                name : "Villa Loch Crenn",
                img : "LochCrenn",
                description : "A showcase website for a seasonal house rental",
                stack : ["HTML/CSS","JS","PHP"],
                link : "https://www.villalochcrenn.fr"
            },
            {
                name : "Instinct-If",
                img : "InstinctIf",
                description : "A mini-games website",
                stack : ["HTML/CSS","JS"],
                link : "https://pollamothe.github.io/Instinct-If/"
            },
            {
                name : "Note If",
                img : "NoteIf",
                description : "A web browser extension allowing Nantes students to be notified of grade publications",
                stack : ["HTML/CSS","NodeJS","MongoDB","Team"],
                link : "https://github.com/PolLamothe/NoteIf"
            },
            {
                name : "Quadtree Project",
                img : "Quadtree",
                description : "A video game coded in Golang using the Ebiten library",
                stack : ["Golang","Network"],
                link : "https://github.com/PolLamothe/Quadtree"
            },
            {
                name : "Air-PC",
                img : "AIRPC",
                description : "A fictional showcase website for computer sales",
                stack : ["HTML/CSS"],
                link : "https://pollamothe.github.io/AIR-PC/"
            },
            {
                name : "PolyUno",
                img : "PolyUno",
                description : "A Uno game running on a decentralized network",
                stack : ["Python","Network","Team"],
                link : "https://github.com/PolLamothe/PolyUno"
            }
        ]
    };

    const currentProjects = computed(() => {
        return projectsData[props.language] || projectsData.French;
    });
</script>

<style scoped>
    .imageWrapper:hover img{
        filter: blur(5px);
    }
    .imageWrapper:hover button{
        visibility: visible;
    }
    .imageWrapper button{
        visibility: hidden;
        position: absolute;
        color: white;
        background-color: #FF8C6C;
        border: none;
        border-radius: 2vw;
        font-size: 18px;
        padding: .5vw;
        cursor: pointer;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        z-index: 1;
    }
    .imageWrapper{
        position: relative;
    }
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
        width: fit-content;
    }
    .stackWrapper p{
        color: white;
        background-color: #FF8C6C;
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
        transition: .3s;
    }
    .splideElement{
        background-color: rgba(0,0,0,.4);
        padding: 2vw;
        border-radius: 1vw;
        width: 50vw!important;
    }
    .projectDescription{
        color: gray;
        font-size: 18px;
        width: 100%;
    }
    .projectName{
        color: white;
        margin-top: 0px;
        font-size: 24px;
        width: fit-content;
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
    #projects{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 3vw;
    }
</style>

<style scoped>
    @media screen and (max-width: 700px) {
        .stackWrapper p{
            margin-top: 0px;
            margin-bottom: 0px;
            padding: 2vw;
        }
        .stackWrapper{
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            gap: 3vw;
        }
        .splideElement img{
            width: 100%;
        }
        .splideElement{
            border-radius: 5vw;
            padding: 5vw;
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 90vw!important;
        }
        #slider{
            width: 90vw;
        }
        .titleWrapper button {
            padding: 3vw;
        }
        .titleWrapper button img{
            width: 8vw;
        }
    }
</style>