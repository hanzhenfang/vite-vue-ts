<script lang="ts" setup>
import { ref, computed, onMounted } from "vue";
const props = defineProps<{
  photoName: string;
  photoType: string;
}>();

const photoNameWrapper = ref<HTMLSpanElement>();
const photoNameWidth = ref<number>();
const parentWidth = ref<number>();

const photoInfoName = computed<string>(() => {
  return props.photoName;
});

const newName = ref<string>(props.photoName);

function photoNameTruncate(thePhotoName: string) {
  const _parentElement = photoNameWrapper.value?.parentElement as HTMLElement;
  const _fontSize = parseInt(
    window.getComputedStyle(photoNameWrapper.value!).fontSize
  );

  photoNameWidth.value = photoNameWrapper.value?.offsetWidth;
  // 如果父元素存在，并且当前照片名字长度超过了父元素的宽度
  if (
    _parentElement &&
    photoNameWrapper.value!.offsetWidth > _parentElement.offsetWidth
  ) {
    parentWidth.value = _parentElement.offsetWidth;
    //tips: 允许输入的最大字符串个数
    const _maxStringCounts = Math.floor(parentWidth.value / _fontSize);
    const _begin = Math.floor(_maxStringCounts / 2);
    const _prefix = thePhotoName.substring(0, _begin);
    const _suffix = thePhotoName.slice(-3);
    const reslut = _prefix + "xxx" + _suffix + props.photoType;
    return reslut;
  } else {
    console.log("哈哈");
    return thePhotoName;
  }
}

onMounted(() => {
  newName.value = photoNameTruncate(photoInfoName.value);
});
</script>
<template>
  <span class="whitespace-nowrap" ref="photoNameWrapper">{{ newName }}</span>
</template>
