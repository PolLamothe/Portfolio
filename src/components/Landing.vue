<template>
    <div class="wrapperLanding">
        <img src="../assets/img/tech/JavaScript.png" id="javascript">
        <img src="../assets/img/tech/css.png" id="css">
        <div id="bigTextDiv">
            <h1 id="name">Pol Lamothe</h1>
            <h2 id="job">Dévelopeur</h2>
            <div id="SocialDiv">
                <a v-for="social in allSocial" :href="socialLink[social]" target="_blank" class="SocialeButton">
                    <img :src="'/src/assets/img/social/'+social+'.png'" :class="{invert : social=='Github'}">
                    <p>{{ social }}</p>
                </a>
            </div>
        </div>
        <img src="../assets/img/hero-devices.svg" id="img1">
    </div>
</template>

<script setup>
    var allSocial = ["Github","RootMe","Linkedin"]
    var socialLink = {"Github":"https://github.com/PolLamothe","RootMe":"https://www.root-me.org/Pol-724719?lang=fr#f12c79541abdb20fe556c1eb0472cead","Linkedin":"https://www.linkedin.com/in/pol-lamothe-075585286/"}
</script>

<style scoped>
    #css{
        position: absolute;
        width: 6vw;
        transform: rotate(5deg);
        right: 5vw;
        margin-top: 60vh;
    }
    #javascript{
        position: absolute;
        width: 8vw;
        border-radius: 20px;
        transform: rotate(-10deg);
        margin-left: 5vw
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
        background : -webkit-linear-gradient(red,blue);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-size: 50px;
        font-family: "Jersey 20";
    }
    #img1{
        width: 35vw;
        position: absolute;
        bottom: 0px;
        margin-left: 10vw;
    }
</style>