<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue';
import BlogText from './components/blogTxt.vue';
import BlogTxt from './components/blogTxt.vue';
</script>

<template>
  <img v-show="false" alt="Vue logo" src="./assets/logo.png" />
  <!-- <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" /> -->
  <BlogTxt />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
