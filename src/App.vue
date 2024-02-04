<template>
  <div class='container'>
    <div class='left-column'></div>
    <div class='center-column'>
      <MenuBar/>
      <ResumePage/>
    </div>
    <div class='right-column'></div>
  </div>
</template>

<script>
import MenuBar from './components/MenuBar.vue'
import ResumePage from './components/ResumePage.vue'

export default {
  name: 'App',
  components: {
    MenuBar,
    ResumePage
  }
}
</script>

<style>
body {
  padding: 5px 5px 5px 5px;
}

.container {
  display: flex;
  grid-template-columns: 1fr 1fr auto 1fr
}

.left-column,
.right-column {
  flex: 1;
}

.center-column {
  padding: 5px 5px 5px 5px;
  max-width: 900px;
  flex: 0 0 auto;
}

* {
  margin: 0px;
  padding: 0px;
}
</style>
