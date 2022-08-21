<script setup lang="ts">
import {RouterLink} from 'vue-router'

var test;

function openNav() {
test = document.getElementById('myNav');
test.style.width = "100%";
}

function closeNav() {
test = document.getElementById('myNav');
test.style.width = "0%";
}

</script>

<template>
  <header>
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->

    
      <!-- <HelloWorld msg="You did it!" /> -->
    <nav>
    <span style="font-size:30px;cursor:pointer" @click="openNav">&#9776;</span>
    </nav>

    <div id="myNav" class="overlay">
        <a href="javascript:void(0)" class="closebtn" @click="closeNav">&times;</a>
        <div class="overlay-content">
        <RouterLink to="/" @click="closeNav">Home</RouterLink>
        <RouterLink to="/about" @click="closeNav">About</RouterLink>
        <RouterLink to="/market" @click="closeNav">Market</RouterLink>
        </div>
    </div>
  </header>
</template>


<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

body {
  background-color: black;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
      background: linear-gradient(to left, #f46b45, #eea849);
      /* position: fixed;
      z-index:1;
      top: 0;
      width: 100%; */
    }


.overlay {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0, 0.9);
  overflow-x: hidden;
  transition: 0.5s;
}

.overlay-content {
  position: relative;
  top: 25%;
  width: 100%;
  text-align: center;
  margin-top: 30px;
}

.overlay a {
  padding: 8px;
  text-decoration: none;
  font-size: 36px;
  color: #818181;
  display: block;
  transition: 0.3s;
}

.overlay a:hover, .overlay a:focus {
  color: #f1f1f1;
}

.overlay .closebtn {
  position: absolute;
  top: 20px;
  right: 10%;
  font-size: 60px;
}

@media screen and (max-height: 450px) {

  .overlay a {font-size: 20px}
  .overlay .closebtn {
  font-size: 40px;
  top: 15px;
  right: 35px;
  }
}

</style>