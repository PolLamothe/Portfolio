<template>
    <div id="wrapper">
        <button id="homeButton" @click="goToHome()">{{ text["HomeButton"][languageValue] }}</button>
        <h1>{{ title }}</h1>
        <div v-html="content"></div>
    </div>
    <div id="language">
        <Language @language="(arg)=>{languageValue = arg}"></Language>
    </div>
</template>

<script setup>
import {onMounted, ref} from "vue"
import axios from "axios"
import { useRoute } from 'vue-router'
import Language from "./components/Language.vue";

const route = useRoute()

let url = null
if(window.location.hostname == "localhost"){
    url = window.location.protocol+"//"+window.location.hostname+":3000"
}else{
    url = window.location.protocol+"//"+window.location.hostname+"/portfolio/backend"
}

let title = ref(null)
let content = ref(null)
let languageValue = ref("English")

const text = {
    "HomeButton" : {
        "English":"Home",
        "French":"Accueil"
    }
}

onMounted(async()=>{
    title.value = (await axios.get(url+"/getPostData/"+ route.params.ID)).data.title
    content.value = (await axios.get(url+"/getPostContent/"+route.params.ID)).data
})

function goToHome(){
    window.location = "/blog"
}
</script>

<style scoped>
    #language{
        position: absolute;
        bottom: 0px;
    }
    #homeButton{
        font-size: 24px;
        position: absolute;
        top: 1vw;
        left: 1vw;
        cursor: pointer;
        background-color: white;
        border: solid 3px black;
        border-radius: 25px;
        padding: 1vw;
    }
    #wrapper{
        text-align: center;
        font-family: Roboto;
    }
</style>