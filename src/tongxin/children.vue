<script lang="ts" setup>
const props = defineProps<{
  count: number;
}>();

const emit = defineEmits<{
  (event: "addCount", pai: number, name: string, age: number): void;
}>();
</script>
<template>
  {{ count }}
  <button @click="emit('addCount', 3.1415926, '韩振方', 18)">增加</button>
</template>
