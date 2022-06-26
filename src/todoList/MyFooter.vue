<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  todos: {
    id: string;
    title: string;
    done: boolean;
  }[];
}>();

const noComplete =
 props.todos.reduce((pre:string[],cur)=>{if(cur.done===true){
    pre.push()
    console.log(pre)
  }
  return pre
},[])
</script>

<template>
  <div>
    <input type="checkbox" />
    <span>已完成{{ noComplete.length }}个/全部{{ todos.length }}个</span>
    <button
      class="w-full rounded-2xl bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
    >
      清除已完成任务
    </button>
  </div>
</template>

<style></style>
