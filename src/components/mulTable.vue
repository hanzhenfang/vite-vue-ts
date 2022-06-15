<script setup lang="ts">
import { ref } from "vue";

const userIput = ref<number>();



</script>

<template>
  <div class="wrapper">
    <p>打印乘法表</p>
    <div>
      <label>请输入一个数字:
        <input v-model="userIput" />
      </label>
      <button @click="mapTable(userIput as number)">打印</button>
    </div>
    <div class="result">
    </div>
  </div>

</template>

<style>
.wrapper {
  width: 500xp;
  height: 500px;
  border: 1px solid black;
}

.result {
  margin-top: 20px;
  margin-left: 300px;
  width: 400px;
  height: 300px;
  border: 1px solid black;
}
</style>