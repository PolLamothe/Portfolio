<template>
    <div id="wrapper">
        <img src="/img/exp/sac.svg" id="icon">
        <div v-for="item in data" class="itemWrapper">
            <p class="date">{{item.date}}</p>
            <div style="display: flex; flex-direction: row">
                <p class="name">{{item.name}}</p>
                <img :src="'/img/exp/'+item.image">
            </div>
            <p class="description">{{item.description}}</p>
        </div>
    </div>
</template>

<script setup>
    let data = {
        "CDD" : {
            "date" : "Juil 2025 - Aout 2025 - 6 semaines",
            "description" : "Maintien et approfondissement des missions réalisées durant mon stage.",
            "name" : "CDD - Développeur",
            "image" : "mieres.jpg"
        },
        "Stage" : {
            "date" : "avril 2025 - juin 2025 - 10 semaines",
            "description" : "Participation à la refonte technologique d’un système de suivi d’équipements agricoles : intégration de nouvelles technologies, amélioration des performances, de la fiabilité et de l’ergonomie des interfaces. Contribution à l’ optimisation de l’architecture pour en faciliter la maintenance, l’évolutivité et la documentation.",
            "name" : "Stagiaire",
            "image" : "mieres.jpg"
        },
        "Freelance" : {
            "date" : "juillet 2024 - 1 mois",
            "description" : "Création d’ un programme de contrôle d’ un bot d’achat et de vente d’objets virtuels. Ce projet a nécessité une bonne compréhension du besoin du client ainsi qu’une grande fiabilité afin de ne pas entraîner de perte monétaire",
            "name" : "Freelance",
            "image" : "js.png"
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
        background: rgba(88,31,37,.4);
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