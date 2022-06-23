<script setup lang="ts">
import { reactive } from "vue";
import { nanoid } from "nanoid";

import MyHeader from "./MyHeader.vue";
import MyList from "./MyList.vue";
import MyFooter from "./MyFooter.vue";

const todos = reactive([
  { id: "01", title: "吸烟", done: true },
  { id: "02", title: "喝酒", done: true },
  { id: "03", title: "烫头", done: false },
]);

function addItem(e: Event) {
  let uerInput = (e.target as HTMLInputElement).value;
  if (uerInput !== "") {
    const todoObj = { id: nanoid(), title: uerInput, done: false };
    todos.push(todoObj);
  } else {
    console.log("请输入正确的值呀1");

  }
}

function checkTodo(id: string) {
  console.log("@@@", id);
  todos.forEach(item => {
    if (item.id === id) {
      item.done = !item.done;
    }
  });
}
</script>

<template>
  <div class="wrapper flex flex-col justify-between">
    <div>
      <MyHeader :addItem="addItem"></MyHeader>
      <MyList :todos="todos" :checkTodo="checkTodo"></MyList>
    </div>
    <div>
      <MyFooter></MyFooter>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  border: 2px solid black;
  width: 50%;
  height: 50%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  display: flex;
  flex-direction: column;
}
</style>
