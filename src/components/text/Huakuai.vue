<script setup lang="ts">
import { ref, computed, onMounted } from "vue";

enum Action {
  github,
  home,
}

interface DataType {
  id: number;
  name: string;
  action: number;
}

const data = ref<Array<DataType>>([
  { id: 1, name: "github", action: Action.github },
  { id: 2, name: "韩振方博客", action: Action.home },
]);

//NOTE: 下面是初始化时的滑块位置，后期有额外的tab，需要额外添加
const INIT_OFFSET = ref<Array<number>>([32, 88]);
const initOffset = ref<number>(INIT_OFFSET[1]);
const wrapper = ref<HTMLElement>();
const currentItemStyle = ref();

const huakuaiStyle = computed(() => {
  const offset = initOffset.value;
  return {
    transition: `all .1s`,
    transform: `translateX(${offset - 15}px)`,
  };
});

function handelClickItem(currentItem: Action) {
  // 1.拿到用户点击某一元素的索引值
  const tabsList = Array.from(wrapper.value.querySelectorAll("div"));
  //2.上面拿到wrapper所有div（包括滑块div），这里不需要滑块div
  const tabs = tabsList.slice(0, tabsList.length - 1);
  //3.用传入的索引值来拿到用户点击的元素dom树
  const userClickItem = tabs[currentItem];
  console.dir( userClickItem);
  //4.滑块应在元素的中间,这里需要拿到offsetLeft的宽度和当前宽度的一半（clientWidth的1/2），作为滑块初始化时候的offset
  const { offsetLeft, clientWidth } = userClickItem;
  const calcOffset = offsetLeft + clientWidth / 2;
  initOffset.value = calcOffset - 7.5;

  //NOTE:给当前所在item的字体变大
  userClickItem.style.fontSize = "large";
  tabs
    .filter((_, index) => index !== currentItem)
    .forEach((itme) => (itme.style.fontSize = "small"));
}

function userTouchStart (event:TouchEvent){
console.log('event',event)
}

onMounted(() => {
  setTimeout(() => {
    handelClickItem(0);
  }, 24);
});
</script>

<template>
  <div
    class="flex  relative
    p-[20px]
    m-[10px]
    border-solid border-2 border-slate-800"
    ref="wrapper"
  >
    <div
      v-for="item in data"
      class="mr-[1px]"
      :key="item.id"
      @touchstart="userTouchStart($event)"
      @click="handelClickItem(item.action)"
    >
      {{ item.name }}
    </div>
    <div 
    class=
    "absolute top-[40px]" 
    :style="huakuaiStyle">韩</div>
  </div>
</template>
