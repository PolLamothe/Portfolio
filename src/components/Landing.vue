<template>
    <div id="accueil">
        <div id="textWrapper" class="slideLeftAnimation">
            <h1 id="prenom">POL</h1>
            <h1 id="nom">LAMOTHE</h1>
            <p>{{ texts[language].description }}</p>
            <div id="buttonWrapper">
                <a href="./CV.pdf" target="_blank"><button id="buttonCV">{{ texts[language].cv }}</button></a>
                <a href="#contact"><button id="buttonContact">{{ texts[language].contact }}</button></a>
            </div>
        </div>
        <div id="rightWrapper">
            <div id="circle1" class="circle"></div>
            <div id="circle2" class="circle"></div>
            <div style="position: relative;display: none;">
                <img src="/img/me_transparent.png" id="mePicture">
                <div id="circle3"></div>
            </div>
            <div id="linkWrapper">
                <button v-for="link in linkButtons" @click="handleClick(link)"><p>{{ link[0]  }}</p><img :src="'/img/social/'+link[0]+'.png'"></img></button>
            </div>
        </div>
        <div id="circle4" class="circle"></div>
    </div>
</template>

<script setup>
    const props = defineProps(["currentSection","language"]);
    
    const linkButtons = [["Linkedin","https://www.linkedin.com/in/pol-lamothe/"],["Github","https://github.com/PolLamothe"],["Leetcode","https://leetcode.com/u/PolLamothe/"]]

    const texts = {
        French: {
            description: "Je suis un passionné d’informatique de 19 ans. Depuis mes débuts à 15 ans, je ne cesse d’apprendre, d’expérimenter et de progresser dans ce domaine qui me motive chaque jour.",
            cv: "CV",
            contact: "Contact"
        },
        English: {
            description: "I am a 19-year-old computer science enthusiast. Since starting at 15, I never stopped learning, experimenting, and progressing in this field that drives me every day.",
            cv: "CV",
            contact: "Contact"
        }
    }

    const handleClick = (element) => {
        window.open(element[1])
    }
</script>

<style scoped>
    @keyframes SlideLeftAnimation {
        from{
            transform: translateX(-100vw);
        }
        to{
            transform: translateX(0px);
        }
    }
    .slideLeftAnimation{
        animation-name: SlideLeftAnimation;
        animation-duration: 1s;
    }
    @font-face { 
        font-family: 'HelveticaNeue';
        src: url('/font/helvetica-neue-5/HelveticaNeueUltraLight.otf') format('opentype');
        font-weight: normal;
        font-style: normal;
    }
    #prenom{
        font-family: "HelveticaNeue";
        color: white;
        margin-bottom: 0px;
    }
    #nom{
        font-family: "Climate Crisis";
        background: linear-gradient(to right, #FFE2AA, rgba(255, 226, 170, 0.2));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    #circle4{
        height: 100vh;
        width: 100vh;
        z-index: -1;
        background: radial-gradient(62.94% 62.94% at 18.75% 47.07%, rgba(255, 255, 255, 0.23) 0%, rgba(255, 255, 255, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;    
        margin-top: 90vh;
    }
    #buttonWrapper button:hover{
        background-color: rgba(255,255,255,.1)!important;
    }
    #buttonWrapper button{
        color: white;
        border: none;
        background: transparent;
        font-size:24px;
        padding: .5vw 2vw .5vw 2vw;
        border-radius: 2vw;
        cursor: pointer;
        transition-duration: .3s;
        background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.2))!important;
    }
    #buttonContact{
        border: solid 2px transparent;
        position: relative;
    }
    #buttonContact::before {
        content: "";
        position: absolute;
        inset: -2px;
        border-radius: 2vw;
        padding: 2px;
        background: linear-gradient(to right, rgba(255, 255, 255, 0.3), white);
        -webkit-mask: 
           linear-gradient(#fff 0 0) content-box, 
           linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
        mask-composite: exclude;
        pointer-events: none;
    }
    #buttonWrapper{
        background-color: rgba(10,10,10,.5);     
        width: fit-content;
        display: flex;
        gap: 1vw;
        border-radius: 2vw;
        padding: .25vw;
    }
    #circle3{
        width: 15vw;
        height: 8vw;
        background: linear-gradient(#FFE2AA,rgba(255,255,255,0));;
        border-radius: 0 0 8vw 8vw;
        position: absolute;
        bottom: -6vw;
        z-index: -1;
    }
    #mePicture{
        width: 15vw;
        z-index: 1;
    }
    .circle{
        position: absolute;
        border-radius: 50%;
        display: inline-block;
        background : linear-gradient(#FFE2AA,rgba(255,255,255,0));
    }
    #rightWrapper{
        padding-top: 20vh;
        width: fit-content;
        position: relative;
    }
    #circle2{
        height: 6vw;
        width: 6vw;
        top: 5vh;
        right: 0px;
        rotate: -70deg;
    }
    #circle1{
        height: 4vw;
        width: 4vw;
        top: 0px;
        rotate: -60deg;
    }
    #linkWrapper button p{
        position: absolute;
        right: 50%;
        transform: translateX(50%);
    }
    #linkWrapper button img{
        height: 4vh;
        background-color: white;
        border-radius: 50%;
    }
    #linkWrapper button{
        background-color: rgba(255,255,255,.3);
        border: none;
        color: white;
        font-size: 24px;
        border-radius: 1vw;
        display: flex;
        align-items: center;
        justify-content: right;
        position: relative;
        padding: 0px;
        border-radius: 4vw;
        min-height: 4vh;
        min-width: 12vw;
    }
    #linkWrapper{
        display: flex;
        flex-direction: column;
        padding: 1vw;
        background-color: rgba(0,0,0,.3);
        gap: 1vw;
        border-radius: 1vw;
        width: fit-content;
    }
    #textWrapper{
        display: table;
        width: 1px;
        position: relative;
        height: max-content;
    }
    #accueil{
        width: 65vw;
        margin-left: 50%;
        margin-top: 15vh;
        transform: translateX(-50%);
        justify-content: space-between;
        display: flex;
        align-items: center;
    }
    h1{
        font-family: "Climate Crisis", sans-serif;
        color : #FFE2AA;
        font-size: 80px;
        margin-top: 0px;
        width: max-content;
    }
    p{
        color : lightgray;
        font-size: 20px;
        text-align: justify;
    }
</style>