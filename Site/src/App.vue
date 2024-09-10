<template>
    <link href="/css/background.css" rel="stylesheet">
    <Header :language="languageValue"></Header>
    <Landing id="Accueil" :language="languageValue"></Landing>
    <Me id="me" data-aos="fade-up" data-aos-delay="50" :language="languageValue"></Me>
    <Skills id="skill" data-aos="fade-up" data-aos-delay="50" :language="languageValue"></Skills>
    <Project id="projects" data-aos="fade-up" :language="languageValue"></Project>
    <Contact id="contact" data-aos="fade-up" :language="languageValue"></Contact>
    <Github @language="(arg)=>{languageValue = arg}" :language="languageValue"></Github>
</template>

<script setup>
    import {ref} from "vue"

    import Header from "./components/Header.vue"
    import Landing from "./components/Landing.vue"
    import Me from "./components/Me.vue"
    import Skills from "./components/Skills.vue"
    import Project from "./components/Project.vue"
    import Contact from './components/Contact.vue'
    import Github from './components/Github.vue'

    const emit = defineEmits(['language'])
    
    const languageValue = ref("English")
    if(navigator.language == "fr"){
        languageValue.value = "French"
    }
    AOS.init();
</script>

<style scoped>
</style>