<template>
   <div>
      <h3>{{ title }}</h3>
      <p>{{ originalTitle }}</p>
      <!-- <p>{{ getFlag( element.original_language ) }}</p> -->
      <p v-if="flags[ element.original_language ]">
         <img :src="flags[ element.original_language ]" alt="">
      </p>
      <p v-else>{{ element.original_language }}</p>
      <p>{{ element.vote_average }}</p>
   </div>
</template>

<script>
import getUnicodeFlagIcon from 'country-flag-icons/unicode';
import { hasFlag } from 'country-flag-icons';

export default {
   props: {
      element: {
         type: Object,
         required: true
      }
   },
   computed: {
      title: function() {
         return this.element.name || this.element.title;
      },
      originalTitle: function() {
         return this.element.original_name || this.element.original_title;
      },
   },
   data() {
      return {
         flags: {
            it: require("../assets/img/italy.png"),
            fr: require("../assets/img/france.png"),
            en: require("../assets/img/united-kingdom.png")
         }
      }
   },
   methods: {
      getFlag: function( unicode ) { // non funziona, compatibilità unicode?
         if( hasFlag(unicode) ) {
            return getUnicodeFlagIcon(unicode);
         }
         return unicode
      },
   }
}
</script>

<style lang="scss" scoped>
div {
   margin-bottom: 20px;

   img {
      aspect-ratio: 1;
      width: 15px;
   }
}
</style>