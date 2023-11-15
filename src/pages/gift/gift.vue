<template>
  <div></div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
import { onLoad } from '@dcloudio/uni-app';

onLoad(() => {
  uni.showToast({
    title: '礼品中心部分功能尚未实现，敬请期待~',
    icon: 'none',
    duration: 2000,
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
<style scoped></style>