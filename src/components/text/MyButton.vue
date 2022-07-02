<script lang="ts" setup>
const props=defineProps<{
name:string
}>()

function log (){
console.log(props.name)
}
</script>

<template>
<button
@click="log()"
class="border-double border-4 border-indigo-600"
>批量打印按钮
</button>
</template>