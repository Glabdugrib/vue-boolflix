<template>
   <div id="app">
      <input type="text" class="search-input" v-model="searchFilter" @keyup.enter="prova">
      <button class="search-btn" @click="fetchMovies">Search</button>
      <ul class="movie-list">
         <h3 v-if="filteredMovies.length > 0">Movie list</h3>
         <li v-for="movie in filteredMovies" :key="movie.id">
            <ul>
               <li><strong>Titolo: </strong>{{ movie.title }}</li>
               <li><strong>Titolo originale: </strong>{{ movie.original_title }}</li>
               <li><strong>Linguaggio: </strong>{{ movie.original_language }}</li>
               <li><strong>Voto: </strong>{{ movie.vote_average }}</li>
            </ul>
         </li>
      </ul>
   </div>
</template>

<script>
import axios from 'axios';

export default {
   name: 'App',
   components: {
      
   },
   data() {
      return {
         searchFilter: "",
         baseURL: "https://api.themoviedb.org/3",
         apiKey: "69c0e1da6ac95a6109dd23110160ecd2",
         filteredMovies: [],
      }
   },
   methods: {
      prova: function() {
         console.log(this.searchFilter);
      },
      fetchMovies: function() {
         axios.get(`${ this.baseURL }/search/movie`, {
            params: {
               api_key: this.apiKey,
               query: this.searchFilter
            }
         })
         .then( res => {
            this.filteredMovies = res.data.results;
         })
         .catch( err => {
            console.warn( err.response )
         })
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

.movie-list {

   & > li {
      margin-bottom: 20px;

      ul {
         list-style: none;
         padding: 0;
         margin: 0;
      }
   }
}
</style>
