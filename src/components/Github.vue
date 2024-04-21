<template>
    <a class="wrapper" href="https://github.com/PolLamothe/Portfolio" target="_blank">
        <img src="/public/img/social/Github.png">
        <p>Github</p>
    </a>
</template>

<script setup>
</script>

<style scoped>
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
        position: sticky;
        gap: 1vw;
        bottom: 2vh;
        left: 100vw;
        margin-right: 3vw;
        width: fit-content;
        cursor: pointer;
    }
    @media screen and (max-width: 700px) {
       img{
        width: 4vh;
       } 
       .wrapper{
        position: inherit;
        margin-left: 90vw;
        transform: translateX(-100%);
       }
    }
</style>