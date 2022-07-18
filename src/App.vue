<script setup lang="ts">
import { ref ,onMounted} from "vue";
import formTextVue from "./components/formText.vue";
import HelloWorld from "./components/HelloWorld.vue";
import BlogText from "./components/blogTxt.vue";
import BlogTxt from "./components/blogTxt.vue";
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


const sonModal = ref<InstanceType<typeof Modal> | null>(null);
const comState = useState();

comState.cahngeName();
const showChildren = () => {
  sonModal.value?.handleShow();
};

const routers = useRouter();

const sonNames = ref<string>("");

function getChildrenName(sonName: string) {
  sonNames.value = sonName;
}

const numberArray = ref(["1",2,"3",44,55])

const arrayBBB= numberArray.value.filter((item)=>{
  return item==="1" || item ==="3"
})

onMounted(() => {
  console.log(arrayBBB)
})
</script>

<template>
 <tuozhuai/>
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
