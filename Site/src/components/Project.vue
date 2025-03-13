<template>
    <div class="wrapper">
        <h1>{{ text["title"][props.language] }}</h1>
        <div id="filterDiv" class="filterdiv">
            <button v-for="categorie in categories[props.language]" :class="{currentCategorie : categorie == currentCategorie}" :id="'categorie_'+categorie" @click="changeCategorie(categorie)">{{ categorie }}</button>
        </div>
        <Splide id="slider" aria-label="My Favorite Images"  data-splide='{"fixedWidth":"fit-content","gap":"5vw"}' :key="key">
            <SplideSlide v-for="project in categoriesContent[currentCategorie]" class="slideDiv">
                <img src="/img/medal.png" id="yellowStar" v-if="project == projectsList[0]">
                <img :src="'/img/project/'+project+'.png'" class="slideImg">
                <div class="slidePictureButton">
                    <a v-for="link in Object.keys(projectsLink[project])" class="slideButton" :href="projectsLink[project][link]" target="_blank">{{ projectsButton[project][props.language] }}</a>
                </div>
                <h1>{{ projectTitle[props.language][project] }}</h1>
                <p>{{ projectText[props.language][project] }}</p>
                <div class="techTagDiv">
                    <p v-for="tech in projectTech[props.language][project]">{{ tech }}</p>
                </div>
            </SplideSlide>
        </Splide>
    </div>
</template>

