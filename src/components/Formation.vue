<template>
    <div id="wrapper">
        <img src="/img/school/studentIcon.svg" id="icon">
        <div v-for="item in data" class="itemWrapper">
            <p class="date">{{item.date}}</p>
            <div style="display: flex; flex-direction: row">
                <p class="name">{{item.name}}</p>
                <img :src="'/img/school/'+item.image">
            </div>
            <p class="description">{{item.description}}</p>
        </div>
    </div>
</template>

<script setup>
    let data = {
        "Polytech Nantes" : {
            "date" : "sept 2023 - juin 2028",
            "description" : "Diplôme d'ingénieur en Informatique",
            "name" : "Polytech Nantes",
            "image" : "polytech.ico"
        },
        "IUT de Nantes" : {
            "date" : "sept 2023 - juin 2025",
            "description" : "BUT en Informatique parcours Réalisation d’applications - Parcours élève ingénieur Polytech (PEIP D)",
            "name" : "IUT de Nantes",
            "image" : "IUT.png"
        },
        "Le Likès Quimper" : {
            "date" : "sept 2020 - juin 2023",
            "description" : "Baccalauréat Science Technologique de l'Ingénieurie et du Développement Durable - Mention Bien 15,5/20",
            "name" : "Le Likès Quimper",
            "image" : "likes.png"
        }
    }
</script>

<style scoped>
    p{
        font-family: Roboto;
    }
    .itemWrapper div{
        align-items: center;
        gap: 1vw    ;
    }
    .date{
        color: rgba(255,255,255,.75);
        margin-top: 0px;
    }
    .name{
        color: white;
    }
    .description{
        width: 100%;
        text-align: justify;
        color: rgba(255,255,255,.75);
    }
    .itemWrapper{
        display: flex;
        flex-direction: column;
        border-left: solid 2px white;
        padding-left: 1vw;
        margin-top: 1.5vw;
    }
    .itemWrapper img{
        width: 2.5vw;
        background-color: white;
        border-radius: .5vw;
    }
    #wrapper{
        background: rgba(199,107,82,.4);
        width: fit-content;
        padding: 1vw;
        border-radius: 1vw;
        width: 25vw;
    }
    #icon{
        width: 1.5vw;
        background-color: #FFE2AA;
        border-radius: 50%;
        padding: .2vw;
        color: #5A303E;
    }
</style>