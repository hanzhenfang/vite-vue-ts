<template>
  <ion-page>
    <ion-header translucent mode="ios">
      <ion-toolbar
        mode="ios"
        color="#fff"
        class="p-0"
        style="
          --padding-start: 0;
          --padding-end: 0;
          --padding-bottom: 0;
          --padding-top: 0;
        ">
        <div class="flex items-center px-[16px]">
          <div class="flex flex-1 justify-start">
            <img
              @click="$router.back()"
              src="@/assets/上一步.svg"
              class="h-[20px] w-[24px] object-none object-left" />
          </div>
          <div class="flex grow items-center justify-center text-[16px]">
            <span class="text-[18px] font-medium text-[#202020]">
              选择收货地址
            </span>
          </div>
          <div class="flex flex-1"></div>
        </div>
      </ion-toolbar>
    </ion-header>
    <ion-content style="--background: #f7f8f9">
      <div
        class="bg-[#F7F8F9] pt-[10px]"
        style="height: calc(100% - 20px - 40px - 10px); overflow: hidden auto">
        <div
          class="bg-white"
          :class="{
            'h-full': !hasShopAddrs,
            'bg-[#F7F8F9]': !hasShopAddrs,
          }">
          <div
            ref="shopAddrsRef"
            v-if="hasShopAddrs"
            class="flex items-center relative pr-[5px] h-[136px] justify-end after_line"
            v-for="(item, index) in shopAddrsCalc"
            @touchstart="touchstart($event)"
            @touchend="touchend($event)"
            @click.stop="handleClickAddrItem(index)"
            style="
              transform: translateX(0px);
              transition: all 0.4s ease-in-out 0s;
            ">
            <div class="flex px-[16px] absolute left-0 w-full">
              <div class="grow" style="width: calc(100% - 16px - 24px)">
                <div class="flex justify-between mb-[13px]">
                  <div class="flex items-center">
                    <CheckedVue
                      :value="item.id == shopDefaultAddrID"
                      :fadeTime="400" />
                    <div class="w-[13px]"></div>
                    <div>
                      <p class="text-[16px] text-[#333333] font-medium">
                        {{ item.consignee }}
                      </p>
                      <p class="text-[14px] text-[#333333] font-normal">
                        {{ item.phone }}
                      </p>
                    </div>
                  </div>

                  <div
                    class="w-[42px] h-[42px] flex justify-end"
                    @click.stop="handleClickEditIcon(index)">
                    <img class="w-[16px] h-[16px]" :src="editIcon" />
                  </div>
                </div>
                <p class="grow text-[#999999] text-[14px] pb-[12px]">
                  {{ item.addr }} {{ item.addr_detailed }}
                </p>
              </div>
            </div>

            <div
              class="items-center absolute right-0 flex h-full"
              :style="{
                width: `${touchSlideBindCalcOffset}px`,
              }"
              style="transform: translateX(100%)"
              @touchend.stop
              @touchstart.stop
              @click.stop>
              <div
                @click="handleClickSlideOnceAction(index)"
                v-for="item in touchSlideActions"
                :style="{
                  background: item.color,
                }"
                class="flex-1 w-full h-full items-center justify-center text-center flex text-[#fff] text-[14px]">
                {{ item.title }}
              </div>
            </div>
          </div>
          <div
            v-else
            class="h-full flex items-center flex-col pt-[18vh] space-y-[20px]">
            <div>
              <img src="@/assets/shop/暂无地址.svg" />
            </div>
            <p class="text-[14px] text-[#999999]">还没有添加收货地址</p>
          </div>
        </div>
      </div>

      <div
        @click="goToAddr(-1)"
        class="flex items-center px-[16px] fixed bottom-[20px] left-[0] justify-center w-full">
        <div
          class="flex items-center justify-center w-full text-[14px] font-medium text-[#fff] bg-[#2EC1CC] rounded-[20px] h-[40px]">
          添加新收货地址
        </div>
      </div>

      <dialog-vue
        :show="canShowModal"
        :postion="Position.center"
        :fadeTime="420">
        <div
          class="rounded-[10px] h-[183px] overflow-hidden bg-white p-[24px] pt-[22px] m-[43px]">
          <div
            class="bg-white justify-center items-center text-[18px] font-semibold h-[25px] leading-[25px] pb-[9px]">
            提示
          </div>
          <div class="pt-[9px] pb-[21px]">
            {{ "是否删除该地址" }}
          </div>
          <div class="px-2 flex items-center justify-center">
            <button
              :class="{ 'mr-2': index == 0 }"
              :style="{
                color: item.color,
                background: item.bg,
              }"
              v-for="(item, index) in modalButtonAction"
              class="w-[120px] h-[42px] rounded-[24px] text-[14px]"
              @click="handleClickModalAction(item.title)">
              {{ item.title }}
            </button>
          </div>
        </div>
      </dialog-vue>
    </ion-content>
  </ion-page>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue"
import { IonHeader, IonToolbar, IonContent, IonPage } from "@ionic/vue"
import { Position } from "@/components/modal"
import useShopAddrs from "@/store/shop/addr"

import { useRouter } from "vue-router"

import DialogVue from "@/components/modal/CuModal.vue"
import CheckedVue from "./Checked.vue"
import editIcon from "@/assets/shop/编辑.svg"

