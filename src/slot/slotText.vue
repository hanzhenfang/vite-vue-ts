<script setup lang="ts">
import {ref} from 'vue'

const name =ref<string>("韩振方")

const isFaver=ref<Boolean>(false)


function addToMyFav(){
  isFaver.value =!isFaver.value
}
</script>

<template>
  <div
  id="wrapper"
  class="w-[300px] h-[300px]"
  :class="isFaver?'big':'static'"
  >
 我是slotText组件
 <slot :name="name"></slot>
  </div>
  <button @click="addToMyFav">确实</button>
</template>

<style scoped>
#wrapper {
  display: flex;
  border: 1px solid black;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.big {
  animation: addFav 0.2s;
}

@keyframes addFav {
  to {
    transform: scale(2,2);
  }
}
</style>