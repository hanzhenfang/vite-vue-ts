<script setup lang="ts">
import console from "console";
import {ref} from "vue";

const props=defineProps<{
  todoItem: {
    id: string;
    title: string;
    done: boolean;
  },
  checkTodo:Function,
  deleteCurrentItem:Function
}>();

let isShow =ref<Boolean>(true)

function handleClick(id:string){
props.checkTodo(id)
console.log(id)
}

function deleteThis(id:string){
    console.log(id)

 props.deleteCurrentItem(id)
}


</script>

<template>
  <li class="flex justify-between mb-4 h-6">
    <div>
    <label>
      <input 
      type="checkbox" 
      :checked="todoItem.done" 
      @click="handleClick(todoItem.id)" />
      <span>
        {{ todoItem.title}}
      </span>
    </label>
    </div>
    <div>
    <button
    :class="isShow?'static':'hidden'"
    @click="deleteThis(todoItem.id)"
    >删除</button>
    </div>
  </li>
</template>

<style scoped>
li:hover {
  background-color: pink;
}

button {
  border: 2px solid black;
  border-radius: 2px;
  background-color: wheat;
}
</style>