<template>
    <div id="wrapper">
        <img src="/img/exp/sac.svg" id="icon">
        <div v-for="item in currentData" class="itemWrapper">
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
    import { computed } from 'vue';
    const props = defineProps(["language"]);

    const data = {
        French: {
            "CDD" : {
                "date" : "Juil 2025 - Aout 2025 - 6 semaines",
                "description" : "Maintien et approfondissement des missions réalisées durant mon stage.",
                "name" : "CDD - Développeur",
                "image" : "mieres.jpg"
            },
            "Stage" : {
                "date" : "avril 2025 - juin 2025 - 10 semaines",
                "description" : "Participation à la refonte technologique d’un système de suivi d’équipements agricoles",
                "name" : "Stagiaire - Développeur",
                "image" : "mieres.jpg"
            },
            "Freelance" : {
                "date" : "juillet 2024 - 1 mois",
                "description" : "Création d’ un programme de contrôle d’ un bot d’achat et de vente d’objets virtuels.",
                "name" : "Freelance",
                "image" : "js.png"
            }
        },
        English: {
            "CDD" : {
                "date" : "Jul 2025 - Aug 2025 - 6 weeks",
                "description" : "Maintenance and deepening of the missions carried out during my internship.",
                "name" : "Fixed-term contract - Developer",
                "image" : "mieres.jpg"
            },
            "Stage" : {
                "date" : "April 2025 - June 2025 - 10 weeks",
                "description" : "Participation in the technological redesign of an agricultural equipment tracking system",
                "name" : "Intern - Developer",
                "image" : "mieres.jpg"
            },
            "Freelance" : {
                "date" : "July 2024 - 1 month",
                "description" : "Creation of a control program for a virtual item buying and selling bot.",
                "name" : "Freelance",
                "image" : "js.png"
            }
        }
    }

    const currentData = computed(() => data[props.language] || data['French']);
</script>

<style scoped>
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
        background: rgb(117, 41, 49);
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