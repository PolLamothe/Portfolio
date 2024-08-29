<template>
    <div id="wrapper">
        <p id="title">{{ props.title }}</p>
        <p id="date">{{ new Date(props.date).getDate().toString()+"/"+(new Date(props.date).getMonth()+1).toString()+"/"+new Date(props.date).getUTCFullYear().toString() }}</p>
    </div>
</template>

<script setup>
    const props = defineProps(["title","content","date"])
</script>

<style scoped>
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