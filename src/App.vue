<template>
   <div id="app">
      <input type="text" class="search-input" v-model="searchFilter" @keyup.enter="searchTvMovies">
      <button class="search-btn" @click="searchTvMovies">Search</button>
      <ul class="movie-list">
         <h3 v-if="filteredMovies.length > 0">Movie list</h3>
         <li v-for="movie in filteredMovies" :key="movie.id">
            <ul>
               <li><strong>Titolo: </strong>{{ movie.title }}</li>
               <li><strong>Titolo originale: </strong>{{ movie.originalTitle }}</li>
               <li v-if="movie.lang === 'it'">
                  <strong>Linguaggio: </strong>
                  <img src="./assets/img/italy.png" alt="">
               </li>
               <li v-else-if="movie.lang === 'fr'">
                  <strong>Linguaggio: </strong>
                  <img src="./assets/img/france.png" alt="">
               </li>
               <li v-else-if="movie.lang === 'en'">
                  <strong>Linguaggio: </strong>
                  <img src="./assets/img/united-kingdom.png" alt="">
               </li>
               <li v-else><strong>Linguaggio: </strong>{{ movie.lang }}</li>
               <li><strong>Voto: </strong>{{ movie.vote }}</li>
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
      searchTvMovies: function() {
         this.filteredMovies = [];
         this.fetchMovies();
         this.fetchTv();
         
      },
      fetchMovies: function() {
         axios.get(`${ this.baseURL }/search/movie`, {
            params: {
               api_key: this.apiKey,
               query: this.searchFilter,
               // page: 1,
            }
         })
         .then( res => {
            let movieList = [];
            movieList = res.data.results;
            console.log(movieList);

            movieList.forEach( el => {
               const movie = {
                  title: el.title,
                  originalTitle: el.original_title,
                  lang: el.original_language,
                  vote: el.vote_average
               }
               this.filteredMovies.push(movie);
            });
         })
         .catch( err => {
            console.warn( err.response )
         })
      },
      fetchTv: function() {
         axios.get(`${ this.baseURL }/search/tv`, {
            params: {
               api_key: this.apiKey,
               query: this.searchFilter,
               // page: 1,
            }
         })
         .then( res => {
            let tvList = [];
            tvList = res.data.results;
            console.log(tvList);

            tvList.forEach( el => {
               const tvSerie = {
                  title: el.name,
                  originalTitle: el.original_name,
                  lang: el.original_language,
                  vote: el.vote_average
               }
               this.filteredMovies.push(tvSerie);
            });
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

         img {
            aspect-ratio: 1;
            width: 15px;
         }
      }
   }
}
</style>
