<template>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Climate+Crisis&display=swap" rel="stylesheet">
    <link href="/css/background.css" rel="stylesheet">
    <Header :language="languageValue"></Header>
    <Landing></Landing>
    <Activities></Activities>
</template>

<script setup>
    import {ref} from "vue"

    import Header from "./components/Header.vue"
    import Landing from "./components/Landing.vue"
    import Activities from "./components/Activities.vue"

    const emit = defineEmits(['language'])
    
    const languageValue = ref("English")
    if(navigator.language == "fr"){
        languageValue.value = "French"
    }
    AOS.init();
</script>

<style scoped>
</style>