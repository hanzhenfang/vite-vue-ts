<script lang="ts" setup>
const props = defineProps<{
  name: string;
}>();

function log() {
  console.log(props.name);
}

const xhr = new XMLHttpRequest();
xhr.open;
</script>

<template>
  <!-- 嗷嗷 -->
  <button @click="log()" class="border-double border-4 border-indigo-600">
    批量打印按钮aaa
  </button>
</template>
