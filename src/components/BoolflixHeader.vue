<template>
   <header>
      <input type="text" v-model="search" @keyup.enter="setSearch">
      <button @click="setSearch">Search</button>
   </header>
</template>

<script>
import state from '../store.js';
import { fetchData } from '../store.js';

export default {
   data() {
      return {
         search: "",
      }
   },
   watch: {
      // search: function(value) {
      //    this.fetchData();
      // }
   },
   methods: {
      setSearch: function() {
         state.search = this.search;
         fetchData();
      }
   }
}
</script>

<style lang="scss" scoped>

</style>