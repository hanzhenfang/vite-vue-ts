<template id="ShopTab">
  <ion-page>
    <ion-header translucent mode="ios">
      <ion-toolbar>
        <div class="flex">
          <div class="flex flex-1"></div>
          <div class="flex grow text-[16px] items-center justify-center">
            <div class="flex relative items-center" ref="tabWrapperBox">
              <div
                class="cursor-pointer transition-all align-middle"
                @click="handleClickTabItem(item)"
                :class="item.class"
                v-for="item in mapMenuAsClassData">
                {{ item.name }}
              </div>
              <div :style="menuActiveStyle"></div>
            </div>
          </div>
          <div class="flex flex-1 justify-end">
            <button
              @click="handleClickRightMenuOnceItem(item.action)"
              class="mr-[13px]"
              v-for="item in menuRightActionData">
              <img :src="item.image" class="w-[20px] h-[20px]" />
            </button>
          </div>
        </div>
      </ion-toolbar>
    </ion-header>

    <keep-alive>
      <recommend-vue
        key="recommend"
        v-if="currentIndex == MenuAction.recommend" />
      <lazycat-vue key="lazycat" v-else />
    </keep-alive>
  </ion-page>
</template>

<script setup lang="ts">
import RecommendVue from "./Recommend.vue"
import LazycatVue from "./Lazycat.vue"
import { IonPage, IonToolbar, IonHeader } from "@ionic/vue"
import { ref, computed, type CSSProperties, onMounted } from "vue"
import { MenuAction } from "."

import searchSVG from "@/assets/搜索.svg"
import categorySVG from "@/assets/分类.svg"

import { useRouter } from "vue-router"

const data = [
  {
    name: "懒猫云",
    action: MenuAction.lazycat,
  },
  {
    name: "推荐",
    action: MenuAction.recommend,
  },
]

enum menuRightActionType {
  /**
   * 搜索
   */
  search,

  /**
   * 分类
   */
  category,
}

const menuRightActionData = [
  {
    image: searchSVG,
    action: menuRightActionType.search,
  },
  {
    image: categorySVG,
    action: menuRightActionType.category,
  },
]

const tabWrapperBox = ref()
const currentIndex = ref(MenuAction.recommend)

// NOTE: 标记的在 `414 * 896` 尺寸下最准的两个坐标点
// ====> 如果要默认使用懒猫云作为默认 `tab` 则可以修改为 21
// => [ 懒猫云, 推荐 ]
const OFFSETS = [21, 86]

const tabOffset = ref<number>(OFFSETS[1])

const router = useRouter()

// NOTE:
// => 计算 `[ 懒猫云, 推荐 ]` 选中后样式
const mapMenuAsClassData = computed(() => {
  return data.map((item) => {
    const isLazyCat = item.action == MenuAction.lazycat
    const isCurrent = item.action == currentIndex.value
    let _class = `menu-action-item-${item.action} `
    if (isLazyCat) {
      _class += " mr-[27px]"
    }
    if (isCurrent) {
      _class += " font-bold scale-125"
    }
    return {
      ...item,
      class: _class,
    }
  })
})

// NOTE:
// => 计算 `[ 懒猫云, 推荐 ]` 小蓝条样式
const menuActiveStyle = computed(() => {
  const offset = tabOffset.value
  return <CSSProperties>{
    position: `absolute`,
    width: `18px`,
    height: `3px`,
    background: `#2EC1CC`,
    borderRadius: `1.5px`,
    bottom: `-5px`,
    left: `0px`,
    transition: `all .1s`,
    transform: `translateX(${offset}px)`,
  }
})

onMounted(() => {
  setTimeout(() => {
    handleClickTabItem({ action: currentIndex.value })
  }, 24)
})

function handleClickTabItem({ action }: any) {
  const box = tabWrapperBox.value as HTMLElement
  const tabs = Array.from(box.querySelectorAll("div")).slice(0, 2)
  const $el = tabs[action]
  const { offsetLeft, clientWidth } = $el
  const offset = clientWidth / 2

  // NOTE: 距离父元素左边距离 + (内容宽度 - 蓝条) / 2 - 自定的6px
  let nowOffset = offsetLeft + offset - 6

  // NOTE: 在某些边界情况下拿到负数的情况下使用默认定死的 `offset`
  if (nowOffset <= 0) {
    nowOffset = OFFSETS[action]
  }
  tabOffset.value = nowOffset
  currentIndex.value = action as MenuAction
}

// NOTE:
// => 点击右边菜单( `搜索` | `菜单` )
async function handleClickRightMenuOnceItem(action: menuRightActionType) {
  // TODO `分类` | `搜索`
  const path = action == menuRightActionType.category ? "/shop/category" : ""
  await router.push(path)
}
</script>

<style scope></style>
