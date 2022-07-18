<script lang="ts" setup>
import { ref, computed, onMounted } from "vue";

const wrapper = ref<HTMLElement>();
const delBtn = ref<HTMLElement>();
const touchStartX = ref<number>();
const touchEndX = ref<number>();
const MAX_MOVE_DISTANCE = 32;

const delBtnInitMoveDistance = computed(() => {
  return (
    wrapper.value!.offsetWidth +
    (delBtn.value!.offsetWidth - delBtn.value!.clientWidth) / 2
  );
});

const delBtnInitStyle = computed(() => {
  return { transform: `translateX(${wrapper.value?.offsetWidth}px)` };
});

/**
 * NOTE: 这里只考虑用户只用了一根手指的情况
 */
function userTouchStart(event: TouchEvent) {
  //1.获取用户触摸时（还未开始滑动）的点
  console.log('event',event)
  const touchPoint = event.changedTouches[0];
  console.log('touchPoint',touchPoint)
  //2.获取用户触摸时的X坐标
  touchStartX.value = touchPoint.clientX;
}

function userTouchEnd(event: TouchEvent) {
  //1.获取用户触摸的元素
  const currentElement = event.currentTarget as HTMLElement;
  //2.获取用户触摸结束的点
  touchEndX.value = event.changedTouches[0].clientX;
  const userMoveDistance = touchStartX.value! - touchEndX.value;
  if (userMoveDistance > MAX_MOVE_DISTANCE) {
    //这里是⬅左滑的情况
    currentElement.style.transform = `translateX(-${MAX_MOVE_DISTANCE}px)`;
    (delBtn.value as HTMLElement).style.transform=`translateX(-${MAX_MOVE_DISTANCE}px)`
  }
  if (userMoveDistance < -MAX_MOVE_DISTANCE) {
    currentElement.style.transform = `translateX(0)`;
    (delBtn.value as HTMLElement).style.transform=`translateX(0)`
  }
}

onMounted(() => {});
</script>

<template>
  <div class="w-[300px] h-[300px] border-solid border-2 border-indigo-600">
    <div ref="wrapper" class="relative">
      <div
        class="w-full border-2 border-rose-600"
        @touchstart="userTouchStart($event)"
        @touchend="userTouchEnd($event)"
        style="transition: all 1s"
      >
        <span>和朋友的聊天</span>
      </div>
      
      <div 
      class="absolute border-2 top-0 right-[-36px] border-rose-600" 
      style="transition: all 1s"
      ref="delBtn">
        <span>删除</span>
      </div>
    </div>
  </div>
</template>
