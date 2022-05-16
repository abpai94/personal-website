<template>

    <body>
        <div class="splash-image">
            <h1>Abhishek Pai</h1>
            <h4>Software Engineer</h4>
            <p>
                <a href="/home">Enter</a>
            </p>
        </div>
    </body>
</template>

<script>

export default {
    name: "HomePage"
}

</script>

<style>
* {
    margin: 0px;
    color: aliceblue;
    text-align: center;
}

h1 {
    position: absolute;
    left: 50%;
    top: 75%;
    font-weight: bold;
    font-size: 500%;
    transform: translateX(-50%) translateY(-50%);
}

h4 {
    position: absolute;
    left: 50%;
    top: 85%;
    font-weight: bold;
    font-size: 150%;
    transform: translateX(-50%) translateY(-50%);
}

a, p {
    position: absolute;
    left: 50%;
    top: 90%;
    transform: translateX(-50%) translateY(-50%);
}

.splash-image {
    background-size: cover;
    height: 100vh;
    background-image: url('@/assets/background.JPG');
}
</style>