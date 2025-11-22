<template>
    <div id="globalButton">
        <img id="movingButton" :src="'/img/'+currentFlag+'.png'" @click="movingClicked()">
        <p id="text" style="right: 2vw;">{{ initale[currentFlag] }}</p>
    </div>
</template>

<script setup>
import {onMounted, ref} from "vue"
const props = defineProps(["language"])
var currentFlag = ref("English")
var initale = {"English":"ENG","French":"FR"}
const emit = defineEmits(['language'])
onMounted(()=>{
    if(props.language != "English"){
        movingClicked()
    }
})
function movingClicked(){
    let movingButton = document.getElementById("movingButton")
    let text = document.getElementById("text")
    if(currentFlag.value == "English"){
        currentFlag.value = "French"
    }else{
        currentFlag.value = "English"
    }
    emit("language",currentFlag.value)
    text.style.left = null
    text.style.right = null
    if(currentFlag.value == "French"){
        movingButton.style.transform = "translateX(100%)"
        text.style.left = "2vw"
    }else{
        movingButton.style.transform = null
        text.style.right = "2vw"
    }
}
</script>

<style scoped>
#text{
    position: absolute;
    margin:0px;
    margin-top: 2.5vw;
    transform: translateY(-50%);
    font-family: Roboto;
    font-weight: bold;
}
#globalButton{
    width: 12.5vw;
    height: 5vw;
    position: relative;
    background-color: #7652fa;
    border-radius: 30px;
    bottom: 2vh;
    margin-left: 1vw;
    align-items: center;
}
#movingButton{
    width: 50%;
    height: 100%;
    object-fit: cover;
    transition-duration: .5s;
    align-self: center;
    cursor: pointer;
    margin: 0px;
    border-radius: 30px;
    position: absolute;
}
@media screen and (max-width: 700px) {
    #globalButton{
        width: 20vw;
    }
}
</style>