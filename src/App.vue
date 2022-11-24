<script setup lang="ts">
import { ref, computed, watch, onMounted, type CSSProperties } from "vue";
import formTextVue from "./components/formText.vue";
import HelloWorld from "./components/HelloWorld.vue";
import Modal from "./components/modal.vue";
import { useState } from "./store/commonState";
import { useRouter } from "vue-router";
import arrayTextVue from "./components/arrayText.vue";
import todolist from "./todoList/index.vue";
import localStorage from "./localStorage/localStorage.vue";
import useEmit from "./emitText/useEmit.vue";
import pubsubText from "./pubSubJS/pubsubText.vue";
import slotText from "./slot/slotText.vue";
import Text from "./components/text/Text.vue";
import Huakuai from "./components/text/Huakuai.vue";
import tuozhuai from "./components/text/tuozhuai.vue";
import { createNewDB } from "./components/text/indexDB";
import Shuangye from "./components/text/shuangye.vue";
import createToast from "./components/toast/createToast";
import Toast from "./components/toast/createToast";
import OffsetWidth from "./components/toast/offsetWidth.vue";
import textTruncate from "./textTruncate/textTruncate.vue";
import PhotoName from "./components/PhotoName.vue";
import { ToastCreator } from "./components/toast/toastCreator";

import NameTest from "./components/nameTest/nameTest.vue";
import GridTest from "./components/grid/gridTest.vue";

import Father from "./tongxin/father.vue";

const isMouseDown = ref<boolean>(false);
const mouseInitPageX = ref<number>(0);
const distanceX = ref<number>(0);

function userMouseDown(event: MouseEvent) {
  isMouseDown.value = true;
  console.log("event.x", event.x);
  mouseInitPageX.value = event.x;
}

function userMouseUp(event: MouseEvent) {
  isMouseDown.value = false;
}

function userMouseMoveing(event: MouseEvent) {
  if (!isMouseDown.value) return;
  distanceX.value = mouseInitPageX.value - event.x;
}

const fileListStyle = computed<CSSProperties>(() => {
  return {
    maxWidth: `700px`,
    width: `calc(495px - ${distanceX.value}px)`,
    height: `100%`,
  };
});

const preViewStyle = computed<CSSProperties>(() => {
  return {
    maxWidth: `700px`,
    width: `calc(495px + ${distanceX.value}px)`,
    height: `100%`,
  };
});

const dragSection = computed<CSSProperties>(() => {
  return {
    transform: `translateX(${distanceX.value}px)`,
  };
});
</script>

<template>
  <div
    @mousemove="userMouseMoveing($event)"
    class="w-[1000px] h-[844px] flex border-[2px] border-red-800"
  >
    <div :style="fileListStyle">和</div>
    <div
      class="w-[10px] bg-[red]"
      @mouseup="userMouseUp($event)"
      @mousedown="userMouseDown($event)"
      :style="dragSection"
    ></div>
    <div :style="isMouseDown ? preViewStyle : {}">
      <img class="w-full h-full object-contain" src="./陈宏州/猫咪.webp" />
    </div>
  </div>
</template>
<style lang="less">
#app {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
// .fade-enter-active {
//   transition:  2s ease;
// }
.fade-leave-active {
  transition: 0.3s ease;
}
.fade-enter-active {
  transition: 0.3s linear;
}
.fade-enter-to,
.fade-leave-from {
  transform: translateX(0);
  opacity: 1;
}
.fade-leave-to,
.fade-enter-from {
  transform: translateX(-100%);
  opacity: 0;
}
// @keyframes fang {
//   from{
// transform:translateX(-100%)
//   }
//   to{
//  transform:translateX(0)
//   }
// }

//enter:进入,from:从哪里
//这个类名代表着，你的组件挂载之前，在哪个位置
.fang-enter-from {
  transform: translateX(-100%);
}
.fang-enter-to {
  transform: translateX(0);
}
.fang-enter-active {
  transition: 2s ease;
}
</style>
