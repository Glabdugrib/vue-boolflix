<template>
   <div id="app">
      <Header />
      <main>
         <h2>Movies</h2>
         <div class="container movie-grid">
            <Card v-for="movie in movies" :key="movie.id" :element="movie"/>
         </div>

         <h2>TV Series</h2>
         <div class="container movie-grid">
            <Card v-for="serie in series" :key="serie.id" :element="serie"/>
         </div>
      </main>
      
   </div>
</template>

<script>
import Header from './components/BoolflixHeader.vue';
import Card from './components/CardItem.vue';

import state from './store.js';

export default {
   name: 'App',
   components: {
      Header,
      Card,
   },
   computed: {
      movies: function() {
         return state.movies;
      },
      series: function() {
         return state.series;
      },
      search: function() {
         return state.search;
      }
   }
}
</script>

<style lang="scss">
#app {
   font-family: Avenir, Helvetica, Arial, sans-serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
}

* {
   box-sizing: border-box;
   margin: 0;
   padding: 0;
}

header, main {
   padding: 20px 50px;
}
</style>
