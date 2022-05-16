<template>

    <body>
        <div class="background-image">
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
h1 {
    font-weight: bold;
    padding-top: 600px;
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

.background-image {
    background-size: cover;
    padding: 0 0 0 0;
    height: 1024px;
    padding-top: 1px;
    background-image: url('@/assets/background.JPG');
}
</style>