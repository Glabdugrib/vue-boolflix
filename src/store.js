import Vue from 'vue';
import axios from 'axios';

const state = Vue.observable(
   {
      search: '',
      movies: [],
      moviesCast: [],
      series: [],
      seriesCast: [],
      baseURL: 'https://api.themoviedb.org/3',
      apiKey: '69c0e1da6ac95a6109dd23110160ecd2',
      thumbURL: 'https://image.tmdb.org/t/p/'
   }
);

export default state;

export function fetchData() {
   // Movies
   axios.get(`${ state.baseURL }/search/movie`, {
      params: {
         api_key: state.apiKey,
         query: state.search,
         // page: 1,
         // language: 'it-IT',
      }
   })
   .then( res => {
      console.log(res.data)
      state.movies = res.data.results;
      fetchMovieCast();
   })
   .catch( err => {
      console.warn( err.response )
   })

   // TV Series
   axios.get(`${ state.baseURL }/search/tv`, {
      params: {
         api_key: state.apiKey,
         query: state.search,
         // page: 1,
         // language: 'it-IT',
      }
   })
   .then( res => {
      console.log(res.data)
      state.series = res.data.results;
      fetchSerieCast();
   })
   .catch( err => {
      console.warn( err.response )
   })
}

export function fetchMovieCast() {
   state.moviesCast = [];

   // Movies cast
   state.movies.forEach((el) => {
      axios.get(`${ state.baseURL }/movie/${ el.id }/credits`, {
         params: {
            api_key: state.apiKey
         }
      })
      .then( res => {
         const cast = [];
         for (let i = 0; i < 5; i++) {
            if( res.data.cast[i] != undefined ) {
               cast.push( res.data.cast[i] );
            }
         }
         state.moviesCast.push( cast );
      })
      .catch( err => {
         console.warn( err.response );
      })  
   });
}

export function fetchSerieCast() {
   state.seriesCast = [];

   // Series cast
   state.series.forEach((el) => {
      axios.get(`${ state.baseURL }/tv/${ el.id }/credits`, {
         params: {
            api_key: state.apiKey
         }
      })
      .then( res => {
         const cast = [];
         for (let i = 0; i < 5; i++) {
            if( res.data.cast[i] != undefined ) {
               cast.push( res.data.cast[i] );
            }
         }
         state.seriesCast.push( cast );
      })
      .catch( err => {
         console.warn( err.response );
      })  
   });

   console.log( state.seriesCast );
}