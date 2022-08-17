<script lang="ts" setup>
import { ref, onMounted } from "vue";

const wrapper = ref<HTMLElement>();
onMounted(() => {
  wrapper.value?.offsetWidth;
});
</script>
<template>
  <div ref="wrapper">韩</div>
</template>
