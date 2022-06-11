<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
const props = defineProps({
  msg: String,
})

let isHot = ref(true);
let newTodo = ref("");
let doLists = ref<string[]>(["吃饭", "睡觉", "打豆豆"]);

function debug(thing: any) {
  return console.log(thing);
}

function handleAddItem() {

  doLists.value.push(newTodo.value);
  newTodo.value = "";
}

function handleDelAllList() {
  doLists.value = []
}

function delThisList(index: number, e: MouseEvent) {
  console.log((e.target as HTMLButtonElement).value);
  doLists.value.splice(index, 1)
}

function baidu(e: KeyboardEvent) {
  console.log(e.key)
}

onMounted(() => {
})

function changeHot() {
  isHot.value = !isHot.value;
}

</script>

<template>
  <h1>{{ props.msg }}</h1>
  <h2>今天天气非常{{ isHot ? '炎热' : '冷' }}</h2>
  <button @click="isHot = !isHot">切换天气</button>
  <!-- <a href="http://baidu.com" @click.prevent="baidu">百度</a> -->
  <div class="wrapper">
    <div class="userInputArea">
      <span>
        <input v-model="newTodo" placeholder="请输入新的事件" @keyup.Shift="baidu" />
        <button :disabled="newTodo === '' ? true : false" @click="handleAddItem">
          添加
        </button>
      </span>
    </div>

    <div class="listShowArea">
      <ul v-if="doLists.length !== 0">
        <li v-for="(item, index) in doLists" :key="item">
          {{ item }}
          <button @click="delThisList(index, $event)">删除</button>
        </li>
      </ul>
    </div>

    <div>
      <button>清除所有</button>
    </div>

  </div>
</template>

<style scoped>
.wrapper {
  border: 1px solid black;
  border-radius: 20px;
}

.listShowArea {
  height: 100px;
  overflow: auto;
}
</style>
