<template>
    <div id="wrapper">
        <p id="title">{{ props.title }}</p>
        <p id="date">{{ new Date(props.date).getDate().toString()+"/"+(new Date(props.date).getMonth()+1).toString()+"/"+new Date(props.date).getUTCFullYear().toString() }}</p>
        <button id="deleteButton" @click="deletePost()">Supprimer</button>
    </div>
</template>

<script setup>
    import axios from "axios"

    const props = defineProps(["title","content","date","id"])
    const emit = defineEmits(['postDeleted'])
    
    let url = null
    if(window.location.hostname == "localhost"){
        url = window.location.protocol+"//"+window.location.hostname+":3000"
    }else{
        url = window.location.protocol+"//"+window.location.hostname+"/portfolio/backend"
    }

    async function deletePost() {
        await axios.post(url+"/deletePost/"+props.id,{},{withCredentials:true})
        emit("postDeleted")
    }
</script>

<style scoped>
    #deleteButton{
        background-color: red;
        border: solid 2px black;
        font-size: 20px;
        position: absolute;
        top: 50%;
        right: 2vw;
        transform: translateY(-50%);
        border-radius: 25px;
        padding: 0.5vw;
        cursor: pointer;
    }
    #title{
        font-size: 20px;
        font-weight: bold;
    }
    #date{
        margin-left: 2vw;
        font-size: 17px;
    }
    #wrapper{
        width: 90vw;
        border: solid 2px black;
        margin-left: 50%;
        transform: translateX(-50%);
        border-radius: 30px;
        cursor: pointer;
        padding-left: 5vw;
        font-family: Roboto;
    }
</style>