import { getDisplayPhoneNumber } from "@/utils/common"
import { showSingleInstanceToast } from "@/components/toast"

const router = useRouter()

const shopAddrState = useShopAddrs()

const hasShopAddrs = computed<boolean>(() => shopAddrState.hasAddr)
const shopAddrs = computed(() => shopAddrState.addrs)
const shopDefaultAddrID = computed<string>(() => shopAddrState.defaultAddrID)

const shopAddrsRef = ref()

const canShowModal = ref(false)

const shopAddrsCalc = computed(() => {
  return shopAddrs.value.map((item) => {
    const phone = getDisplayPhoneNumber(item.phone.toString())
    return {
      ...item,
      phone,
    }
  })
})

const touchSlideActionItemWidth = 80
const touchSlideActions = [
  {
    title: "删除",
    color: "#F56C6C",
  },
]

const touchSlideBindCalcOffset = computed<number>(() => {
  return touchSlideActions.length * touchSlideActionItemWidth
})

enum ModalButtonActionID {
  Cancel = "取消",
  Confirm = "确定",
}

const modalButtonAction = [
  {
    title: ModalButtonActionID.Cancel,
    color: "#333",
    bg: "#F5F5F5",
  },
  {
    title: ModalButtonActionID.Confirm,
    color: "#fff",
    bg: "#2EC1CC",
  },
]

const startX = ref(0)
const endX = ref(0)

const TOUCH_MOVE_SIZE = 30

const currentOperationIndex = ref(-1)

function touchstart($event: TouchEvent) {
  const touch = $event.changedTouches[0]
  startX.value = touch.clientX
}

function touchend($event: TouchEvent) {
  const $el = $event.currentTarget as HTMLElement
  const _endX = $event.changedTouches[0].clientX
  endX.value = _endX
  const offset = startX.value - _endX
  let x = 0
  if (offset >= TOUCH_MOVE_SIZE) {
    // 左滑
    x = -touchSlideBindCalcOffset.value
  } else if (offset <= -TOUCH_MOVE_SIZE) {
    // 右滑
    // XXX: 默认就是0了, so? 写这一层有何意义?
    x = 0
  }
  // FIXME: 为了解构, 尽量不要在这里操作DOM!!
  $el.style.transform = `translateX(${x}px)`
  // startX.value = 0
  // endX.value = 0
}

function handleClickAddrItem(index: number) {
  shopAddrState.setDefaultAddrAsIndex(index)
}

async function handleClickModalAction(title: ModalButtonActionID) {
  canShowModal.value = false
  let message = "已取消删除该地址"
  const $els = Array.from(shopAddrsRef.value) as HTMLElement[]
  if ($els.length <= 0) return
  const index = currentOperationIndex.value
  if (title == ModalButtonActionID.Confirm) {
    shopAddrState.remove(index)
    let setIndex = -1

    // NOTE: 删除之后将默认设置为 `[0]`
    if (shopAddrState.hasAddr) {
      setIndex = 0
    }

    // XXX: 下方逻辑动态处理 `setIndex` 的值
    // XXX: 实际上理想情况下这部分逻辑应该是后端提供的(即在删除之后重新请求数据)
    // 首先处理边界情况
    // => 如果 `isSelect` && (0 || shopAddrs.length - 1) 则 = 0 || shopAddrs.length - 1
    // => 如果 defaultIndex = -1 则不需要处理
    //
    // 如果 index > defaultIndex 则 - 1
    // 如果 index < defaultIndex 则不变 = defaultIndex
    // if (isSelect) {
    //   console.log("当前已选中: ", index, defaultIndex)
    //   if (index == 0) setIndex = 0
    //   if (index == shopArr.length - 1) setIndex = shopArr.length - 2
    // } else {
    //   if (index < defaultIndex) {
    //     console.log("删除的元素在defaultIndex之下")
    //     const calcIndex = defaultIndex - 1
    //     console.log('calcIndex: ', calcIndex);
    //     setIndex = calcIndex >= 0 ? calcIndex : 0
    //   } else {
    //     console.log("删除的元素在defaultIndex之上")
    //     console.log('index: ', index, defaultIndex);
    //     setIndex = defaultIndex
    //   }
    // }

    shopAddrState.setDefaultAddrAsIndex(setIndex)
    message = "删除地址成功"
    $els.forEach(($el) => {
      $el.style.transform = `translateX(0px)`
    })
  } else {
    $els[index].style.transform = `translateX(0px)`
  }
  await new Promise((res: any) => {
    setTimeout(() => {
      res()
    }, 100)
  })
  showSingleInstanceToast({
    message,
    duration: 1000,
    position: "bottom",
  })
}

// NOTE: -1 代表着不传递参数, 即不是修改地址而是新增
function goToAddr(index: number) {
  let path = "/shop/order/addr"
  if (index >= 0) {
    path = `${path}?index=${index}`
  }
  router.push(path)
}

function handleClickEditIcon(index: number) {
  goToAddr(index)
}

function handleClickSlideOnceAction(index: number) {
  canShowModal.value = true
  currentOperationIndex.value = index
}
</script>

<style scoped>
.after_line::after {
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  width: 200%;
  height: 200%;
  border-bottom: 1px solid #ddd;
  border-radius: inherit;
  content: " ";
  -webkit-transform: scale(0.5);
  transform: scale(0.5);
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
  pointer-events: none;
}
</style>
