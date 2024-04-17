<template>
    <Header></Header>
    <Landing id="Accueil"></Landing>
    <Me id="me" data-aos="fade-up" data-aos-delay="50"></Me>
    <Skills id="skill" data-aos="fade-up" data-aos-delay="50"></Skills>
    <Project id="projects" data-aos="fade-up"></Project>
</template>

<script setup>
    import Header from "./components/Header.vue"
    import Landing from "./components/Landing.vue"
    import Me from "./components/Me.vue"
    import Skills from "./components/Skills.vue"
    import Project from "./components/Project.vue"

    AOS.init();
</script>

<style>
</style>