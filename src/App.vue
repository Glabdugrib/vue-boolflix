<template>
  <div id="app">
     <input type="text" class="search-input">
     <button class="search-btn">Search</button>
     <ul class="movie-list">
        <li>Film</li>
     </ul>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
   //  HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
