<script lang="ts" setup>
import { onMounted } from 'vue';
import {useRoute} from 'vue-router'

onMounted(()=>{
console.log('11useRoute()',useRoute())
})

</script>

<template>
<transition name="fade" mode="out-in">

   <div>
    <router-link :to="{name:'gerenzhuye'}">
      <img src="../assets/朋友圈.jpg" />
    </router-link>
  </div>

</transition>
 
</template>
<style>
/* .fang-enter-from {
transform: translateX(-100%);
}

.fang-enter-active {
  transition: 1s;
}

.fang-enter-to {
  transform: translateX(0);
} */
.fade-leave-active {
  transition:  3s ease;
}
.fade-enter-active {
  transition: 3s linear;
}
.fade-enter-to,.fade-leave-from {
 transform:translateX(0);
opacity: 1;
 }
.fade-leave-to,.fade-enter-from {
  transform:translateX(-100%);
  opacity:0
}
</style>
