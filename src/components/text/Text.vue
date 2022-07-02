<script setup lang="ts">
import {ref} from 'vue'

import MyButton from "./MyButton.vue";
import Page404 from "../404page.vue"

const isChange = ref<boolean>(false)
</script>

<template>
<component :is="isChange?MyButton:Page404" name="韩振方"></component><br/>
<button
class="border-double border-4 bg-red-600"
@click="isChange=!isChange"
>切换组件</button>
</template>
