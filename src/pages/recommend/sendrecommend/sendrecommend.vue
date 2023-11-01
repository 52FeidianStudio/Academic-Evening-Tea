<template>
  <view>
    <textarea class="desc" placeholder="请输入内容" @input="getInput" />

    <view class="iamgeRootAll">
      <view class="imgRoot" v-for="(item, index) in imgList" :key="index" @click="ViewImage(item)">
        <view v-if="imgList.length === (index + 1) && imgList.length < 8" class="imgItem" @click="ChooseImage()">
          <image class="photo" src="../../../static/giftCenter/plus.webp"></image>
        </view>
        <view v-else class="imgItem" :data-index="index">
          <image class="img" :src="item" mode="aspectFill" alt="Image"></image>
          <image class="closeImg" @click="DeleteImg(index)" src="../../../static/images/remove.png" :data-index="index" alt="Delete Image"></image>
        </view>
      </view>
      <!-- 一开始用来占位 -->
      <view v-if="imgList.length === 0" class="imgItem" @click="ChooseImage()">
        <image class="photo" src="../../../static/giftCenter/plus.webp" alt="Placeholder"></image>
      </view>
    </view>
<view class="b-view">
    <button type="primary" @click="publish">发布推荐</button></view>
  </view>
</template>

<script>
  export default{
    methods: {
      //获取输入内容
        getInput(event) {
          console.log("输入的内容", event.detail.value)
          this.setData({
            desc: event.detail.value
          })
        },
        //选择图片
        ChooseImage() {
          wx.chooseImage({
            count: 8 - this.data.imgList.length, //默认9,我们这里最多选择8张
            sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
            sourceType: ['album'], //从相册选择
            success: (res) => {
              console.log("选择图片成功", res)
              if (this.data.imgList.length != 0) {
                this.setData({
                  imgList: this.data.imgList.concat(res.tempFilePaths)
                })
              } else {
                this.setData({
                  imgList: res.tempFilePaths
                })
              }
            }
          });
        },
          //删除图片
          DeleteImg(e) {
            wx.showModal({
              title: '要删除这张照片吗？',
              content: '',
              cancelText: '取消',
              confirmText: '确定',
              success: res => {
                if (res.confirm) {
                  this.data.imgList.splice(e.currentTarget.dataset.index, 1);
                  this.setData({
                    imgList: this.data.imgList
                  })
                }
              }
            })
          },


    },
    data(){
      return {
        tempimg:"https://cdn.pixabay.com/photo/2021/07/09/09/51/hummingbird-6396743_960_720.jpg",
        imgList: ["https://img0.baidu.com/it/u=2441833187,3184827457&fm=253&fmt=auto&app=138&f=JPEG?w=600&h=358","https://img0.baidu.com/it/u=2441833187,3184827457&fm=253&fmt=auto&app=138&f=JPEG?w=600&h=358","https://img0.baidu.com/it/u=2441833187,3184827457&fm=253&fmt=auto&app=138&f=JPEG?w=600&h=358","https://img0.baidu.com/it/u=2441833187,3184827457&fm=253&fmt=auto&app=138&f=JPEG?w=600&h=358","https://img0.baidu.com/it/u=2441833187,3184827457&fm=253&fmt=auto&app=138&f=JPEG?w=600&h=358"],
            fileIDs: [],
            desc: ''
      }
    }
  }
</script>
<!--  -->
<style>
  .desc{
    margin:30rpx auto;
    width:85vw;
    border: 2rpx solid #CCCCCC;
    border-radius: 1%;
  }
  .iamgeRootAll{
    width:85vw;
    margin:30rpx auto;
  }
  .imgRoot{
    background-color: antiquewhite;
  }
  .imgItem{
  display: inline-block;
  float: left;
  width:150rpx;
  height: 150rpx;
  margin:0 0 15rpx 15rpx;
  overflow: hidden;
  position: relative;
  }
  .closeImg{
    width:20rpx;
    height:20rpx;
    position: absolute;
    right:0;
    top:0;
  }
  .b-view{
    width:90%;
   position: fixed;
    bottom: 30rpx;
     left: 50%;
     transform: translateX(-50%);
  }
</style>
