<template>
    <div class="splash-image">
        <h1 class="header1">Abhishek Pai</h1>
        <h4 class="header2">Software Engineer</h4>
        <router-view></router-view>
        <router-link to="/home">Enter</router-link>
    </div>
</template>

<script>

export default {
    name: "MainPage"
}
</script>

<style scoped>

.header1 {
    position: absolute;
    left: 50%;
    top: 75%;
    font-weight: bold;
    font-size: 500%;
    transform: translateX(-50%) translateY(-50%);
    color: aliceblue;
    text-align: center;
}

.header2 {
    position: absolute;
    left: 50%;
    top: 85%;
    font-weight: bold;
    font-size: 150%;
    transform: translateX(-50%) translateY(-50%);
    color: aliceblue;
    text-align: center;
}

a, p {
    position: absolute;
    left: 50%;
    top: 90%;
    transform: translateX(-50%) translateY(-50%);
    color: aliceblue;
    text-align: center;
}

div.splash-image {
    margin: 0px;
    padding: 0px;
    background-size: cover;
    height: 100vh;
    background-image: url('@/assets/background.JPG');
}
</style>