<script setup lang="ts">
import {ref} from 'vue'

const todoItem = ref<string>("睡觉")
const isEdit =ref<Boolean>(false)

function ifBlur(){
if(!todoItem.value.trim()){
    return alert("输入不可以为空")
}
}
</script>

<template>
<span
 v-show="!isEdit">
 {{todoItem}}
 </span>
<input
 v-show="isEdit"
 v-model="todoItem"
 @keyup.enter="isEdit=false"
 @blur="ifBlur"
 />

<button @click="isEdit=!isEdit">编辑</button>
</template>

<style>
#wrapper {
  display: flex;
  width: 30vw;
  height: 30vh;
  border: 1px solid black;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>