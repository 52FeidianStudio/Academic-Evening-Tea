<template>
  <view v-if="isLogin" class="order-list">
    <view v-if="orders.length!==0" v-for="order in orders" :key="order.id" class="order-item">
      <image :src="order.coverPicture" class="order-image" />
      <view class="order-details">
        <text class="order-name">{{ order.name }}</text>
        <text class="order-time">兑换时间：{{ order.createTime }}</text>
        <text class="order-time">兑换个数：{{ order.nums }}</text>
        <text v-if="order.state==1" class="order-status">礼品状态:未领取</text>
        <text v-else class="order-status">礼品状态:已领取</text>
        <text class="order-amount">花费积分：{{ order.total }}</text>
      </view>
    </view>
    <view class="noLogin"  v-else>
      <uni-icons type="wallet" size="90"></uni-icons>
      <view>兑换记录为空</view>
    </view>
  </view>
  <view class="noLogin" v-else>
    <uni-icons type="person"  size="90"></uni-icons>
    <view @click="goLogin">尚未登陆 , 点击登录</view>
  </view>
</template>

<script setup lang="ts">
import { getGiftHistory } from '@/services/gift'
import { onLoad, onShow } from '@dcloudio/uni-app'
import { ref } from 'vue'
onLoad(()=>{
  if(uni.getStorageSync('token')){
  getHistory()}
  else{
    isLogin.value=false
  }
})
onShow(()=>{
  if(uni.getStorageSync('token')){
  getHistory()}
})
const isLogin=ref<boolean>(true)
const goLogin=()=>{
  uni.navigateTo({
            url: '/pages/login/login'
          })
}
const getHistory= async()=>{
  const res =await getGiftHistory()
  console.log(res)
  orders.value=res.rows
}
const orders=ref( [
      ])
  

</script>

<style>
.order-list {
  width:100vw;
  padding: 2.5vw;
}

.order-item {
  padding: 5rpx;
  width:95vw;
 box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  margin-bottom: 1.5vh;
}

.order-image {
  width: 150rpx;
  height: 150rpx;
  margin-right: 10rpx;
}

.order-details {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.order-name {
  font-size:24rpx;
  font-weight: bold;
  padding-bottom: 5rpx;
}

.order-time {
  color: gray;
  font-size: 16rpx;
  margin-bottom: 5rpx;
}

.order-status {
  font-size: 24rpx;
  margin-bottom: 5rpx;
}

.order-amount {
  font-weight: bold;
   font-size: 24rpx;
}
.noLogin{
 padding:40px ;
 text-align: center;
}
</style>