<script setup>
    import '@splidejs/splide/dist/css/splide.min.css';
    import {ref} from "vue"

    const props = defineProps({"language":String})

    const text = {
        "title":{
            "French":"Mes projets",
            "English":"My projects"
        }
    }

    var projectsList = ["IADetecteurDeNombre","PhysicSimulator","Laurelin","LochCrenn","InstinctIf","NoteIf","Quadtree","AIRPC","PolyUno"]

    var categories = {
        "French":["Tous","Site Web","Autres"],
        "English":["All","Website","Others"]
    }

    var currentCategorie = ref(categories[props.language][0])

    var categoriesContent = {}

    Object.keys(categories).forEach(element => {
        categoriesContent[categories[element][0]] = projectsList
        categoriesContent[categories[element][1]] = ["PhysicSimulator","Laurelin","LochCrenn","InstinctIf","AIRPC"]
        categoriesContent[categories[element][2]] =["IADetecteurDeNombre","NoteIf","Quadtree","PolyUno"]
    });

    const projectsLink = {
        "LochCrenn":{"Site Web":"https://www.villalochcrenn.fr"},
        "InstinctIf":{"Site Web":"https://pollamothe.github.io/Instinct-If/"},
        "Quadtree":{"Voir sur Github":"https://github.com/PolLamothe/Quadtree"},
        "AIRPC":{"Site Web":"https://pollamothe.github.io/AIR-PC/"},
        "NoteIf":{"Voir sur Github":"https://github.com/PolLamothe/NoteIf"},
        "PolyUno":{"Voir sur Github":"https://github.com/PolLamothe/PolyUno"},
        "IADetecteurDeNombre":{"Site Web":"https://pollamothe.fr/IA"},
        "PhysicSimulator":{"Site Web":"https://pollamothe.github.io/Collision-Simulator/"},
        "Laurelin" : {"Voir sur Gitlab" : "https://gitlab.univ-nantes.fr/E235508M/laurelin"},
    }

    const projectsButton = {
        "LochCrenn":{"French" : "Site Web","English":"Website"},
        "InstinctIf":{"French" : "Site Web","English":"Website"},
        "Quadtree":{"French" : "Voir sur Github","English":"See on Github"},
        "AIRPC":{"French" : "Site Web","English":"Website"},
        "NoteIf":{"French" : "Voir sur Github","English":"See on Github"},
        "PolyUno":{"French" : "Voir sur Github","English":"See on Github"},
        "IADetecteurDeNombre" : {"French" : "Site Web","English":"Website"},
        "PhysicSimulator" : {"French" : "Site Web", "English" : "Website"},
        "Laurelin" : {"French" : "Voir sur Gitlab", "English" : "See on Gitlab"}
    }

    const projectText = {
        "French":{
            "LochCrenn":"Un site web vitrine pour la location saisonniere d'une maison",
            "InstinctIf":"Un site de mini jeux",
            "Quadtree":"Un jeu vidéo codé en Golang utilisant la bibliothèque Ebiten",
            "AIRPC":"Un faux site web vitrine",
            "NoteIf":"Une extension pour navigateur web permettant aux étudiants de Nantes d'être avertis de publications de notes",
            "PolyUno":"Un jeu de Uno fonctionnant en réseau de façon décentralisé",
            "IADetecteurDeNombre" : "Un projet de création d'IA from scratch avec diverses implémentations dans du machine learning",
            "PhysicSimulator" : "Un simulateur de collision codé en Javascript",
            "Laurelin":"Un projet de site e-commerce de semestre 3 de BUT informatique",
        },
        "English":{
            "LochCrenn":"A showcase site for a seasonal rental house",
            "InstinctIf":"A mini-game site",
            "Quadtree":"A video game made in Golang using the Ebiten library",
            "AIRPC":"A fake showcase site",
            "NoteIf":"A browser extension that allow Nantes'student to be warned at the publishment of new grade",
            "PolyUno":"A Uno game working in networks in a decentralised way",
            "IADetecteurDeNombre":"A project to create AI from scratch with various implementations in machine learning",
            "PhysicSimulator" : "A collision simulator made in Javascript",
            "Laurelin" : "An e-commerce site project for semester 3 of BUT IT",
        }
    }

    var projectTitle = {
        "French":{
            "LochCrenn":"Villa Loch Crenn",
            "InstinctIf":"Instinct-If",
            "Quadtree":"Projet Quadtree",
            "AIRPC":"Air-PC",
            "NoteIf":"NoteIf",
            "PolyUno":"PolyUno",
            "IADetecteurDeNombre" : "Réseaux de neurones artificiels - Mon meilleur projet",
            "PhysicSimulator" : "Simulateur de collision",
            "Laurelin" : "Laurelin"
        },
        "English":{
            "LochCrenn":"Villa Loch Crenn",
            "InstinctIf":"Instinct-If",
            "Quadtree":"Project Quadtree",
            "AIRPC":"Air-PC",
            "NoteIf":"NoteIf",
            "PolyUno":"PolyUno",
            "IADetecteurDeNombre" : "Artificial neural networks - My best project",
            "PhysicSimulator" : "Collision simulator",
            "Laurelin" : "Laurelin",
        }
       
    }

    var projectTech = {
        "French":{
            "LochCrenn":["HTML/CSS","JS","PHP"],
            "InstinctIf":["HTML/CSS","JS","Equipe"],
            "Quadtree":["Golang","Réseaux"],
            "AIRPC":["HTML/CSS"],
            "NoteIf":["HTML/CSS","JS","NodeJS","MongoDB","Equipe"],
            "PolyUno":["Python","Réseaux","Equipe"],
            "IADetecteurDeNombre" : ["Python","IA","Math"],
            "PhysicSimulator" : ["JS","HTML/CSS","Math"],
            "Laurelin" : ["HTML/CSS","JS/VueJS","PHP/Laravel","SQL","Equipe"],
        },
        "English":{
            "LochCrenn":["HTML/CSS","JS","PHP"],
            "InstinctIf":["HTML/CSS","JS","Team"],
            "Quadtree":["Golang","Networks"],
            "AIRPC":["HTML/CSS"],
            "NoteIf":["HTML/CSS","JS","NodeJS","MongoDB","Team"],
            "PolyUno":["Python","Networks","Team"],
            "IADetecteurDeNombre" : ["Python","AI","Math"],
            "PhysicSimulator" : ["JS","HTML/CSS","Math"],
            "Laurelin" : ["HTML/CSS","JS/VueJS","PHP/Laravel","SQL","Team"],
        }
    }

    function changeCategorie(categorie){
        $('.currentCategorie').removeClass("currentCategorie")
        $('#categorie_'+categorie).addClass("currentCategorie")
        currentCategorie.value = categorie
    }
</script>

