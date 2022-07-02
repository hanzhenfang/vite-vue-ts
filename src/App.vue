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
import todolist from "./todoList/index.vue";
import localStorage from "./localStorage/localStorage.vue";
import useEmit from "./emitText/useEmit.vue";
import pubsubText from "./pubSubJS/pubsubText.vue";
import slotText from "./slot/slotText.vue";

const sonModal = ref<InstanceType<typeof Modal> | null>(null);
const comState = useState();

comState.cahngeName();
const showChildren = () => {
  sonModal.value?.handleShow();
};

const routers = useRouter();

const sonNames = ref<string>("");

function getChildrenName(sonName: string) {
  sonNames.value = sonName;
}
</script>

<template>
  <!-- <img v-show="true" alt="Vue logo" src="./assets/logo.png" /> -->

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
  <!-- <todolist></todolist> -->
  <!-- <h1>{{childrenName1}}</h1>
<localStorage 
class="absolute m-auto top-0 left-0 bottom-0 right-0 w-[200px] h-[200px]"
v-on:myDIY="getMySonName"
@click="tips"
></localStorage> -->
  <div>

    <!-- <h1>我是App组件</h1>
    
    <slotText v-slot="{slotProps}">
     <h1>{{ slotProps.name}}</h1> 
    </slotText> -->
  <router-view v-slot="{ Component }">
  <transition name="fade" mode="out-in">

    <component :is="Component" />
    
  </transition>
</router-view>
<br>
    <router-link :to="{name:'blogTxt'}">去博客</router-link><br>
    <router-link to="/mulTable">99乘法表</router-link><br>
    <router-link to="{name:'404page'}">404</router-link>
  </div>
</template>

<style lang="less">
#app {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.fade-enter-active{
  animation:fang 1s ease
}
.fade-leave-active {
  animation:fang 1s ease reverse
}

// .fade-enter-from{
//  transform:translateX(-100%)
//  }
// .fade-leave-to {
//   transform:translateX(0)
// }
@keyframes fang {
  from{
transform:translateX(-100%)
  }
  to{
 transform:translateX(0)
  }
}
</style>
