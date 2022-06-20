<script setup lang="ts">
import { ref } from "vue";
import formTextVue from "./components/formText.vue";
import HelloWorld from "./components/HelloWorld.vue";
import BlogText from "./components/blogTxt.vue";
import BlogTxt from "./components/blogTxt.vue";
import Modal from "./components/modal.vue";
import { useState } from "./store/commonState";
import { useRouter } from "vue-router";
import arrayTextVue from "./components/arrayText.vue";
import todolistVue from "./components/todolist.vue";

const sonModal = ref<InstanceType<typeof Modal> | null>(null);
const comState = useState();
console.log(comState.userName);
const showChildren = () => {
  sonModal.value?.handleShow();
};

const routers = useRouter();

comState.cahngeName();
</script>

<template>
  <img v-show="true" alt="Vue logo" src="./assets/logo.png" />

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
  <!-- <div>
    我没用less
    <h2>我是没less的div</h2>
  </div>
  <formTextVue fatherName="韩振方" :fatherAge="18" :fatherChildren="13" />
  {{ comState.userName }} -->
  <todolistVue></todolistVue>
</template>

<style lang="less">
@aaaa :yellow;
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#active-link {
  color: aaaa;
}

.father {
  color: @aaaa;
  div {
    font-size: 20px;
  }
  h2 {
    color: @aaaa;
  }
}
</style>
