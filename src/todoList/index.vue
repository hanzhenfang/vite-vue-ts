<script setup lang="ts">
import MyHeader from "./MyHeader.vue";
import MyList from "./MyList.vue";
import MyFooter from "./MyFooter.vue";
</script>

<template>
  <div class="wrapper">
    <MyHeader></MyHeader>
    <MyList></MyList>
    <MyFooter></MyFooter>
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
