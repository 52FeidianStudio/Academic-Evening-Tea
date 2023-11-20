<script >
  import newsItem from './components/newsItem.vue';
  export default{
    data(){
      return {
        showMoments:true,
      }
    },
    methods: {
      isShowMoments() {
        this.showMoments = true;
        console.log(this.showMoments);
      },
      isShowTimes() {
        this.showMoments = false;
        console.log(this.showMoments);
      },
    },
    components:{
      newsItem,
    }
  }
//
</script>

<template>
  <view class="container">
    <view class="main">
      <view v-if="showMoments" class="Moments">
        <news-item :kind=1></news-item>
      </view>
      <view v-else class="Times">
        <news-item :kind=2></news-item>
      </view>
    </view>

    <view class="buttons">
      <button  :class="{ 'selected': showMoments }" @tap="isShowMoments()">精彩瞬间</button>
      <button  :class="{ 'selected': !showMoments }" @tap="isShowTimes()">科普时间</button>
    </view>
  </view>
</template>

<style lang="scss">
.container{
  width:100%;
 padding-bottom: 90rpx;

}
.buttons {
   position: fixed;
   display: flex;
   flex-direction: row;
   top: 0;
   width: 100%;
   height: 90rpx;
   line-height: 90rpx;
   background-color: #f8f8f8;
   button{
    height: 80rpx;
   }
}
.selected {
  background-color: #007bff;
  color: #f8f8f8;
}
button {
  width:45%;
  font-size: 32rpx;
}

.main {
  height: calc(100% - 90rpx);
  overflow-y: auto;
  width: 100%;
}
.Moments{
  margin-top: 105rpx;
}
.Times{
  margin-top: 105rpx;
}
</style>
