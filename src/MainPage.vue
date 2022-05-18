<template>
    <div class="splash-image">
        <h1>Abhishek Pai</h1>
        <h4>Software Engineer</h4>
        <!-- <p>
            <router-link to="/home">Enter</router-link>
        </p> -->
        <router-view></router-view>
        <a href="/home">Enter</a>
    </div>
</template>

<script>

export default {
    name: "MainPage",
    metaInfo: {
        title: "Main",
        titleTemplate: '%s - Abhishek Pai | Software Engineer'
    }
}
</script>

<style scoped>
.body {
    margin: 0px;
    padding: 0px;
}

h1 {
    position: absolute;
    left: 50%;
    top: 75%;
    font-weight: bold;
    font-size: 500%;
    transform: translateX(-50%) translateY(-50%);
    color: aliceblue;
    text-align: center;
}

h4 {
    position: absolute;
    left: 50%;
    top: 85%;
    font-weight: bold;
    font-size: 150%;
    transform: translateX(-50%) translateY(-50%);
    color: aliceblue;
    text-align: center;
}

a,
p {
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