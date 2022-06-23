<script setup lang="ts">
import {nanoid} from "nanoid"

const props=defineProps<{
  addItem:Function
}>()

function addTodo(e:Event){
  props.addItem(e);
  (e.target as HTMLInputElement).value =""
}

// function addItem(e:Event){
// let uerInput=(e.target as HTMLInputElement).value
// const todoObj = {id:nanoid(),title:uerInput,done:false}
// console.log(todoObj)
// }
</script>
<template>
<div>
<input 
class="border-2 border-red-500 w-4/5" 
 placeholder="请输入你想要的内容"
 @keyup.enter="addTodo($event)" />
<button 
class="border-4 border-blue-100 bg-red-600 text-pink-50"
>
  确定添加
  </button>
</div>
</template>