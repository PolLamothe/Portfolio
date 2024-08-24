<template>
    <p>{{ props.title }}</p>
    <p>{{ props.content }}</p>
    <p>{{ props.date }}</p>
</template>

<script setup>
    const props = defineProps(["title","content","date"])
</script>

<style>
</style>