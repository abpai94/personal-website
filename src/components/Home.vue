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
}
h1 {
    font-weight: bold;
    text-align: center;
    font-size: 500%;
    color: aliceblue;
}

h4 {
    text-align: center;
    font-weight: bold;
    font-size: 150%;
    color: aliceblue;
}

a, p {
    text-align: center;
    color: aliceblue;
}

.splash-image {
    background-size: cover;
    height: 100vh;
    background-image: url('@/assets/background.JPG');
}
</style>