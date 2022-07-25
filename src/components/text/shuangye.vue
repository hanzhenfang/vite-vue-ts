<script setup lang="ts">
import {ref} from "vue"

const firstEl=ref<HTMLDivElement>()
const secondEl=ref<HTMLDivElement>()

function userTouchStart(event:TouchEvent){
console.log('event.target',event)
console.log('window.scrollY',window.scrollY)
}

function userTouchMove(event:TouchEvent){
  // console.log('event',event)
}

function showTop(){
  console.log('window.scrollY',window.screenTop)
}

window.onscroll=showTop

</script>

<template>
  <div class=" w-screen h-screen overflow-y-auto">
    <div
      class="w-[390px] text-center h-[844px] border-solid border-2 border-indigo-700"
      ref="firstEl"
      @touchstart="userTouchStart($event)"
      @touchmove="userTouchMove($event)"
    >
    韩振方
    </div>
    <div
      class="w-[390px] h-[844px] border-solid border-2 border-indigo-700"
      ref="secondEl"
    >
    好好好
    </div>
  </div>
</template>
