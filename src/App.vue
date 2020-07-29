<template>
  <div id="app">
    <Navbar />
    <Table />
  </div>
</template>

<script>
import Table from './components/Table.vue'
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Table,
    Navbar
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
  margin-left: auto;
  margin-right: auto;
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: row;
}
</style>
