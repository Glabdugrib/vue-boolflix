<template>
   <div class="card">
      <img v-if="element.poster_path" :src="thumb + element.poster_path" alt="" class="card-thumb">
      <h3 v-if="!element.poster_path" class="card_missing-thumb">{{ title }}</h3>
      <div class="card-info">
         <h3 class="card-info__title">{{ title }}</h3>
         <hr>
         <div class="card-info__desc">
            <p class="card-info__date">{{ year }}</p>
            <p class="card-info__genres"><strong>Genres: </strong>{{ element.genre_ids.join(', ') }}</p>
            <!-- <p class="card-info__original-title">{{ originalTitle }}</p> -->
            <!-- <p>{{ getFlag( element.original_language ) }}</p> -->
            <!-- <p class="card-info__lang" v-if="flags[ element.original_language ]">
               <img class="flag" :src="flags[ element.original_language ]" alt="">
            </p>
            <p v-else>{{ element.original_language }}</p> -->
            <p class="card-info__rating">
               <span v-for="n in ( Math.floor(vote) )" :key="`fullStar-${n}`"><i class="fa-solid fa-star"></i></span>
               <span v-if="vote - Math.floor(vote) > 0">
                  <i class="fa-regular fa-star">
                     <i class="fa-solid fa-star-half"></i>
                  </i>
               </span>
               <span v-for="n in ( 5 - Math.ceil(vote) )" :key="`blankStar-${n}`"><i class="fa-regular fa-star"></i></span>
            </p>
            <p v-if="cast" class="card-info__genres"><strong>Cast: </strong>{{ castString }}</p>
            <hr>
            <p class="card-info__overview">{{ element.overview }}</p>
         </div>
      </div>
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
      },
      cast: {
         type: Array
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
      },
      year: function() {
         let year = this.element.release_date || this.element.first_air_date;
         if(year !== undefined && year.length >= 4) {
            year = year.substring(0,4);
         } else {
            year = '';
         }
         return year;
      },
      castString: function() {
         let string = '';
         this.cast.forEach( (el,i) => {
            string += el.name;
            if( i < this.cast.length - 1 ) {
               string += ', ';
            }
         });
         return string;
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
      }
   }
}
</script>

<style lang="scss" scoped>
.card {
   aspect-ratio: 2/3;
   flex-basis: 200px;
   flex-shrink: 0;
   position: relative;
   // border: 1px solid black;
   background-color: rgba($color: black, $alpha: 0.5);
   border-radius: 10px;
   overflow: hidden;
   cursor: pointer;
   // box-shadow: 1px 1px 2px rgba($color: white, $alpha: 0.1);
   transition: opacity 0.3s ease-in-out;

   .card_missing-thumb {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      color: rgba($color: white, $alpha: 0.8);
      text-align: center;
   }

   // .flag {
   //    aspect-ratio: 1;
   //    width: 15px;
   // }

   .card-thumb {
      height: 100%;
      width: 100%;
      object-fit: cover;
      object-position: center;
   }

   .card-info {
      // display: none;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba($color: #000000, $alpha: 0.8);
      color: rgba($color: white, $alpha: 0.8);;
      padding: 30px 20px;
      text-align: center;
      overflow: hidden;
      opacity: 0;
      transition: opacity 0.3s ease-in-out;
      display: flex;
      flex-direction: column;

      hr {
         border: none;
         border-top: 1px solid #FF1818;
         margin-bottom: 10px;
      }

      .card-info__title {
         margin-bottom: 10px;
      }

      .card-info__date {
         margin-bottom: 10px;
      }

      .card-info__genres {
         margin-bottom: 10px;
      }

      .card-info__rating {
         margin-bottom: 15px;
         font-size: 12px;
         display: flex;
         gap: 3px;
         justify-content: center;

         .fa-solid.fa-star {
            color: #FF1818;
         }

         .fa-regular.fa-star {
            position: relative;
            z-index: 3;
            color: rgba($color: white, $alpha: 0.3);

            .fa-solid.fa-star-half {
               position: absolute;
               top: 0;
               left: 0;
               z-index: 0;
               color: #FF1818;
            }
         }
      }

      .card-info__desc {
         flex-grow: 1;
         // background: green;
         overflow-y: auto;
      }

      .card-info__desc::-webkit-scrollbar {
         display: none;
      }

      .card-info__overview {
         color: rgba($color: white, $alpha: 0.7);
         font-size: 14px;
         // overflow-y: scroll;
      }
   }

   &:hover .card-info {
      opacity: 1;
   }

   &:hover .card_missing-thumb {
      opacity: 0;
   }
}


</style>