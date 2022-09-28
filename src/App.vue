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

import { ToastCreator } from "./components/toast/toastCreator";

const gridNumber = ref<number>(5);

const testWrapper = computed<CSSProperties>(() => {
  return {
    display: `grid`,
    gridTemplateColumns: `repeat(${gridNumber.value},20px)`,
  };
});

const divStyle = computed<CSSProperties>(() => {
  return {
    width: `20px`,
    transition: `width 2s ease`,
  };
});

function testClick() {
  gridNumber.value = 100;
  console.log("哈哈");
}
</script>

<template>
  <div class="w-[500px] border-red-900 border-[2px] hover:translate-x-[10px]">
    <div :style="testWrapper">
      <div :style="divStyle" class="h-[20px]" v-for="item in 10">soft</div>
    </div>
  </div>

  <button @click="testClick">
    <span>点我切换布局</span>
  </button>
</template>
<style lang="less">
#app {
  // width: 100vw;
  // height: 100vh;
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
