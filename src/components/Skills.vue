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
    var BackEnd = ["NodeJS",""]
    var Data = {
        "HTML/CSS":0.9,
        "JavaScript":0.9,
        "Python":0.8,
        "SQL":0.75,
        "Golang":0.75,
        "PHP":0.7,
    }
    const barNumber = Data.length

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
                }
            }
        }
    });
</script>

<style scoped>
    .sousCategorie{
        font-size: 18px;
    }
    .bar{
        width: 20vw;
        height: 8px;
        background-color: white;
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
        font-size: 22px;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        color: lightgray;
        text-decoration: underline;
        width: max-content;
        margin-bottom: 5vh;
    }
    #content{
        display: flex;
        margin-left: 50%;
        transform: translateX(-50%);
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
</style>