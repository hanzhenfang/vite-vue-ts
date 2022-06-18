<script setup lang="ts">
import { ref } from "vue";
const userName = ref<string>();
const password = ref<number>();
const gameName = ref("英雄联盟");
const sex = ref("man");
</script>

<template>
  <div>
    <form>
      <div class="space">账号:<input v-model="userName" /></div>

      <div class="space">密码:<input v-model="password" /></div>
      <div>
        女<input v-model="sex" value="woman" type="radio" />
        男<input v-model="sex" value="man" type="radio" />
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
    </form>
  </div>
</template>

<style>
.space {
  margin-bottom: 1em;
}
</style>
