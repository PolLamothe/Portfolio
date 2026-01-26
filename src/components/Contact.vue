<template>
    <div id="contact">
        <div id="wrapper">
            <div v-for="element in data" :key="element[0]" class="localWrapper" @click="handleClick(element)">
            <img :src="'/'+element[1]" :style="element[2] ? 'filter : invert(100%)' : ''">
            <p>{{ element[0] }}</p>
            </div>
        </div>
        <p>{{props.language == 'French' ? 'Site Web Designé Par' : 'Website Designed By'}} <a href="https://theofriant.framer.website/?utm_source=pol&utm_medium=work&utm_content=sitePol" target="_blank">Théo Friant</a></p>
    </div>
</template>

<script setup>
    const props = defineProps(["language"]);

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
        padding-top: 1vw;
        padding-bottom: 1vw;
        width: 100vw;
        background: rgba(0, 0, 0, .6);
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
    #wrapper{
        gap: 10vw;
    }
    #wrapper,#wrapper div{
        display: flex;
        flex-direction: row;
        align-items: center;
        width: fit-content;
        justify-content: center; 
    }
    #contact{
        align-items: center;
        justify-content: center;
        display: flex;
        flex-direction: column;
    }
    p{
        color: white;
    }
    a{
        text-decoration: none;
        color: white;
    }
</style>

<style scoped>
    @media screen and (max-width: 700px) {
        .localWrapper{
            gap: 5vw;
        }
        #wrapper img{
            width: 8vw;
        }
        #wrapper{
            display: flex;
            flex-direction: column;
            gap: 5vw;
            margin-bottom: 5vw;
            padding-top: 5vw;
        }
    }
</style>