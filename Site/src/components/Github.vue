<template>
    <div id="global">
        <Language @language="(language)=>{emit('language',language)}" :language="props.language"></Language>
        <a class="wrapper" href="https://github.com/PolLamothe/Portfolio" target="_blank">
            <img src="/public/img/social/Github.png">
            <p>Github</p>
        </a>
    </div>
</template>

<script setup>
    import Language from "./Language.vue"
    
    const emit = defineEmits(['language'])
    const props = defineProps(["language"])
</script>

<style scoped>
    #global{
        position: sticky;
        display: flex;
        bottom: 2vw;
    }
    p{
        color: white;
        text-decoration: underline;
        font-family: Roboto;
        font-size: 18px;
        cursor: pointer;
    }
    img{
        filter: invert(100%);
        width: 4vw;
    }
    .wrapper{
        display: flex;
        align-items: center;
        gap: 1vw;
        bottom: 2vh;
        margin-right: 3vw;
        width: fit-content;
        cursor: pointer;
        float: right;
        position: absolute;
        right: 0px;
    }
    @media screen and (max-width: 700px) {
       img{
        width: 4vh;
       } 
       #global{
        bottom: 0px;
       }
    }
</style>