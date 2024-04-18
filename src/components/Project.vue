<template>
    <div class="wrapper">
        <h1>Mes projets</h1>
        <Splide id="slider" aria-label="My Favorite Images"  data-splide='{"fixedWidth":"fit-content","gap":"5vw"}' :key="key">
            <SplideSlide v-for="project in projectsList" class="slideDiv">
                    <img :src="'./img/project/'+project+'.png'" class="slideImg" :class="{contain : project == 'WalletMiner'}">
                    <div class="slidePictureButton">
                        <a v-for="link in Object.keys(projectsLink[project])" class="slideButton" :href="projectsLink[project][link]" target="_blank">{{ link }}</a>
                    </div>
                    <h1>{{ projectTitle[project] }}</h1>
                    <p>{{ projectText[project] }}</p>
            </SplideSlide>
        </Splide>
    </div>
</template>

<script setup>
    import '@splidejs/splide/dist/css/splide.min.css';

    var projectsList = ["LochCrenn","Quadtree","InstinctIf","AIRPC","STI2D","WalletMiner"]

    var projectsLink = {
        "LochCrenn":{"Site Web":"https://www.villalochcrenn.fr"},
        "InstinctIf":{"Site Web":"https://pollamothe.github.io/Instinct-If/"},
        "Quadtree":{"Voir sur Gitlab":"https://gitlab.univ-nantes.fr/E239555L/quadtree-pol-mathieu"},
        "AIRPC":{"Site Web":"https://pollamothe.github.io/AIR-PC/"},
        "STI2D":{"Site Web":"https://pollamothe.github.io/STI2D/"},
        "WalletMiner":{"Site Web":"https://github.com/PolLamothe/Wallet-Miner-BTC"}
        }

    var projectText = {
        "LochCrenn":"Un site web vitrine pour un maison de location saisonniere",
        "InstinctIf":"Un site de mini jeux",
        "Quadtree":"Une jeux vidéo codé en Golang et utilisant la bibliothèque Ebiten",
        "AIRPC":"Un faux site web vitrine",
        "STI2D":"Un site web présentant la STI2D réalisé en Terminale",
        "WalletMiner":"Un programme écrit en python servant à tester la sécurité de la blockchain Bitcoin"
    }

    var projectTitle = {
        "LochCrenn":"Villa Loch Crenn",
        "InstinctIf":"Instinct-If",
        "Quadtree":"Project Quadtree",
        "AIRPC":"Air-PC",
        "STI2D":"Présentation STI2D",
        "WalletMiner":"Bitcoin Wallet Miner"
    }
</script>

<style scoped>
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
        width: min-contentt;
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
        height: fit-content;
    }
    .slide{
        display: flex;
        flex-direction: row;
        gap: 2vw;
    }
    .wrapper{
        margin-bottom: 10vh;
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
    }
</style>