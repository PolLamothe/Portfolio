<template>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Climate+Crisis&display=swap" rel="stylesheet">
    <link href="/css/background.css" rel="stylesheet">
    <Header :language="languageValue" :currentSection="currentSection"></Header>
    <div ref="landingSection">
        <Landing :language="languageValue"></Landing>
    </div>
    <Activities :language="languageValue"></Activities>
    <div ref="parcoursSection">
        <Parcours :language="languageValue"></Parcours>
    </div>
    <div ref="competencesSection">
        <Compétences :language="languageValue"></Compétences>
    </div>
    <div ref="projectsSection">
        <Projects :language="languageValue"></Projects>
    </div>
</template>

<script setup>
    import {ref, onMounted, onUnmounted} from "vue"

    import Header from "./components/Header.vue"
    import Landing from "./components/Landing.vue"
    import Activities from "./components/Activities.vue"
    import Parcours from "./components/Parcours.vue"
    import Compétences from "./components/Compétences.vue"
    import Projects from "./components/Projects.vue"

    const emit = defineEmits(['language'])
    
    const languageValue = ref("English")
    if(navigator.language == "fr"){
        languageValue.value = "French"
    }
    AOS.init();

    const currentSection = ref('accueil');
    const landingSection = ref(null);
    const parcoursSection = ref(null);
    const competencesSection = ref(null);
    const projectsSection = ref(null);

    const sections = {
        'accueil': landingSection,
        'studyExperiences': parcoursSection,
        'compétences': competencesSection,
        'projects': projectsSection
    };

    const handleScroll = () => {
        const scrollPosition = window.scrollY + window.innerHeight / 2;
        for (const sectionId in sections) {
            const sectionRef = sections[sectionId];
            if (sectionRef.value) {
                const sectionTop = sectionRef.value.offsetTop;
                const sectionHeight = sectionRef.value.offsetHeight;
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    currentSection.value = sectionId;
                    return;
                }
            }
        }
    };

    onMounted(() => {
        window.addEventListener('scroll', handleScroll);
    });

    onUnmounted(() => {
        window.removeEventListener('scroll', handleScroll);
    });
</script>

<style scoped>
</style>