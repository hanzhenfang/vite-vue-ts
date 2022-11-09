<script lang="ts" setup>
import { ref, onMounted, Ref } from "vue";

const nameBox = ref<HTMLDivElement>();

function keywordHightLight(content: string, keyword: string) {
  console.log("content", content);
  console.log("keyword", keyword);
  let _text: string = "";
  const result = content.split(keyword);
  console.log("result", result);
  for (let i = 0; i < result.length; i++) {
    if (!result[i]) return;
    const hightLightSpan = document.createElement("span");
    const commonSpan = document.createElement("span");
    hightLightSpan.classList.add("text-[#2EC1CC]");
    commonSpan.innerText = result[i];
    hightLightSpan.innerText = keyword;
    const _commonSpan = commonSpan.outerHTML;
    const _hightLightSpan = hightLightSpan.outerHTML;
    _text += _hightLightSpan + _commonSpan;
  }

  return _text;
}

function test(content: string, key: string) {
  let _text: string = "";
  const _reg = new RegExp(key, "g");
  console.log("_reg", _reg);
  _text = content.replace(_reg, `<span class='text-[blue]'>${key}</span>`);
  console.log("_text", _text);
  const result = `<span>${_text}</span>`;
  console.log("result", result);
  return result;
}

// const modifySearchContentList = computed(() => {
//   const _key = inputVal.value;
//   const _modifyData = searchContentList.value.map((item) => {
//     return {
//       modifyName: keywordHightLight(item.basename, _key),
//       modifyContent: keywordHightLight(item.lines.join(""), _key),
//       ...item,
//     };
//   });
//   console.log("_modifyData", _modifyData);
//   return _modifyData;
// });

// function keywordHightLight(content: string, keyword: string) {
//   let _text: string = "";
//   const result = content.split(keyword);
//   for (let i = 0; i < result.length; i++) {
//     const hightLightSpan = document.createElement("span");
//     const commonSpan = document.createElement("span");
//     hightLightSpan.classList.add("text-[#2EC1CC]");
//     commonSpan.innerText = result[i];
//     hightLightSpan.innerText = keyword;
//     const _commonSpan = commonSpan.outerHTML;
//     const _hightLightSpan = hightLightSpan.outerHTML;
//     _text += _hightLightSpan + _commonSpan;
//   }
//   return _text;
// }

// watch(modifySearchContentList, () => {
//   console.log("modifySearchContentList.value", modifySearchContentList.value);
// });

interface Persion {
  name: string;
  age: number;
}
const a: (Persion | { result: string })[] = [
  { name: "a", age: 1 },
  { name: "a", age: 1 },
  { name: "a", age: 1 },
  { name: "a", age: 1 },
  { result: "aa" },
];

onMounted(() => {
  console.log("哈哈");
});
</script>
<template>
  <div ref="nameBox " class="text-[18px]">
    <div v-html="test('韩振方aabbcc', 'a')"></div>
  </div>
</template>

<!-- display: -webkit-box;
color: #333333;
font-size: 14px;
font-weight: 600;
height: 20px;
-webkit-box-orient: vertical;
-webkit-line-clamp: 2; /* 这里是超出几行省略 */
overflow: hidden;
word-break: break-all;
text-overflow: ellipsis;

width: 200px;
word-break: break-all;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 2; /* 这里是超出几行省略 */
overflow: hidden; -->

<style>
.p {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2; /* 这里是超出几行省略 */
  color: red;
  width: 200px;
  font-size: 14px;
  font-weight: 600;
  word-break: break-all;
  text-overflow: ellipsis;
  overflow: hidden;
}
</style>
