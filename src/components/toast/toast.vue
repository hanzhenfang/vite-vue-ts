<script lang="ts" setup>
import { onMounted, ref, computed, withDefaults, nextTick, watch } from "vue";
import type { CSSProperties, ComputedRef } from "vue";

type POSITION = "top" | "middle" | "bottom";

const props = defineProps<{
  message: string;
  position: POSITION;
}>();

/**
 * NOTE:
 * => 需要判断如何居中对齐
 */
const toastWrapper = ref<HTMLElement>();

//tips: 向左的偏移量,是wrapper宽度的一半
const LEFT_OFFSET = ref<number>();
//tips: 向上的偏移量,主要由用户传入的props决定
const TOP_OFFSET = ref<number>();
onMounted(() => {
  LEFT_OFFSET.value = toastWrapper.value!.offsetWidth / 2;

  TOP_OFFSET.value = toastWrapper.value!.offsetHeight / 2;
});
const theOpacity = ref<number>(1);
const selfPosition: ComputedRef<number> = computed(() => {
  switch (props.position) {
    case "top":
      return 10;
    case "middle":
      return 50;
    case "bottom":
      return 90;
  }
});

const toastWrapperStyle = computed<CSSProperties>(() => {
  return {
    top: `calc(${selfPosition.value}% - ${TOP_OFFSET.value}px)`,
    left: `calc(50% - ${LEFT_OFFSET.value}px)`,
    backgroundColor: `black`,
    opacity: `${theOpacity.value}`,
    boxShadow: `0 3px 5px -1px black`,
  };
});

nextTick(() => {
  LEFT_OFFSET.value = toastWrapper.value!.offsetWidth / 2;
  TOP_OFFSET.value = toastWrapper.value!.offsetHeight / 2;
});
</script>

<template>
  <div
    ref="toastWrapper"
    class="absolute rounded-[8px] border-x-[16px] border-y-[14px] border-[black] bg-black/80"
    :style="[toastWrapperStyle, { zIndex: 2001 }]"
  >
    <div class="flex max-w-[700px] items-center justify-center">
      <div>
        <span class="text-white">{{ message }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
