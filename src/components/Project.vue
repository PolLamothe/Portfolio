<template>
    <div class="wrapper">
        <h1>Mes projets</h1>
        <div id="filterDiv" class="filterdiv">
            <button v-for="categorie in categories" :class="{currentCategorie : categorie == currentCategorie}" :id="'categorie_'+categorie" @click="changeCategorie(categorie)">{{ categorie }}</button>
        </div>
        <Splide id="slider" aria-label="My Favorite Images"  data-splide='{"fixedWidth":"fit-content","gap":"5vw"}' :key="key">
            <SplideSlide v-for="project in categoriesContent[currentCategorie]" class="slideDiv">
                    <img :src="'./img/project/'+project+'.png'" class="slideImg" :class="{contain : project == 'WalletMiner'}">
                    <div class="slidePictureButton">
                        <a v-for="link in Object.keys(projectsLink[project])" class="slideButton" :href="projectsLink[project][link]" target="_blank">{{ link }}</a>
                    </div>
                    <h1>{{ projectTitle[project] }}</h1>
                    <p>{{ projectText[project] }}</p>
                    <div class="techTagDiv">
                        <p v-for="tech in projectTech[project]">{{ tech }}</p>
                    </div>
            </SplideSlide>
        </Splide>
    </div>
</template>

<script setup>
    import '@splidejs/splide/dist/css/splide.min.css';
    import {ref} from "vue"

    var projectsList = ["LochCrenn","InstinctIf","NoteIf","Quadtree","AIRPC","STI2D","WalletMiner","PolyUno"]

    var categories = ["Tous","Site Web","Autres"]

    var currentCategorie = ref(categories[0])

    var categoriesContent = {
        "Tous":projectsList,
        "Site Web":["LochCrenn","InstinctIf","AIRPC","STI2D"],
        "Autres":["NoteIf","Quadtree","WalletMiner","PolyUno"]
    }

    var projectsLink = {
        "LochCrenn":{"Site Web":"https://www.villalochcrenn.fr"},
        "InstinctIf":{"Site Web":"https://pollamothe.github.io/Instinct-If/"},
        "Quadtree":{"Voir sur Github":"https://github.com/PolLamothe/Quadtree"},
        "AIRPC":{"Site Web":"https://pollamothe.github.io/AIR-PC/"},
        "STI2D":{"Site Web":"https://pollamothe.github.io/STI2D/"},
        "WalletMiner":{"Voir sur Github":"https://github.com/PolLamothe/Wallet-Miner-BTC"},
        "NoteIf":{"Voir sur Github":"https://github.com/PolLamothe/NoteIf"},
        "PolyUno":{"Voir sur Github":"https://github.com/PolLamothe/PolyUno"}
        }

    var projectText = {
        "LochCrenn":"Un site web vitrine pour un maison de location saisonniere",
        "InstinctIf":"Un site de mini jeux",
        "Quadtree":"Un jeu vidéo codé en Golang utilisant la bibliothèque Ebiten",
        "AIRPC":"Un faux site web vitrine",
        "STI2D":"Un site web présentant la STI2D réalisé en Terminale",
        "WalletMiner":"Un programme écrit en python servant à tester la sécurité de la blockchain Bitcoin",
        "NoteIf":"Une extension google permettant aux étudiants de Nantes d'être avertis de publications de notes",
        "PolyUno":"Un jeu de Uno fonctionnant en réseau de façon décentralisé"
    }

    var projectTitle = {
        "LochCrenn":"Villa Loch Crenn",
        "InstinctIf":"Instinct-If",
        "Quadtree":"Project Quadtree",
        "AIRPC":"Air-PC",
        "STI2D":"Présentation STI2D",
        "WalletMiner":"Bitcoin Wallet Miner",
        "NoteIf":"NoteIf",
        "PolyUno":"PolyUno"
    }

    var projectTech = {
        "LochCrenn":["HTML/CSS","JS","PHP"],
        "InstinctIf":["HTML/CSS","JS"],
        "Quadtree":["Golang","Réseaux"],
        "AIRPC":["HTML/CSS"],
        "STI2D":["HTML/CSS","JS"],
        "WalletMiner":["Python"],
        "NoteIf":["HTML/CSS","JS","NodeJS","MongoDB"],
        "PolyUno":["Python","Réseaux"]
    }

    function changeCategorie(categorie){
        $('.currentCategorie').removeClass("currentCategorie")
        $('#categorie_'+categorie).addClass("currentCategorie")
        currentCategorie.value = categorie
    }
</script>

<style scoped>
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
    .contain{
        object-fit: contain!important;
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