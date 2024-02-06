<template>
  <div class='container'>
    <div class='left-column'></div>
    <div class='center-column'>
      <div>
        <MenuBar/>
      </div>
      <router-view/>
    </div>
    <div class='right-column'></div>
  </div>
</template>

<script>
import MenuBar from './views/menu-bar.vue'

export default {
  name: 'App',
  components: {
    MenuBar
  }
}
</script>

<style>
* {
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    /* background-color: #303030;
    color: white; */
}

body {
  padding: 5px 5px 5px 5px;
}

.container {
  margin: 0 auto;
  display: flex;
  grid-template-columns: 1fr 1fr auto 1fr
}

.left-column,
.right-column {
  flex: 1;
}

.center-column {
  padding: 5px 5px 5px 5px;
  max-width: 850px;
}

* {
  margin: 0px;
  padding: 0px;
}
</style>
