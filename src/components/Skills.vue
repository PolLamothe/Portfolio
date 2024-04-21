<template>
    <div class="wrapper">
        <img src="/img/tech/JavaScript.png" id="javascript">
        <h1>Mes compétences</h1>
        <div id="content">
            <div id="language" class="contentWrap">
                <p class="underTitle">Les languages que je maitrise :</p>
                <div id="languageContent" class="contentDiv">
                    <div v-for="language in languages">
                        <p>{{language}}</p>
                        <div class="bar">
                            <div class="barContent" :percent="Data[language]"></div>
                        </div>
                    </div>
                    <img src="/img/tech/Ethereum.png" id="Bitcoin">
                </div>
            </div>
            <div id="tech" class="contentWrap">
                <p class="underTitle">Les technologies que je maitrise :</p>
                <div id="techContent" class="contentDiv">
                    <div id="skillButtonDiv">
                        <button v-for="kind in techKind" class="skillButton" :id="kind" @click="changeKind(this,kind)"><img :src="'./img/'+kind+'.png'"></button>
                    </div>
                    <div id="sideSkillDiv" data-aos="fade-left">
                        <p id="skillKindTitle">{{ kindSelected }}</p>
                        <div id="skillDetailsDiv">
                            <div v-for="element in kindContent[kindSelected]">
                                <img :src="'./img/tech/'+element+'.png'" :class="{invert: element == 'CyberSécurité'}" rel="preload">
                                <p>{{ element }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <img v-for="elem in allImages" :src="elem" style="display: none;">
        </div>
    </div>
</template>

<script setup>
    import { onMounted,ref  } from 'vue';
    var kindSelected = ref("BackEnd")
    onMounted(() => {
        for(var i = 0;i<$('.barContent').length;i++){
                $($('.barContent')[i]).css("width",$($('.barContent')[i]).attr("percent")*100+"%")
        }
        $('#'+kindSelected.value).addClass("skillActive")
        allImages.value = null
    })
    var languages = ["JavaScript","HTML/CSS","Python","SQL","Golang","PHP"]
    var Data = {
        "HTML/CSS":0.9,
        "JavaScript":0.9,
        "Python":0.8,
        "SQL":0.75,
        "Golang":0.75,
        "PHP":0.7,
        "Flutter":0.7
    }
    var techKind = ["BackEnd","FrontEnd","Autres"]
    const barNumber = Data.length

    var kindContent = {
        "BackEnd":["NodeJS","Nginx","MongoDB","Linux"],
        "FrontEnd":["VueJS","Jquery","Flutter"],
        "Autres":["Pandas","CyberSécurité","Blockchains"]
    }

    var allImages = ref([])

    techKind.forEach((element) =>{
        for(let i = 0;i<kindContent[element].length;i++){
            allImages.value.push("./img/tech/"+kindContent[element][i]+".png")
        }
    })


    $.fn.isInViewport = function() {
        var elementTop = $(this).offset().top;
        var elementBottom = elementTop + $(this).outerHeight();var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();return elementBottom > viewportTop && elementTop < viewportBottom;
    };
    $(window).on('resize scroll', function() {
        if($(".barAnimation").length != barNumber){
            for(let i = 0;i<$('.barContent').length;i++){
                if ($($('.barContent')[i]).isInViewport()) {
                    $($('.barContent')[i]).addClass("barAnimation")
                }else{
                    $($('.barContent')[i]).removeClass("barAnimation")
                }
            }
        }
    });
    async function changeKind(updated,kind){
        if($(".skillGone").length != 0 || kind == kindSelected.value){
            return
        }
        var monElement = $('#sideSkillDiv');
        var offsetElement = monElement.offset();
        var largeurElement = monElement.outerWidth();
        var largeurEcran = $(window).width();
        var distanceDroiteEcran = largeurEcran - (offsetElement.left);
        $("#sideSkillDiv").css("transform","translateX("+distanceDroiteEcran*1+"px)")
        $('.skillActive').removeClass("skillActive")
        $('#'+kind).addClass("skillActive")
        await new Promise(r => setTimeout(r, 300))
        kindSelected.value = kind
        await new Promise(r => setTimeout(r, 300))
        $("#sideSkillDiv").css("transform","translateX(0%)")
    }
</script>

<style scoped>
    #javascript{
        position: absolute;
        width: 7vw;
        transform: rotate(10deg) translateX(-50%);
        border-radius: 1.1vw;
        left: 47.5vw;
        top: 20vh;
    }
    #Bitcoin{
        position: absolute;
        width: 5vw;
        margin-top: 5vw;
        margin-left: 15vw;
        transform: rotate(-10deg);
    }
    #tech{
        height: 50vh;
    }
    .invert{
        filter: invert(100%);
    }
    #skillDetailsDiv img{
        width: 4vw;
    }
    #skillDetailsDiv div{
        display: flex;
        align-items: center;
        gap: 2vw;
    }
    #skillDetailsDiv{
        margin-left: 50%;
        transform: translateX(-50%);
        display: flex;
        flex-direction: column;
        gap: 2.5vh;
    }
    #skillKindTitle{
        text-align: center;
        font-size: 24px;
        text-decoration: underline;
    }
    #techContent{
        display: flex;
    }
    #sideSkillDiv{
        width: 50vw;
        margin-top: -2vh;
    }
    .skillActive img{
        filter: none!important;
    }
    .skillActive{
        background-color:white!important;
    }
    #skillButtonDiv{
        display: flex;
        flex-direction: column;
        gap: 5vh;
    }
    .skillButton{
        width: 6vw;
        aspect-ratio: 1/1;
        cursor: pointer;
        background-color: transparent;
        border-radius: 25px;
        border: none;
        transition-duration: 0.7s;
        border: solid 1px white;
        padding: 0.5vw;
    }
    .skillButton:hover{
        transform: scale(1.1);
    }
    .skillButton img{
        width: 100%;
        filter: invert(100%);
    }
    .sousCategorie{
        font-size: 18px;
    }
    .bar{
        width: 100%;
        height: 8px;
        background-color: rgb(70, 70, 70);
        overflow-x: hidden;
    }
    .barContent{
        height: 8px;
        background:linear-gradient(to left,#e173ff,blue);
    }
    .barAnimation{
        animation: apparition 2s;
    }
    .wrapper{
        margin-top: 10vh;
        margin-bottom: 10vh;
    }
    h1{
        text-align: center;
        color: white;
        font-family: Roboto;
        margin-bottom: 5vh;
    }
    p{
        color: white;
    }
    .underTitle{
        font-size: 25px;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        color: lightgray;
        text-decoration: underline;
        width: fit-content;
        margin-bottom: 5vh;
        text-align: center;
    }
    #content{
        display: flex;
        margin-left: 10vw;
        width: fit-content;
        gap: 15vw;
    }
    .contentWrap{
        width: 30vw;
    }
    .contentDiv p{
        text-align: center;
        font-family: Roboto;
        font-size: 18px;
        width: 100%;
    }
    @keyframes apparition {
        from{
            transform: translateX(-100%);
        }
        to{
            transform: translateX(0%)
        }
    }
    @media screen and (max-width:1200px) {
        #javascript{
            display: none;  
        }
    }
    @media screen and (max-width:700px) {
        #javascript{
            top: 20vh;
            width: 13vw;
            left: 5vw;
        }
        #Bitcoin{
            width: 15vw;
            right: 5vw;
        }
        #sideSkillDiv{
            margin-top: 2vh;
            width: 80vw;
        }
        #skillDetailsDiv img{
            width: 15vw;
        }
        #tech{
            height: fit-content;
        }
        #techContent{
            flex-direction: column;
        }
        .skillButton{
            height: fit-content;
            width: 20vw;
        }
        #skillButtonDiv{
            flex-direction: row;
            justify-content: space-around;
        }
        #content{
            flex-direction: column;
        }
        .contentWrap{
            width: 80vw;
        }
    }
</style>