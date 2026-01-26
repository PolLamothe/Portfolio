<template>
    <header>
        <div id="headerWrapper">
            <div class="bubble" :style="bubbleStyle"></div>
            <a
                :href="'#' + idTable[button]"
                v-for="(button, index) in allButton[language]"
                :key="index"
                :ref="el => { if (el) linkElements[index] = el }"
                :class="{ active: currentSection == idTable[button] }"
                >{{ button }}</a>
        </div>
        <button id="ukButton" @click="language == 'French' ? language = 'English' : language = 'French'">
            <img :src="language == 'French' ? '/img/france.png' : '/img/UK.png'">
            <p>{{language == 'French' ? 'Français' : 'English'}}</p>
        </button>
    </header>
</template>

<script setup>
    import { ref, watch, onMounted, nextTick } from "vue";

    const props = defineProps(["currentSection","language"]);
    const emit = defineEmits(['changeLanguage']);
    const language = ref("French")

    watch(language, (newVal) => {
        emit('changeLanguage', newVal);
    })

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
    #ukButton img{
        width: 1.5vw;
        height: 1.5vw;
        border-radius: 50%;
    }
    #ukButton p{
        color: white;
        margin: 0px;
        font-size: 20px;
    }
    #ukButton{
        display: flex;
        flex-direction: row;
        background: linear-gradient(to right, rgba(0,0,0,.3), rgba(255, 255, 255,.3))!important;
        background-clip: padding-box!important;
        border: solid 5px rgba(0, 0, 0, 0.3);
        border-radius: 2vw;
        align-items: center;
        gap: 1vw;
        padding-top: .25vw;
        padding-bottom: .25vw;
        padding-right: 1vw;
        margin-left: 2vw;
        backdrop-filter: blur(15px);
    }
    .bubble {
        position: absolute;
        background-color: rgba(255, 255, 255, 0.2);
        border-radius: 30px;
        transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        z-index: -1;
        opacity: 0;
    }
    #headerWrapper{
        background-color: rgba(0,0,0,.4);
        backdrop-filter: blur(15px);
        height: fit-content;
        border-radius: 40px;
        padding: 10px;
        gap : 1vw;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    header{
        display: flex;
        justify-content: center;
        align-items: center;
        position: sticky;
        margin-bottom: 2.5vh;
        top: 4vh;
        margin-left: 50%;
        transform: translateX(-50%);     
        z-index: 10;
    }

    a{
        color: lightgray;
        font-size: 20px;
        border-radius: 30px;
        padding: 10px;
        cursor: pointer;
        transition: color 1s;
        text-decoration: none;
        align-self: center;
        padding-left: 1.5vw;
        padding-right: 1.5vw;
        z-index: 1;
        padding-top: .5vw;
        padding-bottom: .5vw;
    }

    .active{
        color: white;
    }
</style>

<style scoped>
    @media screen and (max-width: 700px) {
        #headerWrapper{
            display: none;
        }
        #ukButton img{
            width: 10vw;
            height: 10vw;
            border-radius: 50%;
        }
        #ukButton{
            border-radius: 10vw;
            gap: 2vw;
            padding-top: .5vw;
            padding-bottom: .5vw;
            padding-right: 2vw;
            margin-left: 4vw;
        }
    }
</style>