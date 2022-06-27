<script setup lang="ts">
import {ref} from 'vue'

const name =ref<string>("韩振方")

</script>

<template>
  <div
  id="wrapper"
  class="w-[300px] h-[300px]"
  >
 我是slotText组件
 <slot :name="name"></slot>
  </div>
</template>

<style>
#wrapper {
  display: flex;
  border: 1px solid black;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>