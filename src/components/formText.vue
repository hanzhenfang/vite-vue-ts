<script setup lang="ts">
import { 
  ref,
  onMounted,
onBeforeMount,
onBeforeUnmount,
getCurrentInstance
} 
from "vue";
const userName = ref<string>();
const password = ref<number>();
const gameName = ref<string>("英雄联盟");
const sex = ref<string>("man");
const hobby = ref<Array<string>>([]);
const time  =ref()

const props =defineProps<{
fatherName:String,
fatherAge:Number,
fatherChildren:number,
}>()

function updateUserInfo() {
  console.log("哈哈");
}

function getNowTime(){
  setInterval(()=>{
   time.value = Date.now()
  },1000)
}

function changeFatherName(){
  
}

onBeforeMount(()=>{
  setTimeout(()=>{
    // debugger
  })
  // const instance = getCurrentInstance();
  // console.log(instance)
})

onMounted(()=>{
  const instance = getCurrentInstance();
 (instance?.refs.myButton as HTMLButtonElement).innerHTML="不确定"
})

</script>

<template>
  <div>
    <form @submit.prevent="updateUserInfo">
      <div class="space">账号:<input v-model="userName" /></div>
      <div class="space">
        密码:<input 
        type="password" 
        v-model.number="password" />
      </div>
      <div>
        女<input v-model="sex" value="woman" type="radio" /> 男<input
          v-model="sex"
          value="man"
          type="radio"
        />
      </div>
      <div>
        爱好: 学习<input v-model="hobby" type="checkbox" value="学习" />
        打游戏<input v-model="hobby" type="checkbox" value="打游戏" />
        打球<input v-model="hobby" type="checkbox" value="打球" />
      </div>
      <div>
        爱好:
        <select v-model="gameName" class="space">
          <option value="">请选择游戏</option>
          <option value="英雄联盟">英雄联盟</option>
          <option value="王者荣耀">王者荣耀</option>
          <option value="地下城与勇士">地下城与勇士</option>
        </select>
      </div>
      <button ref="myButton">确定</button>
    </form>
    <div>
      <h4>现在的时间是:{{time}}</h4>
      <h4>我是父亲传来的名字:{{props.fatherName}}</h4>
      <h4>我是父亲传来的年龄:{{props.fatherAge}}</h4>
    </div>
  </div>
</template>

<style>
.space {
  margin-bottom: 1em;
}
</style>
