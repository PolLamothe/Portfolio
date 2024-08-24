<template>
    <div id="topWrapper">
        <h1 style="font-family: Roboto;padding-left: 5vw;">{{ text["title"][languageValue] }}</h1>
        <button id="adminButton" @click="login = true">Admin Mode</button>
    </div>
    <div id="languageWrapper">
        <Language @language="(arg)=>{languageValue = arg}"></Language>
    </div>
    <div v-if="login" id="passwordDiv">
        <div id="passwordWrapper">
            <div id="passwordInputWrapper">
                <p>{{ text['login'][languageValue] }} :</p>
                <input type="password" id="passwordInput">
            </div>
            <button @click="validatePassword()">{{ text["loginButton"][languageValue] }}</button>
        </div>
    </div>
</template>

<script setup>
import Language from './components/Language.vue';
import {ref} from "vue"
import axios from "axios"

const emit = defineEmits(['language'])

const languageValue = ref("English")

const text = {
    "title":{
        "English":"My Posts",
        "French":"Mes Posts"
    },
    "login":{
        "English":"Please enter the admin password",
        "French":"Veuillez entrer le mot de passe admin"
    },
    "loginButton":{
        "English":"Validate",
        "French":"Valider"
    }
}

let url = null
if(window.location.hostname == "localhost"){
    url = window.location.protocol+"//"+window.location.hostname+":3000"
}else{
    url = window.location.protocol+"//"+window.location.hostname+"/portfolio/backend"
}

async function validatePassword(){
    axios({"url":url+"/login",
    "method":"POST",
    "data":{"password":document.getElementById("passwordInput").value}
    })
} 

var login = ref(false)
</script>

<style scoped>
    #passwordWrapper button{
        background-color: lightgreen;
        font-family: Roboto;
        border: none;
        font-size: 18px;
        padding: 0.8vw;
        border-radius: 20px;
        cursor: pointer;
    }
    #passwordInputWrapper{
        display: flex;
        align-items: center;
        text-align: center;
        font-family: Roboto;
        gap: 1vw;
        justify-content: center;
    }
    #passwordInput{
        height: fit-content;
    }
    #passwordWrapper{
        width: 70vw;
        height: 70vh;
        background-color: white;
        margin-left: 50vw;
        margin-top: 50vh;
        transform: translate(-50%,-50%);
        border-radius: 50px;
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 2vh;
    }
    #passwordDiv{
        width: 100vw;
        height: 100vh;
        position: absolute;
        top: 0px;
        left: 0px;
        background-color: rgba(50,50,50,0.7);
    }
    #topWrapper{
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100vw;
        justify-content: space-between;
        border-bottom: solid 2px gray;
    }
    #adminButton{
        background-color: lightgreen;
        border: solid 2px black;
        border-radius: 3px;
        font-size: 18px;
        height: fit-content;
        cursor: pointer;
        margin-right: 5vw;
    }
    #languageWrapper{
        position: absolute;
        bottom: 0px;
    }
</style>