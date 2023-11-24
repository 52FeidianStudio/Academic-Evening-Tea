<template>
  <view class="details">
    <view class="header">
      <view class="title">{{ item.title }}</view>
      <view class="time">{{ item.createTime }}</view>
    </view>
    <view class="ql-editor" id="content" ref="contentRef" v-html="item.content"></view>
  </view>
</template>

<script setup lang="ts">
import '@/styles/quill.bubble.css'
import '@/styles/quill.snow.css'
import '@/styles/quill.core.css'
import { ref, reactive } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import { getColumnsDetailAPI } from '@/services/column'
const contentRef = ref<HTMLElement | null>(null)
type details = {
  title: string
  createTime: string
  content: string
}
const props = defineProps<{
  id: number
  kind: number
}>()
const item = ref<details>({
  title: '',
  createTime: '',
  content: '',
})
const getColumnsDetail = async (id: number) => {
  const res = await getColumnsDetailAPI(id)
  console.log(res.data)
  item.value = res.data
  item.value.content = item.value.content.replace(
    /\<img/g,
    '<img style="max-width:100%;height:auto" ',
  )
}
onLoad(() => {
  console.log(props.id)
  console.log(props.kind)
  getColumnsDetail(props.id)
})
</script>
<style scoped lang="scss">
.details {
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  .header {
    width: 90%;
    margin: 0 auto;
    .title {
      font-size: 45rpx;
      font-weight: bold;
      margin-top: 10rpx;
      margin-bottom: 15rpx;
    }

    .time {
      font-size: 30rpx;
      color: #999;
      margin-bottom: 20rpx;
      padding-left: 15rpx;
    }
  }
  .content {
    width: 100%;
  }
}
</style>
