<template>
   <div class="card">
      <!-- <h3>{{ title }}</h3>
      <p>{{ originalTitle }}</p>
      <p>{{ getFlag( element.original_language ) }}</p>
      <p v-if="flags[ element.original_language ]">
         <img class="flag" :src="flags[ element.original_language ]" alt="">
      </p>
      <p v-else>{{ element.original_language }}</p>
      <p>
         <span v-for="n in ( Math.floor(vote) )" :key="`fullStar-${n}`"><i class="fa-solid fa-star"></i></span>
         <span v-if="vote - Math.floor(vote) > 0">
            <i class="fa-regular fa-star">
               <i class="fa-solid fa-star-half"></i>
            </i>
         </span>
         <span v-for="n in ( 5 - Math.ceil(vote) )" :key="`blankStar-${n}`"><i class="fa-regular fa-star"></i></span>
      </p> -->
      <img :src="thumb + element.poster_path" alt="">
   </div>
</template>

<script>
import state from '../store.js';

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
      thumb: function() {
         return state.thumbURL + 'w342/';
      },
      vote: function() {
         return Math.round( this.element.vote_average ) / 2; //mantiene .5 di precisione
      }
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
.card {
   aspect-ratio: 2/3;
   flex-basis: 200px;
   flex-shrink: 0;
   // border: 1px solid black;
   background-color: green;
   border-radius: 5px;
   overflow: hidden;

   .flag {
      // aspect-ratio: 1;
      // width: 15px;
   }

   img {
      display: block;
      height: 100%;
      width: 100%;
      object-fit: cover;
      object-position: center;
   }
}

.fa-solid.fa-star {
   color: goldenrod;
}

.fa-regular.fa-star {
   position: relative;
   z-index: 3;
   color: rgba($color: #000000, $alpha: 0.3);

   .fa-solid.fa-star-half {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 0;
      color: goldenrod;
   }
}
</style>