<style scoped>
    #yellowStar{
        position: absolute;
        z-index: 5;
        height: fit-content;
        width: fit-content;
        width: 5vw;
        aspect-ratio: 1/1;
    }
    .techTagDiv{
        display: flex;
        width: fit-content;
        gap: 1vw;
        height: fit-content;
        bottom: 0px;
        position: absolute;
        padding-left: 3vw;
    }
    .techTagDiv p {
        font-size: 15px!important;
        background-color: lightgray;
        color: black !important;
        width: max-content !important;
        padding: 0.25vw;
        margin: 0px !important;
        transform: none!important;

    }
    .currentCategorie{
        background-color: rgba(255,255,255,1)!important;
        color: black!important;
    }
    #filterDiv button:hover{
        background-color: rgba(255,255,255,0.5);
    }
    #filterDiv button{
        background-color: transparent;
        color: white;
        border: none;
        cursor: pointer;
        font-size: 16px;
        padding: 0.5vw;
        transition-duration: 0.3s;
    }
    .filterdiv{
        position: relative;
        margin-left: 12vw;
        width: fit-content;
        margin-bottom: 2vh;
        display: flex;
        gap: 1vw;
    }
    .slideDiv h1{
        font-size: 20px;
        margin-bottom: 0px;
        margin-top: 2vh;
    }
    .slideDiv:hover > .slideImg{
        filter:blur(3px);
    }
    .slideDiv:hover > .slidePictureButton{
        opacity: 1;
    }
    .slideDiv{
        width: min-content;
        transition-duration: 0.5s;
    }
    .slideDiv p{
        color: white;
        font-family: Roboto;
        text-align: center;
        margin-top: 2vh;
        width: 25vw;
        margin-left: 50%;
        transform: translateX(-50%);
        font-size: 18px;
        height: fit-content;
        margin-bottom: 5vh;
    }
    .slidePictureButton a{
        width: 12vw;
        background-color: rgba(30,30,30,1);
        border: solid 2px white;
        font-size: 18px;
        padding: 0.5vw;
        cursor: pointer;
        text-align: center;
        font-family: Roboto;
        text-decoration: none;
        color: white;
    }
    .slidePictureButton{
        position: absolute;
        top: 0px;
        flex-direction: column;
        align-items: center;
        margin-left: 50%;
        margin-top: 30%;
        transform: translate(-50%,-50%);
        width: fit-content;
        gap: 5vh;
        opacity: 0;
        display: flex;
        transition-duration: 0.25s;
    }
    h1{
        color: white;
        text-align: center;
        font-family: Roboto;
        margin-bottom: 10vh;
    }
    img{
        width: 30vw;
        aspect-ratio: 16/9;
        position: relative;
        transition-duration: 0.5s;
        object-fit: cover;
    }
    #slider{
        margin-left: 5vw;
        padding-left: 5vw;
        padding-right: 5vw;
        padding-bottom: 2vw;
        height: max-content;
    }
    .slide{
        display: flex;
        flex-direction: row;
        gap: 2vw;
    }
    .wrapper{
        margin-bottom: 10vh;
        transition-duration: 0.5s;
    }
    @media screen and (max-width: 700px) {
        #yellowStar{
            width: 10vw !important;
            margin-left: 8vw !important;
        }
        img{
            width: 80vw!important;
            margin-left: 50%!important;
            transform: translateX(-50%)!important;
        }   
        .splide__slide p{
            width: 80%;
        }
        .slideButton{
            width: max-content!important;
            padding: 2vw!important;
        }
        #filterDiv button{
            padding: 4vw!important;
        }
    }
    @media screen and (max-width: 1200px) {
        #yellowStar{
            margin-left: 13vh;
            width: 6vh !important;
        }
        img{
            width: 50vw;
            margin-left: 50%;
            transform: translateX(-50%);
        }   
        .splide__slide p{
            width: 80%;
        }
        #filterDiv button{
            padding: 2vw;
            margin-bottom: 2vh;
        }
        .filterdiv{
            justify-content: space-around;
            width: 80vw;
        }
        .techTagDiv{
            position: relative;
            margin-bottom: 5vh;;
        }
        .techTagDiv p{
            padding: 1vw;
        }
    }
</style>