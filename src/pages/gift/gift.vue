<template>
  <div>
  
  <swiper :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
    <swiper-item v-for="(url, index) in imgUrls" :key="index">
      <image :src="url" :data-src="url" @click="previewImage(url)" />
    </swiper-item>
  </swiper>

<scroll-view scroll-y="true">
  <view class="detail">
    <text class="title">金属书签中国风简约祝福寓意纪念奖励文字页夹索引夹毕业文创礼品</text>
    <text class="price">200积分</text>
  </view>
  <view class="separate"></view>
  <!-- sku选择 -->
  <!-- <text bindtap="toggleDialog">请选择购买数量</text> -->
  <!-- <view class="separate"></view>
  <text>商品评价</text>
  
  <view class="separate"></view> -->
  <text>礼品详情</text>
  <text class="text-remark">黄铜金属书签中国风文创产品批发创意古风立体文字镂空书签定制
</text>
  <image style="width:100%;height:500rpx" v-for="(url, index) in imgUrls"  :key="index" :src="url"/>
  <view class="temp"></view>
</scroll-view>
  </div>
</template>

<script setup lang='ts'>
// import { ref, reactive } from 'vue'
// import { onLoad } from '@dcloudio/uni-app';

// onLoad(() => {
//   uni.showToast({
//     title: '礼品中心部分功能尚未实现，敬请期待~',
//     icon: 'none',
//     duration: 2000,
//     complete: function () {
//       setTimeout(function () {
//         uni.switchTab({
//           url: '/pages/index/index'
//         });
//       }, 2000); // 在弹窗关闭后，延迟2秒执行页面跳转
//     }
//   })
// })

  // data: {
  //   isLike: true,
  //   // banner
  //   imgUrls: [
  //     "static/gifts/p1.jpg"
  //   ],
  //   indicatorDots: true, //是否显示面板指示点
  //   autoplay: true, //是否自动切换
  //   interval: 3000, //自动切换时间间隔,3s
  //   duration: 1000, //	滑动动画时长1s

  //   // 商品详情介绍
  //   detailImg: [
  //   "static/gifts/p1.jpg"
  //   ],
  // },
//   methods:{
//  //预览图片
//   previewImage: function (e) {
//     var current = e.target.dataset.src;

//     wx.previewImage({
//       current: current, // 当前显示图片的http链接  
//       urls: this.data.imgUrls // 需要预览的图片http链接列表  
//     })
//   },
//   }
 
  import { ref } from 'vue';

const isLike = ref(true);
const imgUrls = [
"../../static/gifts/p1.jpg",
"../../static/gifts/p2.jpg",
"../../static/gifts/p3.jpg",
"../../static/gifts/p4.jpg"
];
const indicatorDots = true;
const autoplay = true;
const interval = 3000;
const duration = 1000;
// const detailImg = [
// "../../static/gifts/p1.jpg",
// "../../static/gifts/p2.jpg",
// "../../static/gifts/p3.jpg",
// "../../static/gifts/p4.jpg"
// ];

const previewImage = (current: string) => {
  wx.previewImage({
    current: current,
    urls: imgUrls
  });
};
//   // 收藏
//   addLike() {
//     this.setData({
//       isLike: !this.data.isLike
//     });
//   },
//   // 跳到购物车
//   toCar() {
//     wx.switchTab({
//       url: '/pages/cart/cart'
//     })
//   },
//   // 立即购买
//   immeBuy() {
//     wx.showToast({
//       title: '购买成功',
//       icon: 'success',
//       duration: 2000
//     });
//   },
// })

</script>
<style scoped>
page {
  display: flex;
  flex-direction: column;
  height: 100%;
}
/* 直接设置swiper属性 */
swiper {
  height: 500rpx;
}
swiper-item image {
  width: 100%;
  height: 100%;
}
.detail {
  display: flex;
  flex-direction: column;
  margin-top: 15rpx;
  margin-bottom: 0rpx;
}
.detail .title {
  font-size: 40rpx;
  margin: 20rpx;
  color: black;
  text-align: justify;
}
.detail .price {
  color: red;
  font-size: 40rpx;
  margin: 10rpx;
  margin-top: 30rpx;
}
.line_flag {
  width: 80rpx;
  height: 1rpx;
  display: inline-block;
  margin: 20rpx auto;
  background-color: gainsboro;
  text-align: center;
}
.line {
  width: 100%;
  height: 2rpx;
  display: inline-block;
  margin: 20rpx 0rpx;
  background-color: gainsboro;
  text-align: center;
}
.detail-nav {
  display: flex;
  flex-direction: row;
  align-items: center;
  float: left;
  background-color: #fff;
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 1;
  width: 100%;
  height: 100rpx;
}
.button-green {
  background-color: #4caf50; /* Green */
}
.button-red {
  background-color: #f44336; /* 红色 */
}
.image_detail {
  width: 100%;
}
button {
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 30rpx;
  border-radius: 0rpx;
  width: 50%;
  height: 100%;
  line-height: 100rpx;
}
.detail-nav image {
  width: 70rpx;
  height: 50rpx;
  margin: 20rpx 40rpx;
}
.line_nav {
  width: 5rpx;
  height: 100%;
  background-color: gainsboro;
}
/* 占位 */
.temp {
  height: 100rpx;
}
text {
  display: block;
  height: 60rpx;
  line-height: 60rpx;
  font-size: 30rpx;
  margin: 10rpx;
}
.text-remark {
  display: block;
  font-size: 25rpx;
  margin: 10rpx;
}
</style>