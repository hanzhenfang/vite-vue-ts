<script setup lang="ts">
import { ref } from "vue";

import Children from "./children.vue";

const count = ref<number>(0);

//tips: 也非常简单，父组件在注册这个函数的时候，提前声明一个形参
//tips: 测试一下 push
function addCount(childrenMessage: number, author: string, age: Number) {
  count.value = count.value + childrenMessage;
  console.log(author);
  console.log(age);
}
</script>

<template>
  <Children :count="count" @addCount="addCount" />
</template>
