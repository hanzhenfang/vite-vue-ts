<script setup lang="ts">
import { ref, onMounted, } from "vue";

const name = ref<string>("韩振方");
const count = ref<number>(3);
const emit = defineEmits<{
  (e: "myDIY", name: any): void;
}>();

onMounted(() => {
  let timerID = setInterval(() => {
    count.value--;
    if (count.value === 0) {
      clearInterval(timerID);
    }
  }, 1000);
});

</script>

<template>
  <div>
    <h1>
      {{ name }}
    </h1>
    <button
      class="border-2 border-indigo-600"
      :class="count === 0 ? 'static' : 'bg-gray-300'"
      :disabled="count === 0 ? false : true"
      @click.once="emit('myDIY', name)"
    >
      给app组件传数据{{ count === 0 ? "" : count }}
    </button>
  </div>
</template>
<style></style>
