<template>
<h1>
  My personal website.
</h1>
<NavigationBar>

</NavigationBar>
  <!-- <NavigationBar msg="Navigation Bar which should be utilised universally across the website." /> -->
  <!-- <Resume></Resume> -->

      <!-- <div class="col-12 bg-light">
        <router-view />
    </div> -->

</template>

<script>
import NavigationBar from "./NavigationBar.vue"
// import Resume from "./Resume.vue"

export default {
  name: 'HomePage',
  components: {
    NavigationBar
}
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
