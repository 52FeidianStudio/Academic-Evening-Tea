<template>
  <view class="category">
    <navigator :url="item.url" class="category-item" hover-class="none" v-for="item in items" :key="item.id" open-type="navigate">
      <image :src="item.icon" class="icon" />
      <text class="text">{{ item.text }}</text>
    </navigator>
  </view>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
type Category = {
  id: number
  text: string
  icon: string
  url:string
}
const items = ref<Category[]>([
  {
    id: 1,
    text: '活动发起',
    icon: '../../../static/home/activity.png',
    url:'/pages/activity/activity'
  },
  {
    id:2,
    text:'活动签到',
    icon:'../../../static/home/sy-sign_in.png',
    url:'/pages/activity/ActivitySignIn'
  },
  {
    id:3,
    text:'礼品中心',
    icon:'../../../static/home/sy-article.png',
    url:'/pages/gift/gift'
  },
  {
    id:4,
    text:'我要推荐',
    icon:'../../../static/home/sy-video.png',
    url:'/pages/recommend/recommend'
  }
])


</script>

<style lang="scss">
.category {
  margin: 25rpx 0 0;
  padding: 10rpx 0;
  display: flex;
  flex-wrap: nowrap;
  // min-height: 328rpx;
  justify-content: space-around;

  .category-item {
    width: 150rpx;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;

    .icon {
      width: 90rpx;
      height: 90rpx;
    }

    .text {
      font-size: 26rpx;
      color: #666;
    }
  }
}
</style>