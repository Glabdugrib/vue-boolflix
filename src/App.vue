<template>
   <div id="app">
      <Header />
      <main>
         <!-- <h2>Movies</h2> -->
         <div class="container">
            <section class="movie-section" v-if="movies.length > 0">
               <h2 class="section-title">Movies</h2>
               <div class="card-wrapper">
                  <Card v-for="(movie,i) in movies" :key="movie.id" :element="movie" :cast="moviesCast[i]"/>
               </div> 
            </section>
            
         </div>

         <!-- <h2>TV Series</h2> -->
         <div class="container">
            <section class="movie-section" v-if="series.length > 0">
               <h2 class="section-title">TV Series</h2>
               <div class="card-wrapper">
                  <Card v-for="(serie,i) in series" :key="serie.id" :element="serie" :cast="seriesCast[i]"/>
               </div> 
            </section>
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
      },
      moviesCast: function() {
         return state.moviesCast;
      },
      seriesCast: function() {
         return state.seriesCast;
      },
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

   .movie-section {
      padding-top: 20px;
      margin-bottom: 30px;

      .section-title {
         font-size: 26px;
         font-weight: bold;
         color: rgba($color: white, $alpha: 0.9);
      }

      .card-wrapper {
         display: flex;
         gap: 10px;
         overflow-x: auto;
         padding: 20px 0;

         &::-webkit-scrollbar {
         height: 8px;
         }
         &::-webkit-scrollbar-track {
            background: rgba($color: black, $alpha: 0.3);
            border-radius: 10px;
         }
         &::-webkit-scrollbar-thumb {
            background: rgba($color: white, $alpha: 0.1);
            border-radius: 10px;
         }
         &::-webkit-scrollbar-thumb:hover {
            background: rgba($color: white, $alpha: 0.2);
            // cursor: pointer;
         }
      } 
   }
}
</style>
