<script lang="ts" setup>
import { onBeforeUnmount,onMounted } from 'vue';
import {useRoute,useRouter} from 'vue-router'

const props = defineProps<{
  id1:string
}>()

onMounted(() => {
  console.log('props.id',props.id1)
}),

onBeforeUnmount(()=>{
  console.log("我要被卸载了");
  console.log('useRoute()',useRoute())
  console.log('useRouter()',useRouter())
  
})

</script>

<template>
<div>
<router-link :to="{name:'pengyouquan',query:{id:'1'}}" >
  <img src="../assets/个人主页.jpg"/>
</router-link>
<!-- 
<router-link :to="{name:'mulTable'}">
<h1 class="absolute bottom-[30px] right-[130px]"
>发现</h1>
</router-link> -->

<div>
   <router-view></router-view>
</div>
</div>
</template>

<style>
</style>