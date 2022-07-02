<script setup lang="ts">
import { ref, onMounted, watch, Ref } from "vue";
const props = defineProps({
  msg: String,
});

const age = ref<Array<number | string>>([132, 2, 4, "1"]);
let myWindow = ref<string[]>();

const searchKeyWords = ref("");
const newTodo = ref("");
const filLists = ref();

let doLists = ref<string[]>(["吃饭", "睡觉", "打豆豆"]);

function handleAddItem() {
  doLists.value.push(newTodo.value);
  filLists.value = doLists.value;
  newTodo.value = "";
}

function handleDelAllList() {
  doLists.value = [];
}

function delThisList(index: number, e: MouseEvent) {
  doLists.value.splice(index, 1);
  filLists.value = doLists.value;
  searchKeyWords.value = "";
}

function baidu(e: KeyboardEvent) {
  console.log(e.key);
}

//搜索关键词展示列表
function handleSearch() {
  filLists.value = doLists.value.filter(
    (item) => item.indexOf(searchKeyWords.value) !== -1
  );
}

onMounted(() => {});

watch(
  searchKeyWords,
  () => {
    console.log(filLists.value);
    handleSearch();
  },
  { immediate: true }
);
</script>

<template>
  <div>
    <h1>{{ props.msg }}</h1>
    <h2>今天天气非常</h2>
    <!-- <button @click="myWindow.console.log(myWindow)">切换天气</button> -->
    <!-- <a href="http://baidu.com" @click.prevent="baidu">百度</a> -->
    <div class="wrapper">
      <div class="userInputArea">
        <span :style="{ marginRight: '20px', backgroundColor: 'pink' }">
          <input
            v-model="newTodo"
            placeholder="请输入新的事件"
            @keyup.Shift="baidu"
          />
          <button
            :disabled="newTodo === '' ? true : false"
            @click="handleAddItem"
          >
            添加
          </button>
        </span>

        <span>
          <input v-model="searchKeyWords" placeholder="请输入要搜索的事件" />
          <button
            :disabled="searchKeyWords === '' ? true : false"
            @click="handleSearch"
          >
            搜索
          </button>
        </span>
      </div>

      <div class="listShowArea">
        <ul v-if="doLists.length !== 0">
          <li v-for="(item, index) in filLists" :key="item">
            {{ item }}
            <button @click="($event) => delThisList(index, $event)">
              删除
            </button>
          </li>
        </ul>
      </div>

      <div>
        <button>清除所有</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  border: 1px solid black;
  border-radius: 20px;
}

.listShowArea {
  height: 200px;
  overflow: auto;
}
</style>
