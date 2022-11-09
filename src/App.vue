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
interface imgType {
  name: string;
  mime: string;
}

const imageInfo = ref<imgType>({
  name: "好好好还好韩",
  mime: "image",
});
</script>

<template>
  <div class="w-[390px] h-[844px] border-[2px] border-red-800">
    <Father />
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
