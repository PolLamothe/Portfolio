<template>
    <div id="topWrapper">
        <h1 style="font-family: Roboto;padding-left: 5vw;">{{ text["title"][languageValue] }}</h1>
        <div id="adminWrapper">
            <p v-if="loginState">{{ text["loginMessage"][languageValue] }}</p>
            <button id="adminButton" @click="login = true" v-if="!loginState" class="adminButton">Admin Mode</button>
            <button v-if="loginState" class="adminButton" @click="createPostState = true">{{ text["postMessageButton"][languageValue] }}</button>
        </div>
    </div>
    <div id="languageWrapper">
        <Language @language="(arg)=>{languageValue = arg}" style="z-index: 10;"></Language>
    </div>
    <div v-if="login" class="passwordDiv">
        <div class="passwordWrapper" id="passwordWrapper">
            <div class="passwordInputWrapper" id="passwordInputWrapper">
                <p>{{ text['login'][languageValue] }} :</p>
                <input type="password" id="passwordInput">
            </div>
            <button @click="validatePassword()">{{ text["loginButton"][languageValue] }}</button>
            <img src="/public/img/cross.png" @click="login = false" class="exitCross">
        </div>
    </div>
    <div v-if="createPostState" class="passwordDiv">
        <div class="passwordWrapper">
            <img src="/public/img/cross.png" @click="createPostState = false" class="exitCross">
            <div id="contentDiv">
                <input id="titleInput" :placeholder="text['titleInput'][languageValue]">
                <textarea id="contentInput" :placeholder="text['contentInput'][languageValue]"></textarea>
                <button id="validatePost" @click="createPost()">{{ text["loginButton"][languageValue] }}</button>
            </div>
        </div>
    </div>
    <ProstPreview v-for="post in allPosts" :title="post.title" :content="post.content" :date="post.date"></ProstPreview>
</template>

<script setup>
import Language from './components/Language.vue';
import {onMounted, ref} from "vue"
import axios from "axios"
import Cookies from 'js-cookie';
import ProstPreview from "./components/PostPreview.vue"

const emit = defineEmits(['language'])

const languageValue = ref("English")

var loginState = ref(false)
var login = ref(false)
var createPostState = ref(false)

var allPosts = ref([])

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
    },
    "wrongLogin":{
        "English":"Wrong password",
        "French":"Mauvais mot de passe"
    },
    "loginMessage":{
        "English":"You are connected as admin",
        "French":"Vous êtes connecté en tant qu'admin"
    },
    "postMessageButton":{
        "English":"Create a new post",
        "French":"Créer un post"
    },
    "titleInput":{
        "English":"Title",
        "French":"Titre"
    },
    "contentInput":{
        "English":"Content",
        "French":"Contenu"
    },
    "emptyInput":{
        "English":"Please fill all the inputs",
        "French":"Veuillez remplir tout les champs"
    }
}

let url = null
if(window.location.hostname == "localhost"){
    url = window.location.protocol+"//"+window.location.hostname+":3000"
}else{
    url = window.location.protocol+"//"+window.location.hostname+"/portfolio/backend"
}

onMounted(async ()=>{
    if(Cookies.get("token") != undefined){
        axios.get(url+"/checkToken",{withCredentials : true}).then((response)=>{
        loginState.value = true
        }).catch(e=>{
            Cookies.remove("token")
        })
    }
    allPosts.value = await getAllPosts()
})

async function getAllPosts(){
    var result = []
    const reponse = await axios.get(url+"/getAllPostsID")
    for(let i = 0;i<reponse.data.length;i++){
        result.push((await axios.get(url+"/getPostData/"+reponse.data[i].toString())).data)
    }
    return result
}

async function createPost(){
    if(document.getElementById("titleInput").value == ""||document.getElementById("contentInput").value == ""){
        alert(text["emptyInput"][languageValue.value])
        return
    }
    await axios.post(url+"/createPost",{"title":document.getElementById("titleInput").value,"content":document.getElementById("contentInput").value},{withCredentials : true,})
    createPostState.value = false
}

async function validatePassword(){
    const response = await axios({"url":url+"/login",
    "method":"POST",
    "data":{"password":document.getElementById("passwordInput").value}
    },
    {withCredentials:true})
    if(response.status != 200){
        alert(text["wrongLogin"][languageValue.value])
    }else{
        loginState.value = true
        login.value = false
        Cookies.set("token",response.data,{
            secure:true,
        })
    }
}
</script>

<style scoped>
    #contentDiv input{
        width: 40%;
        font-size: 16px;
    }
    #contentDiv textarea{
        width: 100%;
        height: 30vh;
        font-size: 16px;
        resize: none;
    }   
    #contentDiv button{
        background-color: lightgreen;
        font-family: Roboto;
        border: none;
        font-size: 18px;
        padding: 0.8vw;
        border-radius: 20px;
        cursor: pointer;
        width: fit-content;
    }
    #contentDiv{
        display: flex;
        flex-direction: column;
        gap: 5vh;
        width: 40vw;
        align-items: center;
    }
    #adminWrapper{
        display: flex;
        flex-direction: row;
        align-items: center;
        font-family: Roboto;
        gap: 2vw;
    }
    .exitCross:hover{
        background-color: lightgray;
    }
    .exitCross{
        width: 5vw;
        position: absolute;
        top: 2vh;
        left: 2vw;
        cursor: pointer;
        border-radius: 50%;
    }
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
    .passwordWrapper{
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
    .passwordDiv{
        width: 100vw;
        height: 100vh;
        position: absolute;
        top: 0px;
        left: 0px;
        background-color: rgba(50,50,50,0.7);
        overflow: hidden;
    }
    #topWrapper{
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100vw;
        justify-content: space-between;
        border-bottom: solid 2px gray;
    }
    .adminButton{
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