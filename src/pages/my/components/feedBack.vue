<template>
  <view class="feedback">
    <view class="feedback-item">
      <view class="feedback-content">
        <view class="feedback-content-item">
          <view class="feedback-content-item-title">问题描述</view>
          <view class="feedback-content-item-input">
            <textarea name="" id="" cols="30" rows="10" placeholder="请描述您的问题"></textarea>
          </view>
        </view>
        <view class="feedback-content-item">
          <view class="feedback-content-item-title">上传图片</view>
          <uni-file-picker v-model="feedBack.img" :limit="9" file-mediatype="image" />
        </view>
        <view class="feedback-content-item">
          <view class="feedback-content-item-title">联系方式</view>
          <view class="feedback-content-item-input">
            <uni-easyinput v-model="feedBack.contact" type="text" placeholder="请输入您的联系方式" @confirm="" />
          </view>
        </view>
      </view>
      <view class="feedback-btn">
        <button class="btn" type="primary" size="default" @click="">提交</button>
      </view>
    </view>
  </view>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
type feedBackContent = {
  problem: string,
  contact: string,
  img: string
}

const feedBack = ref<feedBackContent>(
  {
    problem: '',
    contact: '',
    img: ''
  }
)

</script>
<style lang="scss">
.feedback {
  height: 100vh;
  width: 90%;
  margin: 0 auto;
  padding-top: 20rpx;

  .feedback-item {
    width: 100%;
    height: 100%;
    background-color: #fff;
    padding: 20rpx;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .feedback-content {
      width: 100%;
      height: 95%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .feedback-content-item {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        // margin-bottom: 60rpx;

        .feedback-content-item-title {
          font-size: 28rpx;
          font-weight: 600;
          color: #5d5c5c;
          margin-bottom: 20rpx;
        }

        .feedback-content-item-input {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;

          textarea {
            width: 100%;
            height: 200rpx;
            border: 1px solid #eee;
            border-radius: 10rpx;
            padding: 20rpx;
            box-sizing: border-box;
            font-size: 28rpx;
            color: #5d5c5c;
            resize: none;
          }

          .feedback-content-item-input-img {
            width: 100%;
            height: 200rpx;
            display: flex;
            justify-content: space-between;
            align-items: center;

            image {
              width: 200rpx;
              height: 200rpx;
              border: 1px solid #eee;
              border-radius: 10rpx;
            }
          }
        }
      }
    }

    .feedback-btn{
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      margin-bottom: 30rpx;
      .btn{
        width: 40%;
      }
    }
  }
}
</style>