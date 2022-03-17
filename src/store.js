import Vue from 'vue';
import axios from 'axios';

const state = Vue.observable(
   {
      search: '',
      movies: [],
      series: [],
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
   })
   .catch( err => {
      console.warn( err.response )
   })
}