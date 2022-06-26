<script setup lang="ts">
import MyItem from "./MyItem.vue";

defineProps<{
  todos: {
    id: string;
    title: string;
    done: boolean;
  }[],
  checkTodo:Function,
  deleteCurrentItem:Function
}>();

</script>

<template>
  <div>
    <ul>
      <MyItem 
      v-for="todoItem in todos" 
      :todoItem="todoItem" 
      :checkTodo="checkTodo"
      :deleteCurrentItem="deleteCurrentItem"
      >
      </MyItem>
    </ul>
  </div>
</template>

<style></style>
