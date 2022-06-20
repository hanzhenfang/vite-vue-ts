<script setup lang ="ts">
import { ref } from 'vue';
import { B } from '../utils/vimtext';

const isShow = ref<Boolean>(true);

const handleShow = () => {
  isShow.value = !isShow.value
}

defineExpose({ handleShow })

</script>

<template>
  <div class="modal">
    <h1 v-show="isShow">我是子组件</h1>
    <h2>上面文字现在是否显示:{{ isShow ? "是" : "否" }}</h2>
    <button @click="handleShow">显示</button>
  </div>

</template>

<style>
.modal {
  border: 1px solid red;
}
</style>