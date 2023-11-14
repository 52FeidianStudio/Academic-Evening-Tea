<template>

 <div>
  <!--pages/posts/post-detail/post-detail.wxml-->
<view class="container">
  <view class="head-container">
    <!-- <image class="audio" src="/static/recommend/top.webp"></image> -->
    <image class="head-image" src="/static/recommend/top.webp"></image>
  </view>
  <view class="author-date">
    <!-- <image class="avatar" src="{{postData.avatar}}"></image> -->
    <text class="author">文圣</text>
    <text class="const-text">发表于</text>
    <text class="date">Nov 12 2016</text>
  </view>
  <text class="title">当我们谈论经济学的时候，我们到底在谈什么？</text>
  <view class="tool">
    <view class="circle-img">
      <image src="/static/home/activity.png"></image>
      <image class="share-img" src="/static/home/activity.png"></image>
    </view>
    <view class="horizon"></view>
  </view>
  <text class="detail">当我们谈论经济学的时候，我们到底在谈什么？





经济学是社会学中最接近科学的一个领域，素有社会科学王冠上的明珠之称号。从这个共识出发，我从哲学层次上谈一下经济学最底层的一些基础概念。



根据康德哲学三大批判所建立起来的理论系统，人类理性可以分为“真、善、美”三个不同领域，分别对应着纯粹理性（思辨理性）、实践理性（道德伦理）、审美理性（判断力）。人是这所有三个理性所综合的复杂体系，只有对这些理性都深入学习和实践，才能真正成就一个完整的“大人”。



就我们一般意义上的科学而言，包括形式科学（逻辑、数学、几何）和经验科学（物理、化学等等），它所对应的是人类的思辨理性，关于其具体的分析，可以参阅《纯粹理性批判》。我只应用其理论，对经济学，这个号称最接近科学的社会学学科展开一点思考。



一般认为，经济学的基础，建立在所谓的“理性人”的假设上，也就是经济生活中的个人，都是只关注个人的实际利益，通过精密的计算来获取自身最大利益。无数理性人的各自争取自身利益的结果，形成了以价格为计算单位的市场经济，从而减少了商品交换的成本，推动了整个社会生产的极大发展。同时，基于这个假设，我们可以把市场经济中的各自活动化约为简单的数学计算，运用各种数学手段来描述和预测局部甚至是整个社会的经济活动。这一切的前提，都是建立在剥离了“人”作为实际社会成员的其它特性，只具备利益计算和追求的理性人的理论基础之上。也就是说，在经济学中，通过极端的简化，仅仅关注人的纯粹理性，以计算机器的身份来看待其特点，就可以满足科学运用的条件，以量化的方法来描述经济运动，就有了计量经济学等等各种充斥着数学公式的经济学。



在这个理论框架中，是没有所谓的福利和道德等人类情感伦理方面的因素，也就没有剥削、公平等等带有感情色彩的字眼。



但是，现实中的人，并不仅仅只有利害的计算，他还有自己的情绪和道德思想，他无法被简单的量化从而造成了经济学数学计算中的波动和偏离。因此最近的经济学中引入了“不完全理性人”的设定，通过行为心理学中的一些理论来更全面的描述实际环境中人们的行为特点，在更大程度上来拟合现实社会中人们可能具有的真实行为。这些改进，不能不说是经济学的进步，但是，这也引入了极大的不确定性，理论上的经济行为，就不可能如同数学公式那么精确，经济学理论对实际社会经济活动的指导性和权威性就存在了很大的问题（好吧，经济学的理论和实践本来就很不靠谱）。经济学本身的理论自洽也失去了坚实的基础。



简单的例子，庇古以福利经济学的研究获得了诺贝尔经济学奖，但同样获得经济学奖的哈耶克对经济学中福利这一提法不屑一顾。同时张五常也认为经济学中没有所谓的福利经济学，从效率本身出发，福利的运用会造成整个社会经济交易成本的上升，他也对中国大陆2008年出台的《劳动法》中最低工资等的限制颇有微词，认为实际上造成了东莞等地原本“世界工厂”地位的丧失。



经济学既然是一门社会科学，是实践应用的学问，是和我们每个人息息相关的共同手段和目标，它的存在必然是要受到人的复杂性的影响。既然每个人都是各种理性要素的综合体，整个社会之间人和人的互动也必然会有利益、情绪、伦理等各种层面上的交流和影响。现实中的经济生活，必然是政治、文化、历史、道德等各种因素的混合体。如果只是从科学这个简单层面出发来闭门造车，可以运用一些简化手法来开展研究，但要将经济理论运用到社会实践，就必然要全面考虑实践社会中的方方面面。



在我看来，有理论的经济学，它就是思辨理性的应用，是科学的一个领域；也有实践的经济学，它是人类全部理性的综合应用，是科学、政治、社会学、心理学等等人类全部文化活动的综合。



当我们谈论经济学的时候，我们到底在谈什么？</text>
</view>

 </div>

</template>

<script setup lang='ts'>
// import { ref,reactive } from 'vue'
// import { onLoad } from '@dcloudio/uni-app';

// onLoad(()=>{
//   uni.showToast({
//     title:'推荐部分功能尚未实现，敬请期待~',
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
<style scoped>
/* pages/posts/post-detail/post-detail.wxss */
.container{
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 0rpx;
}
.head-container{
  width: 100%;
  height: 460rpx;
  position: relative;
}
.head-image{
  width: 100%;
  height: 460rpx;
}
.audio{
  width:102rpx;
  height: 110rpx;
  position: absolute;
  top:50%;
  margin-top: -55rpx;
  left:50%;
  margin-left: -51rpx;
  opacity: 0.6;
}
.author-date{
  display: flex;
  flex-direction: row;
  margin-top: 20rpx;
  width: 100%;
  height: 64rpx;
  line-height: 64rpx;
}
.avatar{
  height: 64rpx;
  width:64rpx;
  vertical-align: middle;
  margin-left: 20rpx;
}
.author{
  font-size:30rpx;
  font-weight: 300;
  margin-left: 20rpx;
  vertical-align: middle;
  color:#666;
  
}
.const-text{
  font-size: 24rpx;
  color:#999;
  margin-left: 20rpx;
}

.date{
  font-size: 24rpx;
  margin-left: 30rpx;
  vertical-align: middle;
  color:#999;
}
.title{
  width: 100%;
  padding-left: 35rpx;
  font-size: 36rpx;
  font-weight: 700;
  margin-top: 30rpx;
  letter-spacing: 2px;
  color:#4b556c;
}
.tool{
  margin-top: 20rpx;
}
.circle-img{
  float: right;
  margin-right: 40rpx;
  vertical-align: middle;
}

.circle-img image{
  width: 90rpx;
  height: 90rpx;
}
.share-img{
  margin-left: 30rpx;
}

.horizon{
  width: 660rpx;
  height:1px;
  background-color: #e5e5e5;
  vertical-align: middle;
  position: relative;
  top:46rpx;
  margin: 0 auto;
  z-index: -99;
}

.detail{
  color:#666;
  margin-left: 30rpx;
  margin-top: 20rpx;
  margin-right: 30rpx;
  line-height: 44rpx;
  letter-spacing: 2px;
  
}

</style>