<template>
   <div id="app">
      <Header />
      <main>
         <!-- <h2>Movies</h2> -->
         <div class="container">
            <div class="row">
               <Card v-for="movie in movies" :key="movie.id" :element="movie"/>
            </div>
            
         </div>

         <!-- <h2>TV Series</h2> -->
         <div class="container">
            <div class="row">
               <Card v-for="serie in series" :key="serie.id" :element="serie"/>
            </div>
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

@import '~@fortawesome/fontawesome-free/css/all.css';

#app {
   font-family: Avenir, Helvetica, Arial, sans-serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   background-color: #141414;
   // background-color: green;
   min-height: 100vh;
   // min-width: 100vw;
   padding: 70px 0;
}

* {
   box-sizing: border-box;
   margin: 0;
   padding: 0;
}

.img {
   display: block;
}

ul {
   list-style: none;
}

.container {
   padding: 0 60px;
   margin: 0 auto;

   .row {
      padding: 20px 0;
      display: flex;
      gap: 10px;
      overflow-x: auto;
      margin-bottom: 30px;
   }
}
</style>
