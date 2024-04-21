<template>
    <div class="wrapperLanding">
        <img src="/img/tech/css.png" id="css">
        <img src="/public/img/logo_blanc_violet.png" id="logo">
        <div id="bigTextDiv">
            <h1 id="name">Pol Lamothe</h1>
            <h2 id="job">● Dévelopeur</h2>
            <div id="SocialDiv">
                <a v-for="social in allSocial" :href="socialLink[social]" target="_blank" class="SocialeButton">
                    <img :src="'./img/social/'+social+'.png'" :class="{invert : social=='Github'}">
                    <p>{{ social }}</p>
                </a>
            </div>
        </div>
        <img src="/img/hero-devices.svg" id="img1">
    </div>
</template>

<script setup>
    var allSocial = ["Github","RootMe","Linkedin"]
    var socialLink = {"Github":"https://github.com/PolLamothe","RootMe":"https://www.root-me.org/Pol-724719?lang=fr#f12c79541abdb20fe556c1eb0472cead","Linkedin":"https://www.linkedin.com/in/pol-lamothe-075585286/"}
</script>

<style scoped>
    #logo{
        width: 30vw;
        margin-left: 50vw;
        transform: translateX(-50%);
        margin-top: 5vh;
        display: none;
    }
    @font-face {
        font-family: "Bauhaus";
        src: url("/public/font/bauhaus-93/Bauhaus-93-Regular.ttf");
        font-weight: 400;
    }
    #css{
        position: absolute;
        width: 6vw;
        transform: rotate(5deg);
        right: 5vw;
        margin-top: 60vh;
    }
    .SocialeButton:after {
    position: absolute;
    content: "";
    width: 0;
    height: 100%;
    top: 0;
    right: 0;
    z-index: -1;
    background-color: #7652fa;
    border-radius: 20px;
    box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5),
    7px 7px 20px 0px rgba(0,0,0,.1),
    4px 4px 5px 0px rgba(0,0,0,.1);
    transition: all 0.3s ease;
    }
    .SocialeButton:hover:after {
    left: 0;
    width: 100%;
    }
    .SocialeButton:active {
    top: 2px;
    }
    .SocialeButton{
        align-items: center;
        cursor: pointer;
    }
    .invert{
        filter: invert(100%);
    }
    #SocialDiv a img{
        width: 4vw;
        height: 4vw;
    }
    #SocialDiv a{
        text-decoration: none;
        border: solid 3px white;
        font-size: 22px;
        padding: 0.5vw;
        border-radius: 25px;
        font-family: "Jersey 20";
        letter-spacing: 1px;
        color: white;
        display: flex;
        gap: 1vw;
        justify-content: center;
        transition-duration: 0.5s;
        overflow: hidden;
    }
    #SocialDiv a:hover{
        transform: scale(1.05);
        background-image: linear-gradient(to right, rgba(255,0,0,0), rgba(50,0,255,0.6));
    }
    #SocialDiv{
        display: flex;
        flex-direction: row;
        gap: 1.5vw;
    }
    .wrapperLanding{
        height: 90vh;
        margin-top: 0px;
        position: relative;
    }
    #bigTextDiv{
        position: relative;
        padding-top: 20vh;
        padding-left: 50vw;
    }
    #name{  
        color: white;
        font-family: Roboto;
        font-size: 55px;
        margin: 0px;
    }
    #job{
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-size: 50px;
        font-family: "Bauhaus";
        background-color: #7652fa;
    }
    #img1{
        width: 35vw;
        position: absolute;
        bottom: 7.5vh;
        margin-left: 10vw;
    }
    @media screen and (max-width: 700px) {
        #job{
            width: max-content;
        }
        #logo{
            display: inherit;
        }
        .SocialeButton:hover{
            transform: translateX(-50%)!important;
        }
        #css{
            width: 13vw;
        }
        #javascript{
            width: 15vw;
            margin-top: 5vh;
            margin-left: 10vw;
        }
        #SocialDiv{
            flex-direction: column;
            gap: 2vh;
        }
        #SocialDiv a{
            width: 50vw;
            margin-left: 50%;
            transform: translateX(-50%);
            height: fit-content;
            padding-top: 2vh;
            padding-bottom: 2vh;
        }
        #SocialDiv a img{
            width: 10vw;
            height: 10vw;
        }
        .wrapperLanding{
            height: fit-content;
        }
        #img1{
            width: 60vw;
            position: relative;
            margin-top: 5vh;
            bottom: 0px!important;
        }
        #bigTextDiv{
            transform: translateX(-50%);
            width: fit-content;
            padding-left: 0px;
            margin-left: 50vw;
            margin-top: 5vh;
            padding-top: 0px;
        }
        #name{
            width: max-content;
        }
    }
</style>