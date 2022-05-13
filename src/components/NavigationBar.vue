<template>
    <nav class="navigation-bar">
        <ul>
            <li><a href=#app>Home</a></li>
            <li><a href="#resume">Resume</a></li>
        </ul>
    </nav>
    <div>
        <p> {{ msg }} </p>
        <p>Testing out the navigation bar</p>
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
    position: relative;
    display: inline-block;
    /* box-sizing: 100px; */
    width: 400px;
    /* position:inherit; */
    padding: 8px;
    /* margin: 0 auto; */
    background-color: #d44500;
    /* margin: 5; */
    /* padding: 50; */
}
</style>