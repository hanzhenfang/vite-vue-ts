<script setup lang="ts">
import { ref, onMounted, nextTick } from "vue";

interface imgType {
  name: string;
  mime: string;
}
const imgName = ref<imgType>({
  name: "韩振方韩振方韩振方韩振方韩振方",
  mime: "image",
});

const imageWrapper = ref<HTMLSpanElement>();
const outWrapper = ref<HTMLDivElement>();
const outWidth = ref<number>();
const imgWidth = ref<number>();

function truncateFileName(file: imgType, maxLength: number) {
  if (file.name.length > maxLength) {
    const truncatedName = file.name.substring(0, maxLength);
    console.log("truncateFileName", truncatedName);

    return truncatedName + "." + file.mime;
  }
}

function textTruncateFileName() {}

nextTick(() => {
  // outWidth.value = outWrapper.value?.offsetWidth;
  // imgWidth.value = imageWrapper.value?.offsetWidth;
  // console.log("outWidth,imgWidth", outWidth, imgWidth);
});

onMounted(() => {
  const parentEl = imageWrapper.value?.closest("div");
  console.log("parentEl?", parentEl);
});
</script>
<template>
  <div
    ref="outWrapper"
    class="max-w-[500px] max-h-[500px] border-red border-[1px]"
  >
    <div class="truncate">
      <span ref="imageWrapper" class="text-[40px]">
        {{ imgName.name }}
      </span>
    </div>
  </div>
</template>
