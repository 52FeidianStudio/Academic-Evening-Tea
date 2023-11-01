<template>
      <view class="post-container" v-for="(item,index) in local_database">
        <view class="post-author-date">
          <image class="post-author" :src="item.avatar"></image>
          <text class="post-date">{{item.date}}</text>
        </view>
        <text class="post-title">{{item.title}}</text>
        <image class="post-image" :src="item.imgSrc"></image>
        <text class="post-content">{{item.content}}</text>
        <view class="post-like">
          <uni-icons type="heart" size="20"></uni-icons>
          <text class="post-like-font">{{item.reading}}</text>
         <uni-icons type="paperplane" size="20"></uni-icons>
          <text class="post-like-font">{{item.collection}}</text>
        </view>
      </view>
</template>

<script>
  export default {
    data(){
      return {
        local_database: [
              {
                date:"Nov 10 2016",
                title:"文章标题1",
                imgSrc:'../../../static/giftCenter/giftt0.webp',
                avatar:'../../../static/giftCenter/giftt0.webp',
                content:"文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介",
                reading:"92",
                collection:"65",
                view_img:'../../../static/giftCenter/giftt0.webp',
                collect_img:'../../../static/giftCenter/giftt0.webp',
              },
              {
                date:"Nov 20 2016",
                title:"文章标题2",
                imgSrc:'../../../static/giftCenter/giftt0.webp',
                avatar:'../../../static/giftCenter/giftt0.webp',
                content:"文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介",
                reading:"88",
                collection:"66",
                view_img:'../../../static/giftCenter/giftt0.webp',
                collect_img:'../../../static/giftCenter/giftt0.webp',
              }
]
      }
    }
  }
</script>

<style>
  .post-container{
    display: flex;
    flex-direction: column;
    margin-top: 20rpx;
    margin-bottom: 40rpx;
    background-color: #fff;
    border-bottom: 1px solid #ededed;
    border-top: 1px solid #ededed;
    padding-bottom: 5px;
  }
  .post-author-date{
    margin: 10rpx 0 20rpx 10rpx;
  }
  .post-author{
    width: 60rpx;
    height: 60rpx;
    vertical-align: middle;
  }
  .post-date{
    margin-left: 20rpx;
    vertical-align: middle;
    margin-bottom: 5px;
    font-size: 26rpx;
  }
  .post-title{
    font-size: 34rpx;
    font-weight: 600;
    color: #333;
    margin-bottom: 10px;
    margin-left: 10px;
  }
  .post-image{

    width: 100%;
    height: 340rpx;
    margin: auto 0;
    margin-bottom: 15px;
  }
  .post-content{
    color: #666;
    font-size: 28rpx;
    margin-bottom: 20rpx;
    margin-left: 20rpx;
    letter-spacing: 2rpx;
    line-height: 40rpx;
  }
  .post-like{
    font-size: 13px;
    flex-direction: row;
    line-height: 16px;
    margin-left: 10px;
  }
  .post-like-image{
    width: 16px;
    height: 16px;
    margin-right: 8px;
    vertical-align: middle;
  }
  .post-like-font{
    vertical-align: middle;
    margin:0 20px 3rpx 0;
  }

</style>
