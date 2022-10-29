<script setup lang="ts">
import { ref, computed } from "vue";

import type { CSSProperties } from "vue";

const wrapper = ref<HTMLDivElement>();

const wrapperStyle = computed<CSSProperties>(() => {
  return {
    display: `grid`,
    gridTemplateColumns: `repeat(3,minmax(${wrapperWidth.value}px,auto))`,
  };
});



const wrapperWidth = computed(() => {
  if (!wrapper.value) return 100;
  const a = window.getComputedStyle(wrapper.value).gridTemplateColumns;
  const b = a.split(" ")[0];
  console.log("b", b);
  return parseInt(b);
});
</script>
<template>
  <div ref="wrapper" :style="wrapperStyle">
    <div>啊啊</div>
    <div>啊啊</div>
    <div>啊啊</div>
    <div>啊啊</div>
    <div>啊啊</div>
    <div>啊啊</div>
    <div>啊啊</div>
    <div>啊啊</div>
    <div>啊啊</div>
    <div>啊啊</div>
    <div>啊啊</div>
    <div>啊啊</div>
  </div>
</template>
<style scoped></style>
