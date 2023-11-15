<script setup lang="ts">
//
import { onLoad,onShow } from '@dcloudio/uni-app';
onLoad(()=>{
  uni.showToast({
    title:'精彩专栏部分功能尚未实现，敬请期待~',
    icon:'none',
    duration:2000,
    complete: function () {
      setTimeout(function () {
        uni.switchTab({
          url: '/pages/index/index'
        });
      }, 2000); // 在弹窗关闭后，延迟2秒执行页面跳转
    }
  })
})
onShow(()=>{
  uni.showToast({
    title:'精彩专栏部分功能尚未实现，敬请期待~',
    icon:'none',
    duration:2000,
    complete: function () {
      setTimeout(function () {
        uni.switchTab({
          url: '/pages/index/index'
        });
      }, 2000); // 在弹窗关闭后，延迟2秒执行页面跳转
    }
  })
}) 
</script>

<template>
  <view class="cart"></view>
</template>

<style lang="scss">
//
</style>
