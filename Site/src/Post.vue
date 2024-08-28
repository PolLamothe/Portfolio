<template>
    <div id="wrapper">
        <h1>{{ title }}</h1>
        <div v-html="content"></div>
    </div>
</template>

<script setup>
import {onMounted, ref} from "vue"
import axios from "axios"
import { useRoute } from 'vue-router'

const route = useRoute()

let url = null
if(window.location.hostname == "localhost"){
    url = window.location.protocol+"//"+window.location.hostname+":3000"
}else{
    url = window.location.protocol+"//"+window.location.hostname+"/portfolio/backend"
}

let title = ref(null)
let content = ref(null)

onMounted(async()=>{
    title.value = (await axios.get(url+"/getPostData/"+ route.params.ID)).data.title
    content.value = (await axios.get(url+"/getPostContent/"+route.params.ID)).data
})
</script>

<style scoped>
    #wrapper{
        text-align: center;
    }
</style>