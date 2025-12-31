<template>
    <div id="contact">
        <div v-for="element in data" :key="element[0]" class="localWrapper" @click="handleClick(element)">
            <img :src="'/'+element[1]" :style="element[2] ? 'filter : invert(100%)' : ''">
            <p>{{ element[0] }}</p>
        </div>
    </div>
</template>

<script setup>
    const data = [
        ["06 29 00 24 56","img/phone.png",true],
        ["lamothepol@gmail.com","svg/mail.svg",true],
        ["Pol Lamothe","img/social/Linkedin.png",false,"https://www.linkedin.com/in/pol-lamothe/"]
    ]

    const handleClick = (element) => {
        if (element.length > 3) {
            window.open(element[3])
        }
    }
</script>

<style scoped>
    #contact{
        gap: 10vw;
        margin-left: 50vw;
        transform: translateX(-50%);
        padding-top: 1vw;
        padding-bottom: 1vw;
        width: 100vw;
        background: rgba(0, 0, 0, .6);
        justify-content: center;
        margin-top: 2vw;
    }
    .localWrapper{
        gap: .5vw;
    }
    img{
        width: 1vw;
    }
    p{
        color: white;
        width: max-content;
    }
    div{
        display: flex;
        flex-direction: row;
        align-items: center;
        width: fit-content;
    }
    p{
        color: white;
    }
</style>