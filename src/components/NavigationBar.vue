<template>
    <section class="navigation-bar">
        <button class="buttons" onclick="location.href='/'">Home</button>
        <!-- <router-link to="/">Home</router-link> -->
        <button class="buttons" onclick="location.href='/resume'">Resume</button>
        <!-- <router-link to="/resume">Resume</router-link> -->
    </section>
    <!-- <div class="col-12 bg-light">
        <router-view />
    </div> -->
    <!-- <div>
        <p> {{ msg }} </p>
        <p>Testing out the navigation bar</p>
    </div> -->
</template>

<script>

export default {
    name: 'NavigationBar',
    props: {
        msg: String
    }
}

</script>

<style>
* {
    margin: 0px;
    top: 0;
    left: 0px;
    right: 0px;
    padding: 8px;
}

section.navigation-bar {
    text-align: center;
    background-color: #d44500;
    position: fixed;
    height: 50px;
    width: 100%;
    top: 0;
    left: 0px;
    right: 0px;
}

button.buttons {
    padding: 10px;
    font-size: 20px;
    display: inline-block;
    background-color: #d44500;
    color: aliceblue;
    border-color: aliceblue;
    border-style: 1px;
    border-radius: 25%;
    font-family: monospace;
}
</style>