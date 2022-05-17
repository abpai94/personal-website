<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <Resume msg="Using this to test the Resume." />
</template>

<script>
import Resume from "./components/Resume.vue"

export default {
  name: 'App',
  components: {
    Resume
  }
}
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
}

/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
