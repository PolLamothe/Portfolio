<template>
    <div id="wrapper">
        <img src="/img/school/studentIcon.svg" id="icon">
        <div v-for="(item, key, index) in data" class="itemWrapper" data-aos="fade-up" :data-aos-delay="index * 200">
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
    import { computed } from 'vue';

    const props = defineProps(["language"]);

    const translations = {
        "French": {
            "Polytech Nantes": {
                "date": "sept 2023 - juin 2028",
                "description": "Étudiant en cycle ingénieur en informatique",
                "name": "Polytech Nantes",
                "image": "polytech.ico"
            },
            "IUT de Nantes": {
                "date": "sept 2023 - juin 2025",
                "description": "BUT Informatique parcours Réalisation d’applications - Parcours élève ingénieur Polytech (PEIP D) - Rang 10/86",
                "name": "IUT de Nantes",
                "image": "IUT.png"
            },
            "Le Likès Quimper": {
                "date": "sept 2020 - juin 2023",
                "description": "Baccalauréat Science Technologique de l'Ingénieurie et du Développement Durable - Mention Bien 15,5/20",
                "name": "Le Likès Quimper",
                "image": "likes.png"
            }
        },
        "English": {
            "Polytech Nantes": {
                "date": "Sept 2023 - June 2028",
                "description": "Computer Science Engineering Student",
                "name": "Polytech Nantes",
                "image": "polytech.ico"
            },
            "IUT de Nantes": {
                "date": "Sept 2023 - June 2025",
                "description": "BUT Computer Science, Application Development track - Polytech Engineering Student Track (PEIP D) - Rank 10/86",
                "name": "IUT de Nantes",
                "image": "IUT.png"
            },
            "Le Likès Quimper": {
                "date": "Sept 2020 - June 2023",
                "description": "Baccalauréat in Engineering Sciences and Sustainable Development - Honors 15.5/20",
                "name": "Le Likès Quimper",
                "image": "likes.png"
            }
        }
    };

    const data = computed(() => translations[props.language] || translations["French"]);
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
        transition: transform 0.3s ease, background-color 0.3s ease;
        padding: 1vw;
        border-radius: 0.5vw;
    }
    .itemWrapper:hover {
        transform: translateX(10px);
        background-color: rgba(255, 255, 255, 0.1);
    }
    .itemWrapper img{
        width: 3vw;
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