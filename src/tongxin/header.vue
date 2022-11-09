<script setup lang="ts">
const props = defineProps<{
  isShow: boolean;
}>();

// const emit = defineEmits<{
//   (event: "update:isShow", value: boolean, value2: number): void;
// }>();

const emit = defineEmits(["update:isShow"]);

function isShowOptions() {
  if (props.isShow) emit("update:isShow", false, 3);
  else emit("update:isShow", true, 4);
}
</script>
<!------------------- header ------------------->
<template>
  <div
    id="header"
    class="w-full flex justify-between h-[100px] border-[2px] border-[red] overflow-hidden"
  >
    <span> 我是 header 部分 </span>
    <button @click="isShowOptions" class="border-[2px] border-[red]">
      我是一个按钮
    </button>
  </div>
</template>
