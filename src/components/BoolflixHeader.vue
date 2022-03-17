<template>
   <header>
      <div class="container">
         <figure class="logo">
            <img src="../assets/img/Netflix-logo.png" alt="">
         </figure>
         <nav class="navbar">
            <ul>
               <li class="nav-item active">Home</li>
               <li class="nav-item">TV Shows</li>
               <li class="nav-item">Movies</li>
               <li class="nav-item">New &amp; Popular</li>
               <li class="nav-item">My List</li>
               <li class="nav-item">Browse by Languages</li>
            </ul>
         </nav>
         <div class="controls">
            <div class="searchbar">
               <input type="text" v-model="search" @keyup.enter="setSearch">
               <button @click="setSearch">Search</button>
            </div>
            <div class="notifications-btn">
               <i class="fa-solid fa-bell"></i>
            </div>
            <div class="account-btn">
               <figure class="account-logo">
                  <img src="../assets/img/Account.jpg" alt="">
               </figure>
               <span><i class="fa-solid fa-caret-down"></i></span>
            </div>
         </div>
      </div>
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
   header {
      background: #141414;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      height: 70px;
      // border: 1px solid red;
      color: white;
      
      .container {
         height: 100%;
         display: flex;
         align-items: center;
      }

      .logo {
         height: 30px;
         margin-right: 30px;

         img {
            display: block;
            max-height: 100%;
         }
      }

      .navbar {
         display: flex;
         gap: 20px;
         flex-grow: 1;

         ul {
            list-style: none;
            display: contents;

            .nav-item {
               font-size: 14px;
               color: rgba($color: white, $alpha: 0.8);
               transition: color 0.3s ease-in-out;

               &:hover {
                  cursor: pointer;
                  color: rgba($color: white, $alpha: 0.5);
               }

               &.active {
                  cursor: default;
                  color: white;
                  font-weight: 600;
               }
            }
         }
      }

      .controls {
         display: flex;
         align-items: center;
         gap: 25px;

         .notifications-btn i {
            font-size: 22px;
         }

         .account-btn {
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 14px;

            .account-logo {
               aspect-ratio: 1;
               width: 32px;
               border-radius: 5px;
               overflow: hidden;

               img {
                  display: block;
                  max-height: 100%;
               }
            }
         }
      }
   }
</style>