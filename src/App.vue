<template>
  <NavigationBar msg="Navigation Bar which should be utilised universally across the website." />
</template>

<script>
import NavigationBar from "./components/NavigationBar.vue"

export default {
  name: 'App',
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
