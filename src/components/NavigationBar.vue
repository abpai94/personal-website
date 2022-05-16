<template>
    <nav class="navigation-bar">
        <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/resume">Resume</router-link></li>
            <!-- <li><a href="/Resume">Contact me</a></li> -->
        </ul>
    </nav>
    <!-- <div class="col-12 bg-light">
        <router-view />
    </div> -->
    <div>
        <!-- <p> {{ msg }} </p> -->
        <!-- <p>Testing out the navigation bar</p> -->
    </div>
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
li {
    /* position: fixed; */
    display: inline-block;
    /* left: 100; */
    /* right: 50; */
    /* top: 50; */
    /* z-index: 100; */
    /* box-sizing: 100px; */
    width: 20vw;
    /* position:inherit; */
    padding: 8px;
    /* margin: 0 auto; */
    background-color: #d44500;
    /* margin: 5; */
    /* padding: 50; */
}
</style>