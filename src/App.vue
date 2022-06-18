<script setup lang="ts">
import { ref } from 'vue';

import formTextVue from './components/formText.vue';
import HelloWorld from './components/HelloWorld.vue';
import BlogText from './components/blogTxt.vue';
import BlogTxt from './components/blogTxt.vue';
import Modal from './components/modal.vue';
import { useState } from './store/commonState';
import { useRouter } from 'vue-router';
import arrayTextVue from './components/arrayText.vue';

const sonModal = ref<InstanceType<typeof Modal> | null>(null);
const comState = useState();
console.log(comState.userName);
const showChildren = () => {
  sonModal.value?.handleShow()
}

const routers = useRouter();

</script>

<template>
  <img v-show="false" alt="Vue logo" src="./assets/logo.png" />
  <!-- <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" /> -->
  <!-- <BlogTxt /> -->
  <!-- <Modal ref='sonModal' />
  <button @click="showChildren">我是父组件的按钮</button>
  <router-link to="/">heloWorld</router-link>
  <router-link :to="{ name: 'blogTxt', query: { id: 1 } }">blogTxt</router-link>
  <button @click="$router.push({ path: '/11' })">跳转404</button>
  <button @click="$router.push({ name: 'mulTable' })">乘法表页面</button>
  <div>
    <router-view></router-view>
  </div>
  <arrayTextVue>
    韩振方
  </arrayTextVue> -->
  <formTextVue/>
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

#active-link {
  color: red;
}
</style>
