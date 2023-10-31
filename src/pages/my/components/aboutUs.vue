<template>
  <view class="aboutUs">
    <view class="img">
      <image src="../../../static/log.png"></image>
    </view>
    <view class="content">
      学术晚茶，打造身边的学术交流平台。不搞大水漫灌，现在还是这样，但是特殊时期要有特殊的政策，我们叫做放水养鱼。中国经济保持稳定、稳住基本盘，本身就是对世界的贡献，而且会为世界经济恢复增长、实现发展作出积极贡献。</view>
  </view>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'

</script>
<style lang="scss">
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
    color: rgb(74, 73, 73);
  }
}</style>