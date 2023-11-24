<template>
  <view class="contact">
    <view class="contact-item" v-for="item in content" :key-="item.name">
      <view class="person">
        <view class="name">{{ item.name }}</view>
        <view class="phone">{{ item.phone }}</view>
      </view>
      <view class="email"> {{ item.email }} </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
type contactContent = {
  name: string
  phone: string
  email: string
}
const content = ref<contactContent[]>([
  {
    name: '张三',
    phone: '123456789',
    email: '1256151263@qq.com',
  },
  {
    name: '李四',
    phone: '123456789',
    email: '32649238@yeah.net',
  },
])
</script>
<style lang="scss">
.contact {
  width: 90%;
  margin: 0 auto;
  padding-top: 20rpx;

  .contact-item {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    height: 200rpx;
    background-color: #fff;
    // margin-bottom: 20rpx;
    padding: 20rpx;
    box-sizing: border-box;
    border-bottom: 1px solid #eee;

    .person {
      width: 100%;
      display: flex;
      justify-content: space-between;
      .name {
        font-size: 38rpx;
        font-weight: 600;
        color: #5d5c5c;
        margin-bottom: 20rpx;
      }

      .phone {
        font-size: 28rpx;
        margin-bottom: 20rpx;
        color: rgb(117, 186, 216);
      }
    }

    .email {
      font-size: 28rpx;
      color: #9f9d9d;
    }
  }
}
</style>
