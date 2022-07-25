import { defineStore } from "pinia";

export const useState = defineStore("commonState", {
  state: () => {
    return {
      userName: "韩振方",
      count: 18,
    };
  },
  actions: {
    cahngeName() {
      console.log("我被调用了", this.$state.userName);
    },
    changeCount() {
      this.count++;
      console.log("我被调用了", this.$state.count);
    },
  },
});

export const textPinia = defineStore("textStore", {
  state: () => {
    return { count: 1 };
  },
  actions: {
    addCount() {
      this.count++;
    },
  },
});
