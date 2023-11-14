<template>

 <div>
  <view class="aboutUs">
    <view class="img">
      <image src="../../../static/log.png"></image>
    </view>
    <view class="content">签到后获得1积分</view>
    <view class="content">填写详细信息后可以获得1积分</view>
      
      <view class="content"> 完成一次意见反馈可以获得1 积分</view>
      <view class="content">推荐可积1分，内容采纳再积2分</view>
  </view>
 </div>

</template>

<script setup lang='ts'>
// import { ref,reactive } from 'vue'
// import { onLoad } from '@dcloudio/uni-app';

// onLoad(()=>{
//   uni.showToast({
//     title:'积分部分功能尚未实现，敬请期待~',
//     icon:'none',
//     duration:2000,
//     complete: function () {
//       setTimeout(function () {
//         uni.switchTab({
//           url: '/pages/index/index'
//         });
//       }, 2000); // 在弹窗关闭后，延迟2秒执行页面跳转
//     }
//   })
// })
</script>
<style  lang="scss">
.aboutUs {
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  .img {
    width: 100%;
    text-align: center;
    margin-top: 60rpx;

    image {
      width: 200rpx;
      height: 200rpx;
      background: rgb(25, 178, 243);
      opacity: 1;
      border-radius: 16px;
    }
  }

  .content {
    margin-top: 40rpx;
    line-height: 1.5;
    text-align: center;
    color: rgb(74, 73, 73);
  }}
</style>