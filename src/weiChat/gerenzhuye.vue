<script lang="ts" setup>
import { onBeforeUnmount } from 'vue';

onBeforeUnmount(()=>{
  console.log("我要被卸载了");
  async ()=> alert("我要被卸载了")
})

</script>

<template>
<div>
<router-link :to="{name:'pengyouquan'}" >
  <img src="../assets/个人主页.jpg"/>
</router-link>
<router-link :to="{name:'faxian'}">
<h1
class="absolute bottom-[30px] right-[130px]"
>发现</h1>
</router-link>
</div>
</template>

<style>
</style>