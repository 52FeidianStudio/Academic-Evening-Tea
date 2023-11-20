<template>
    <view class="container" >
      <view class="text-view">活动主题</view>
      <textarea auto-focus="true" auto-height="true" class="title" placeholder="请输入活动主题" @input="getTInput" />
      <view class="text-view">主讲人姓名</view>
      <textarea auto-height="true" class="person" placeholder="请输入活动主讲人" @input="getPInput" />
      <view class="text-view">推荐内容</view>
      <textarea  auto-height="true" class="desc" placeholder="请输入推荐内容" @input="getInput" />
        <view class="b-view" :style="{ bottom: safeAreaInsets?.bottom!+ 0 + 'px' }">
          <button type="primary" @click="publish">发布推荐</button>
        </view>
    </view>
  </template>

  <script setup lang="ts">
import { ref} from 'vue';
import { newRecommend } from '@/services/recommed'

// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync()

const title=ref('')
const person=ref('')
const desc=ref('')

const getTInput=(e)=>{
  title.value=e.detail.value
}
const getPInput=(e)=>{
  person.value=e.detail.value
}
const getInput=(e)=>{
    desc.value=e.detail.value
        
}
const sendC=async ()=>{
  console.log({
    id:null,
    content:desc.value,
    lecturerName:person.value,
    theme:title.value
  })
  const res =await newRecommend({
    id:null,
    content:desc.value,
    lecturerName:person.value,
    theme:title.value
  })
  console.log(res)
  if(res.code==200){
    uni.showToast({
        title: '提交成功',
        icon: 'success',
        duration: 1000,
        complete: () => {
          setTimeout(() => {
            uni.navigateBack({
              delta: 1 
            })
            title.value=''
            person.value=''
            desc.value=''
          }, 1000);

        }
      })
  }
}
const publish=()=>{
  console.log("fabutyuijian")
  if(title.value === ''){
    uni.showToast({
      title: '请填写活动主题！',
      icon:'none'
    })
    return
  }else if(person.value === ''){
    uni.showToast({
      title: '请填写活动发起人姓名',
      icon:'none'
    })
  }else if(getInput.value === ''){
    uni.showToast({
      title: '请填写推荐理由',
      icon:'none'
    })
  }else{
    sendC()
  }
}

</script>
<style>
.container{
  padding-top:20rpx;
}
textarea{
  margin:30rpx auto;
    width:85vw;
    border: 2rpx solid #CCCCCC;
    border-radius: 1%;
    padding: 6rpx;
}
.title{
  height:90rpx!important;
}
.person{
  height:90rpx!important;
}
  .desc{
    height:300rpx!important;
  }
  .text-view{
    font-family: "Times New Roman", serif;
    font-size:medium;
    margin-left:30rpx;
    font-weight: bold;
  }
  .b-view{
    width:90%;
   position: fixed;
    bottom: 30rpx;
     left: 50%;
     transform: translateX(-50%);
  }
</style>
