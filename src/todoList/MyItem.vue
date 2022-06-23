<script setup lang="ts">

const props=defineProps<{
  todoItem: {
    id: string;
    title: string;
    done: boolean;
  },
  checkTodo:Function
}>();

function handleClick(id:string){
props.checkTodo(id)
console.log(id)
}

</script>

<template>
  <li>
    <label>
      <input 
      type="checkbox" 
      :checked="todoItem.done" 
      @click="handleClick(todoItem.id)" />
      <span>
        {{ todoItem.title}}
      </span>
    </label>
  </li>
</template>
