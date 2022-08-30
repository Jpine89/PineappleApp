<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import NavComp from './components/NavComp.vue'
import kuzzle from './services/kuzzle.vue'

// async function valid() {
//   // Etablish the connection
//   await kuzzle.connect();
//   // Check if 'chat' index exists
//   if (! await kuzzle.index.exists("chat")) {
//     // If not, create 'chat' index and 'messages' collection
//     await kuzzle.index.create("chat");
//     await kuzzle.collection.create("chat", "messages");
//   }
//   await this.fetchMessages();
//   await this.subscribeMessages();
//   this.validate = true;
// }

// valid();

</script>

<template>
  
  <section>
    <NavComp />
    <RouterView />
    
    
  </section>
</template>

<script lang="ts">
  import { ref } from 'vue'
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

<style scoped>
  section {
    background-color: grey;
    /* min-height: 100vh; */
      border-radius: 1em;
      padding: 1em;
      position: absolute;
      top: 50%;
      left: 50%;
      margin-right: -50%;
      /* transform: translate(-50%, -50%); */
      border-style: solid;
      border-color: red;
      height: 48.5vh;
      width: 25.65vh; 
      overflow:hidden;
      overflow-y: scroll;
    }

    section::-webkit-scrollbar {
    display: none;
    }
</style>