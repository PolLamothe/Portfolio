<template>
    <div id="compétences">
         <h1>{{ title }}</h1>
        <div id="globalWrapper">
            <div v-for="categorie in Object.keys(skills)" class="globalWrapper" ref="categoryRefs">
                <div style="display: flex;flex-direction: row;align-items: center;gap: 1vw;">
                    <p class="categorieTitle">{{ translateCategory(categorie) }}</p>
                    <div class="titleDecoration"></div>
                </div>  
                <div class="categorieWrapper">
                    <div class="elementDecoration"></div>
                    <div class="elementsContainer">
                        <div v-for="(element, index) in skills[categorie]" :key="element" class="elementWrapper">
                            <img :src="'/img/tech/'+element+'.png'">
                            <p>{{ element }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div id="circle1"></div>
        </div>
    </div>
</template>
<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue';

const props = defineProps(["language"]);

const translations = {
    French: {
        title: "Mes Compétences",
        categories: {
            "Langages": "Langages",
            "Backend": "Backend",
            "Frontend": "Frontend",
            "Programmation": "Programmation"
        }
    },
    English: {
        title: "My Skills",
        categories: {
            "Langages": "Languages",
            "Backend": "Backend",
            "Frontend": "Frontend",
            "Programmation": "Programming"
        }
    }
};

const title = computed(() => translations[props.language]?.title || translations["French"].title);

const translateCategory = (category) => {
    return translations[props.language]?.categories[category] || category;
};

const skills = {
    "Langages":["Javascript","Python","Kotlin","Java","SQL","Golang","PHP"],
    "Backend" : ["NodeJS","MongoDB","Laravel","Docker","SpringBoot","Jenkins"],
    "Frontend" : ["VueJS","React"],
    "Programmation" : ["MVC","Design Pattern","OOP","Numpy"]
};

const categoryRefs = ref([]);
const observers = [];

onMounted(() => {
    categoryRefs.value.forEach(el => {
        if (!el) return;
        
        const list = el.querySelector('.elementsContainer');
        if (!list) return;
        const children = Array.from(list.children);

        // Set initial state for animations
        children.forEach(child => {
            child.style.transition = 'none';
            child.style.opacity = 0;
            child.style.transform = 'translateX(-100px)';
        });

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    children.forEach((child, index) => {
                        const delay = index * 100;
                        setTimeout(() => {
                            child.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                            child.style.opacity = 1;
                            child.style.transform = 'translateX(0)';
                        }, delay);
                    });
                } else {
                    children.forEach(child => {
                        child.style.transition = 'none';
                        child.style.opacity = 0;
                        child.style.transform = 'translateX(-100px)';
                    });
                }
            });
        }, { threshold: 0.2 }); // Trigger when 20% of the element is visible

        observer.observe(el);
        observers.push(observer);
    });
});

onBeforeUnmount(() => {
    observers.forEach(observer => {
        if (observer) {
            observer.disconnect();
        }
    });
});
</script>

<style scoped>
    #circle1{
        position: absolute;
        border-radius: 50%;
        display: inline-block;
        background: radial-gradient(62.94% 62.94% at 18.75% 47.07%, rgba(255, 82, 111, 0.5) 0%, rgba(255, 82, 111, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;    
        width: 50vw;
        height: 50vw;
        top: 50%;
        transform: rotate(120deg);
        z-index: -1;
    }
    #globalWrapper{
        width: fit-content;
        margin-left: 50vw;
        transform: translateX(-50%);
    }
    .titleDecoration{
        width: 32px;
        height: 4px;
        background-color: #FFE2AA;
    }
    h1{
        color: #FFE2AA;
        font-family: "Climate Crisis", sans-serif;
        text-align: center;
        font-size: 40px;
    }
    .categorieTitle{
        font-size: 24px;
        color: #FFE2AA;
    }
    .elementWrapper img{
        width: 4vw;
        height: 4vw;
        object-fit: contain;
        background-color: white;
        padding: .5vw;
        border-radius: 50%;
    }
    .elementWrapper p{
        margin-bottom: 2vw;
    }
    .elementWrapper{
        color: white;
        text-align: center;
        backdrop-filter: blur(50px);
        background: rgba(0,0,0,.3);
        width: fit-content;
        border-radius: 4vw;
        padding: 10px;
        height: fit-content;
        display: flex;
        flex-direction: column;
        gap: 1vw;
        font-size: 20px;
        align-items: center;
    }
    .elementDecoration{
        background-color: #FF7C77;
        position: absolute;
        width: 105%;
        height: 50%;
        top: 25%;
        left: -2.5%;
        border-radius: 10vw;
    }
    .categorieWrapper{
        width: fit-content;
        position: relative;
    }
    .elementsContainer {
        display: flex;
        flex-direction: row;
        width: fit-content;
        gap: .5vw;
        position: relative;
    }
</style>

<style scoped>
    @media screen and (max-width: 700px) {
        .categorieWrapper{
            margin-top: 10vw;
            margin-bottom: 10vw;
            width: 100%;
        }
        .elementWrapper img{
            width: 10vw;
            height: 10vw;
        }
        .elementWrapper{
            width: 40%;
        }
        .elementDecoration{
            padding-top: 5vw;
            padding-bottom: 5vw;
            height: 100%;
            top: 50%;
            width: 110%;
            left: 50%;
            transform: translate(-50%,-50%);
        }
        .elementsContainer{
            flex-direction: row;
            flex-wrap: wrap;
            display: flex;
            gap: 3vw;
            align-items: center;
            justify-content: center;
            width: 100%;
        }
        .globalWrapper{
            align-items: center;
            display: flex;
            flex-direction: column;
            width: 80vw;
        }
    }
</style>