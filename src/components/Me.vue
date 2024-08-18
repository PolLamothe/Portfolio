<template>
    <div class="wrapperMe">
        <img src="/img/tech/VueJS.png" id="vue">
        <img src="/img/tech/Linux.png" id="linux">
        <h1>{{text["title"][props.language]}}</h1>
        <div id="content">
            <img src="/public/img/me.jpg" id="picture">
            <div id="mainWrapper" data-aos="fade-left" data-aos-delay="150">
                <p id="main">{{text["presentation"][props.language]}}</p>
                <div id="formationwrapper">
                    <p class="formation" style="margin-bottom: 0.1vh;font-size: 22px;">{{text["formation"][props.language]}} : BUT Info1/Polytech Nantes</p><br>
                    <img src="/img/Polytech.png" id="schoolPicture">
                    <p class="formation" style="margin-top: 0px;font-size: 17px;text-align: center;">{{text["schoolDetail"][props.language]}}</p>
                </div>
            </div>
            <a href="./CV.pdf" id="cv"><p>{{text["CV"][props.language]}}</p><img src="/img/cv.png"></a>
        </div>
    </div>
</template>

<script setup>
    const props = defineProps(["language"])

    const text = {
        "title":{
            "French":"À propos de moi",
            "English":"About me"
        },
        "presentation":{
            "French":"Je suis un jeune passioné d'informatique de 18 ans. J'ai commencé l'informatique à 15 ans et depuis je ne cesse d'apprendre et de m'améliorer.",
            "English":"I am a young passionate about computer of 18 years old, I started to learn at 15 years old and since, i'v never stoped learning and improve my skills"
        },
        "formation":{
            "French":"Formation",
            "English":"College"
        },
        "schoolDetail":{
            "French":"J'y étudie l'informatique générale avec une spécialisation pour l'ingénierie logicielle",
            "English":"I study global computer science with a specialisation for software engineering"
        },
        "CV":{
            "French":"Mon CV",
            "English":"My CV"
        }
    }
</script>

<style scoped>
    #schoolPicture{
        border: solid 0.5vw white;
        width: 15vw;
        margin-left: 50%;
        transform: translateX(-50%);
        margin-bottom: 2vh;
        border-radius: 10px;
    }
    #mainWrapper{
        grid-column: 2;
        grid-row: 1;
        width: 30vw;
        margin-left: 5vw;
        height: fit-content;
        gap: 3vh;
        display: flex;
        flex-direction: column;
    }
    .formation{
        color: white;
        font-family: Roboto;
        font-size: 20px;
    }
    #cv:hover{
        opacity: 0.8;
    }
    #cv img{
        width: 4vw;
        filter: invert(100%);
        height: 4vw;
        margin-left: 1vw;
    }
    #cv{
        display: flex;
        background-color: #7652fa;
        text-decoration: none;
        color: white;
        width: fit-content;
        font-family: "Jersey 20";
        font-size: 20px;
        padding: 0.5vw;
        border-radius: 25px;
        padding-left: 1vw;
        grid-column: 2;
        grid-row: 2;
        height: fit-content;
        margin-left: 50%;
        transform: translateX(-50%);
        align-items: center;
        transition-duration: 0.1s;
    }
    #linux{
        position: absolute;
        width: 6vw;
        left: 4vw;
        transform: rotate(10deg);
        margin-top: 5vh;
    }
    #vue{
        position: absolute;
        width: 7vw;
        right: 6vw;
        transform: rotate(-7deg);
        margin-top: 35vh;
    }
    .wrapperMe{
        padding-top: 5vh;
    }
    h1{
        color: white;
        text-align: center;
        font-family: Roboto;
        margin-bottom: 10vh;
    }
    iframe{
        grid-column: 2;
        grid-row: 2;
        width: 30vw;
        height: 60vh;
        margin-left: 10vw;
    }
    #content{
        display: grid;
        width: fit-content;
        margin-left: 50%;
        transform: translateX(-50%);
    }
    #main{
        color: white;
        font-family: Roboto;
        font-size: 18px;
        text-align: center;
    }
    #name{
        font-size: 25px;
    }
    #picture{
        width: 20vw;
        border-radius: 50px;
        grid-column: 1;
        grid-row: 1/3;
    }
    @media screen and (max-width: 700px) {
        #schoolPicture{
            width: 50vw;
        }
        #vue{
            width: 20vw;
            top: 80vw;
        }
        #linux{
            width: 22vw;
            margin-top: 10vh;
        }
        #cv img{
            width: 14vw;
            height: 14vw;
        }
        #cv{
            margin-left: 0px;
            transform: none;
            padding-left: 5vw;
            padding-right: 5vw;
            margin-top: 2vh;
        }
        .formation{
            font-size: 24px;
        }
        #main{
            margin-bottom: 0px;
        }
        .wrapperMe{
            padding-top: 2vh;
        }
        h1{
            margin-bottom: 5vh;
        }
        #mainWrapper{
            width: 70vw;
            text-align: center;
            gap: 1vh;
        }
        #content{
            display: flex;
            flex-direction: column;
            width: 80vw;
            align-items: center;
        }
        #picture{
            width: 40vw;
        }
    }
</style>