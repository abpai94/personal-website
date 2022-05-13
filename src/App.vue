<template>
  <NavigationBar msg="Navigation Bar which should be utilised universally across the website." />
  <!-- <Resume testMessage="Test page to display resume." /> -->
</template>

<script>
import NavigationBar from "./components/NavigationBar.vue"
// import Resume from "./components/Resume.vue"

export default {
  name: 'App',
  components: {
    NavigationBar
    // Resume
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
