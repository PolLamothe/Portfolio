<template>
    <div id="landingWrapper">
        <div id="textWrapper" class="slideLeftAnimation">
            <h1>Pol<br>Lamothe</h1>
            <p>Je suis un passionné d’informatique de 19 ans. Depuis mes débuts à 15 ans, je ne cesse d’apprendre, d’expérimenter et de progresser dans ce domaine qui me motive chaque jour.</p>
            <div id="buttonWrapper">
                <button>CV</button>
                <button>Contact</button>
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
                <button v-for="link in linkButtons"><p>{{ link  }}</p><img :src="'/img/social/'+link+'.png'"></img></button>
            </div>
        </div>
        <div id="circle4" class="circle"></div>
    </div>
</template>

<script setup>
    import { ref } from "vue"

    const emit = defineEmits(['language'])
    
    const linkButtons = ["Linkedin","Github","Leetcode"]
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

    #circle4{
        height: 100vh;
        width: 100vh;
        z-index: -1;
        background: radial-gradient(62.94% 62.94% at 18.75% 47.07%, rgba(255, 255, 255, 0.23) 0%, rgba(255, 255, 255, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;    
        margin-top: 90vh;
    }
    #buttonWrapper button:hover{
        background-color: rgba(255,255,255,0.3);
        border: solid 2px transparent;
    }
    #buttonWrapper button{
        color: white;
        border: solid 2px white;
        background: transparent;
        font-size:24px;
        padding: .5vw 2vw .5vw 2vw;
        border-radius: 2vw;
        cursor: pointer;
        transition-duration: .3s;
    }
    #buttonWrapper{
        background-color: rgba(10,10,10,.5);     
        width: fit-content;
        display: flex;
        gap: 1vw;
        border-radius: 2vw;
        padding: .5vw;
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
    #landingWrapper{
        width: 90vw;
        margin-left: 50%;
        margin-top: 15vh;
        transform: translateX(-50%);
        justify-content: space-around;
        display: flex;
        align-items: center;
    }
    h1{
        font-family: "Climate Crisis", sans-serif;
        color : #FFE2AA;
        font-size: 100px;
        margin-top: 0px;
        width: max-content;
    }
    p{
        color : lightgray;
        font-family: Roboto;
        font-size: 24px;
        text-align: justify;
    }
</style>