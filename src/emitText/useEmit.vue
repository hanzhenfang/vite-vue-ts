<script setup lang="ts">
import {ref} from 'vue'

const emit =defineEmits<{
  (eveten:'myDIY',Name:any):void
}>()

const name = ref<String>("韩振方")
</script>

<template>
  <div id="wrapper">
    <slot name="demo1"></slot>
    <slot name="demo2"></slot>
    <button 
    @click="emit('myDIY',name)"
    class="border-2 border-indigo-600"
   >
      点击我显示姓名
    </button>
        我是子组件
  </div>
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
