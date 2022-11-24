<script setup lang="ts">
import { ref, reactive } from "vue";

import Children from "./children.vue";

const backEndData = [{ name: "后端数据", age: "11" }];

const count = reactive<Array<any>>([{ name: "原始数据" }]);

//tips: 也非常简单，父组件在注册这个函数的时候，提前声明一个形参
function addCount() {}
</script>
<template>
  <div>
    {{ count }}
  </div>
  <button @click="addCount">请求后端数据</button>
</template>
