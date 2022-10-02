<script setup lang="ts">
import { ref, onMounted } from "vue";
const count = ref<number>(1);
onMounted(async () => {
  count.value++;
});
</script>

<template>
  <div>韩振方{{ count }}</div>
</template>
