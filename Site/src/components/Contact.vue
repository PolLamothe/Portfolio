<template>
    <div>
        <img src="/img/tech/python.webp" id="python">
        <div class="wrapper" id="Contact">
            <h1>{{ text["title"][props.language] }}</h1>
            <p><u>{{ text["phone"][props.language] }}:</u> 06 59 00 24 56</p>
            <p><u>Email:</u> lamothepol@gmail.com</p>
        </div>
    </div>
</template>

<script setup>
    const props = defineProps({"language":String})

    const text = {
        "title":{
            "French":"Me contacter",
            "English":"Contact me"
        },
        "phone":{
            "French":"Téléphone",
            "English":"Phone"
        }
    }
</script>

<style scoped>
    #python{
        position: absolute;
        width: 5vw;
        right: 10vw;
        transform: rotate(10deg);
    }
    h1{
        color: white;
        font-family: Roboto;
        text-align: center;
        margin-bottom: 5vh;
    }
    p{
        color: white;
        font-family: Roboto;
        text-align: center;
        font-size: 25px;
    }
</style>