<template>
    <div id="studyExperiences" data-aos="fade-left">
        <h1>Mon parcours</h1>
        <Formation :language="props.language"></Formation>
        <Experience :language="props.language"></Experience>
        <div id="circle5" class="circle" ></div>
    </div>
</template>

<script setup>
import Formation from './Formation.vue';
import Experience from './Experience.vue';

const props = defineProps(["language"]);

</script>

<style scoped>
    #circle5{
        height: 100vh;
        width: 100vh;
        z-index: -1;
        background: radial-gradient(62.94% 62.94% at 18.75% 47.07%, rgba(255, 255, 255, 0.23) 0%, rgba(255, 255, 255, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;    
        top: 50%;
        left: 10vw;
        rotate: 30deg;
        animation: float 6s ease-in-out infinite;
    }
    @keyframes float {
        0% { transform: translateY(0px) rotate(30deg); }
        50% { transform: translateY(-20px) rotate(35deg); }
        100% { transform: translateY(0px) rotate(30deg); }
    }
    .circle{
        position: absolute;
        border-radius: 50%;
        display: inline-block;
        background : linear-gradient(#FFE2AA,rgba(255,255,255,0));
    }
    h1{
        color: #FFE2AA;
        font-family: "Climate Crisis", sans-serif;
        position: absolute;
        top: 0px;
    }
    #studyExperiences{
        display: flex;
        flex-direction: row;
        align-items: center;
        position: relative;
        padding-left: 25vw;
        padding-top: 5vw;
        padding-right: 2.5vw;
        padding-bottom: 2.5vw;
        background: rgba(0,0,0,.4);
        width: fit-content;
        border-bottom-right-radius: 2vw;
        border-top-right-radius: 2vw;
        margin-top: 10vw;
        gap: 5vw;
    }
</style>