<template>
    <div class="wrapper">
        <h1>Mes compétences</h1>
        <div id="content">
            <div id="language">
            <p class="underTitle">Les languages que je maitrise :</p>
            <div id="languageContent" class="contentDiv">
                <div v-for="language in languages">
                    <p>{{language}}</p>
                    <div class="bar">
                        <div class="barContent" :percent="Data[language]"></div>
                    </div>
                </div>
            </div>
            </div>
            <div id="tech">
                <p class="underTitle">Les technologies que je maitrise :</p>
                <div id="techContent" class="contentDiv">
                    <div id="skillButtonDiv">
                        <button v-for="kind in techKind" class="skillButton" :class="{skillActive : (kind == kindSelected)}" @click="changeKind(kind);this.$forceUpdate();"><img :src="'/src/assets/img/'+kind+'.png'"></button>
                    </div>
                    <div id="sideSkillDiv">
                        <p id="skillKindTitle">{{ kindSelected }}</p>
                        <div id="skillDetailsDiv">
                            <div v-for="element in kindContent[kindSelected]">
                                <img :src="'/src/assets/img/tech/'+element+'.png'" :class="{invert: element == 'CyberSécurité'}">
                                <p>{{ element }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    const maxSize = 20
    import { onMounted  } from 'vue';
    onMounted(() => {
        for(var i = 0;i<$('.barContent').length;i++){
                $($('.barContent')[i]).css("width",maxSize*$($('.barContent')[i]).attr("percent")+"vw")
        }
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
    var kindSelected = "BackEnd"
    const barNumber = Data.length

    var kindContent = {
        "BackEnd":["NodeJS","Nginx","MongoDB","Linux"],
        "FrontEnd":["VueJS","Jquery","Flutter"],
        "Autres":["Pandas","CyberSécurité","Blockchains"]
    }

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

    function changeKind(kind){
        $("#sideSkillDiv").addClass("skillGone")
        kindSelected = kind
        $("#sideSkillDiv").removeClass("skillGone")
        $("#sideSkillDiv").addClass("skillGone")
    }
</script>

<style scoped>
    .skillGone{
        animation: skillGone 1s;
    }
    .skillCome{
        animation: skillGone 1s reverse;
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
        margin-top: 40%;
        transform: translate(-50%,-50%);
        margin-left: 50%;
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
        width: 30vw;
        margin-top: -2vh;
    }
    .skillActive img{
        filter: none!important;
    }
    .skillActive{
        background-color: white!important;
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
    }
    .skillButton img{
        width: 100%;
        filter: invert(100%);
    }
    .sousCategorie{
        font-size: 18px;
    }
    .bar{
        width: 20vw;
        height: 8px;
        background-color: lightgray;
        overflow-x: hidden;
    }
    .barContent{
        height: 8px;
        background-color: #465977;
    }
    .barAnimation{
        animation: apparition 2.5s;
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
        width: max-content;
        margin-bottom: 5vh;
    }
    #content{
        display: flex;
        margin-left: 10vw;
        width: fit-content;
        gap: 20vw;
    }
    .contentDiv p{
        text-align: center;
        font-family: Roboto;
        font-size: 18px;
    }

    @keyframes apparition {
        from{
            transform: translateX(-100%);
        }
        to{
            transform: translateX(0%)
        }
    }

    @keyframes skillGone {
        from{
            transform: translateX(0%);
        }
        to{
            transform: translateX(100%);
        }
    }
</style>