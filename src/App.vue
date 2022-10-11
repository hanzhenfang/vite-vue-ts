<script setup lang="ts">
import {
  ref,
  computed,
  watch,
  onMounted,
  nextTick,
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
import textTruncate from "./textTruncate/textTruncate.vue";
import PhotoName from "./components/PhotoName.vue";

import { ToastCreator } from "./components/toast/toastCreator";

interface imgType {
  name: string;
  mime: string;
}

const imageInfo = ref<imgType>({
  name: "好好好还好韩",
  mime: "image",
});

const aaElement = ref<HTMLDivElement>();

function getElementFromPoint() {
  const _element = document.elementFromPoint(370, 44);
  console.log("_element", _element);
}

onMounted(() => {
  console.log("aaElement.value", aaElement.value);
});

function getAllElementZIndex() {
  const elementArr: Array<HTMLElement> = Array.from(
    document.body.querySelectorAll("*")
  );
  console.log("elementArr", elementArr);
  const zIndexArr = elementArr.map((item) => {
    let zindex = Number(window.getComputedStyle(item).zIndex) || 0;
    return zindex;
  });
  console.log("zIndexArr", zIndexArr);
}

nextTick(() => {
  getAllElementZIndex();
});
</script>

<template>
  <div class="border-t-[4px] mt-[10px]">xx</div>
  <button @click="getElementFromPoint">点击获取</button>
  <!-- <div class="w-[100px] border-[1px]">
    <PhotoName :photo-type="imageInfo.mime" :photo-name="imageInfo.name" />
  </div> -->
  <div class="overflow-scroll">
    <div class="h-[100px]">
      <div class="sticky">你好</div>
      <div>你不会</div>
    </div>
    <div v-for="(item, index) in 10">{{ item + index }}</div>
  </div>
  <div class="absolute z-[1000]">izzzzzzzzzzzindex</div>
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
