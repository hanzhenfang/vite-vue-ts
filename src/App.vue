<script setup lang="ts">
import {
  ref,
  computed,
  toRefs,
  watch,
  onMounted,
  type CSSProperties,
} from "vue";
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
</script>

<template>
  <div class="h-[500px] w-[500px]">
    <div class="sticky top-[20px]">韩振方</div>
  </div>
  <div>sss</div>
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
