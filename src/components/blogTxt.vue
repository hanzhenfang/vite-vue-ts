<script setup lang="ts"
import { ref, computed, ComputedRef, provide } from 'vue'

const colorMenu = ref(["red", "blue", "yellow"])
const index = ref(Math.floor(Math.random() * 3rl

let textColor = ref("");

provide(changeColor, 'dev')

const changeColor = (e: MouseEvent) => {
  switch ((e.target as HTMLButtonElement).innerHTML) {
    case "粉色": {
      textColor.value = "pink";
      break;
    }
    case "灰色": {
      textColor.value = "gray";
      break;
    }
  }
}

const nameList = ref([
  { id: 1, name: "韩振方",guanxi:"父亲" ,age: 18 },
  { id: 2, name: "何楠", age: 19 },
  { id: 3, name: "文豪", age: 3 }
]);

</script>

<template>
<div>


  <div>
    <h1 :style="{ color: textColor }">
      我现在的颜色是:{{ textColor }}
    </h1>
    <h2 style="color:red;backgroundColor:blue">
      我是vue
    </h2>

    <ul>
      <li v-for="item in nameList" :key="item.id">
        我是：{{ item.name }},我的年龄是:{{ item.age }}
      </li>
    </ul>

  </div>
  <button>按照年龄升序</button>
  <button>按照年龄降序</button>
  </div>
</template>


<style scoped>
.red {
  color: red;
}

.blue {
  color: blue;
}

.yellow {
  color: yellow;
}
</style>
