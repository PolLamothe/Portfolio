<template>
    <header>
        <div class="bubble" :style="bubbleStyle"></div>
        <a
            :href="'#' + idTable[button]"
            v-for="(button, index) in allButton[props.language]"
            :key="index"
            :ref="el => { if (el) linkElements[index] = el }"
            :class="{ active: props.currentSection == idTable[button] }"
            >{{ button }}</a
        >
    </header>
</template>

<script setup>
    import { ref, watch, onMounted, nextTick } from "vue";

    const props = defineProps(["language", "currentSection"]);

    const allButton = {
        French: ["Accueil", "Études/Expériences", "Compétences", "Projets"],
        English: ["Home", "Education/Experiences", "Skills", "Projects"],
    };

    const idTable = {
        Accueil: "accueil",
        "Études/Expériences": "studyExperiences",
        "À propos de moi": "me",
        Compétences: "compétences",
        Projets: "projects",
        Home: "accueil",
        "Education/Experiences": "studyExperiences",
        Skills: "compétences",
        Projects: "projects",
    };

    const linkElements = ref([]);
    const bubbleStyle = ref({});

    const updateBubble = () => {
        nextTick(() => {
            const activeButton = linkElements.value.find(el => el.classList.contains('active'));
            if (activeButton) {
                bubbleStyle.value = {
                    left: `${activeButton.offsetLeft}px`,
                    width: `${activeButton.offsetWidth}px`,
                    height: `${activeButton.offsetHeight}px`,
                    opacity: 1,
                };
            }
        });
    };

    onMounted(updateBubble);
    watch(() => props.currentSection, updateBubble);
    watch(() => props.language, () => {
        linkElements.value = [];
        nextTick(updateBubble);
    });
</script>

<style scoped>
    .bubble {
        position: absolute;
        background-color: rgba(255, 255, 255, 0.2);
        border-radius: 30px;
        transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        z-index: -1;
        opacity: 0;
    }
    img{
        height: 100%;
    }
    header{
        display: flex;
        justify-content: center;
        align-items: center;
        position: sticky;
        margin-bottom: 2.5vh;
        top: 4vh;
        width: fit-content;
        margin-left: 50%;
        transform: translateX(-50%);
        background-color: rgba(0,0,0,.4);
        backdrop-filter: blur(15px);
        height: fit-content;
        z-index: 10;
        border-radius: 40px;
        padding: 10px;
        gap : 1vw;
    }

    a{
        color: lightgray;
        font-family: Roboto;
        font-size: 20px;
        border-radius: 30px;
        padding: 10px;
        cursor: pointer;
        transition: color 1s;
        text-decoration: none;
        align-self: center;
        padding-left: 1.5vw;
        padding-right: 1.5vw;
        padding-top: 1vh;
        padding-bottom: 1vh;
        z-index: 1;
    }

    .active{
        color: white;
    }

    @media screen and (max-width: 700px) {
        header{
            display: none;
        }
    }
</style>