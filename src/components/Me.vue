<template>
    <div class="wrapperMe">
        <img src="/src/assets/img/tech/VueJS.png" id="vue">
        <img src="/src/assets/img/tech/Linux.png" id="linux">
        <h1>À propos de moi</h1>
        <div id="content">
            <img src="../assets/img/me.jpg" id="picture">
            <p id="main" data-aos="fade-left" data-aos-delay="200">Lorem ipsum dolor, sit amet consectetur adipisicing elit. A sit necessitatibus debitis ex amet commodi alias odit delectus explicabo nisi tempora voluptate libero, voluptas vero soluta. Quidem ipsa mollitia dolor? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam cum accusantium vero architecto sint inventore reiciendis ea ut nemo cupiditate, unde tenetur, illo error, veritatis iusto officiis! Maiores, tempore voluptate.</p>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>
    #linux{
        position: absolute;
        width: 6vw;
        left: 4vw;
        transform: rotate(10deg);
        margin-top: 5vh;
    }
    #vue{
        position: absolute;
        width: 7vw;
        right: 6vw;
        transform: rotate(-7deg);
        margin-top: 40vh;
    }
    .wrapperMe{
        padding-top: 5vh;
    }
    h1{
        color: white;
        text-align: center;
        font-family: Roboto;
        margin-bottom: 10vh;
    }
    iframe{
        grid-column: 2;
        grid-row: 2;
        width: 30vw;
        height: 60vh;
        margin-left: 10vw;
    }
    #content{
        display: grid;
        width: fit-content;
        margin-left: 50%;
        transform: translateX(-50%);
    }
    #main{
        grid-column: 2;
        grid-row: 1;
        width: 30vw;
        color: white;
        font-family: Roboto;
        margin-left: 5vw;
        font-size: 20px;
        border-radius: 50px;
        padding: 1.5vw;
        height: fit-content;
    }
    #name{
        font-size: 25px;
    }
    #picture{
        width: 20vw;
        border-radius: 50px;
        grid-column: 1;
        grid-row: 1;
    }
</style>