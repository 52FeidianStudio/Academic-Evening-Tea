<template>
  <view class="userImage">
    <view class="img" @tap="doImg">
      <image :src="avatar == '' ? '../../../static/my/headpic.png' : avatar" />
    </view>
  </view>
  <uni-popup ref="popup">
    <view class="pop">
      <view class="btns">
        <!-- <button @click="takePhoto">拍照</button> -->
        <button @click="chooseImage">从相册选择</button>
        <button @click="saveImage">保存图片</button>
      </view>
      <button class="btn" @tap="cancel">取消</button>
    </view>
  </uni-popup>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
import { changePersonalInf } from '@/services/personalInf'
const popup = ref<{
  open: (type?: UniHelper.UniPopupType) => void
  close: () => void
}>() 
const props = defineProps<{
  userName: string
}>();

const avatar = ref<string>('')

const editUserImg = async (imgUrl: string) => {
  const res = await changePersonalInf({
    userName: props.userName,
    avatar: imgUrl
  })
  console.log(res)
  if (res.code === 200) {
    uni.showToast({
      title: '修改成功',
      icon: 'none'
    })
    avatar.value = imgUrl
  }else{
    uni.showToast({
      title: '修改失败',
      icon: 'none'
    })
  }
}
  const doImg = () => {
    console.log('点击了图片')
    if (popup.value) {
      popup.value.open('bottom')
    }
  }
  // const takePhoto = () => {
  //   console.log('拍照')
  //   popup.value?.close()
  //   uni.chooseImage({
  //     count: 1,
  //     sourceType: ['camera'],
  //     success: (success) => {
  //       console.log(success)
  //     },
  //     fail: (err) => {
  //       console.log(err)
  //     },
  //     complete: (complete) => {
  //       console.log(complete)
  //     },
  //   })
  // }
  const chooseImage = () => {
    console.log('从相册选择')
    popup.value?.close()
    uni.chooseImage({
      count: 1,
      sourceType: ['album'],
      success: (success) => {
        uni.uploadFile({
          url: 'https://www.academictime.cn:3166/system/common/upload',
          filePath: success.tempFilePaths[0],
          header: {
            'Authorization': 'Bearer ' + uni.getStorageSync('token'),
            'Content-Type': 'multipart/form-data',
          },
          name: 'file',
          success: (success) => {
            console.log(success)
            const resData = JSON.parse(success.data)
            console.log(resData)
            editUserImg(resData.msg)
          },
        })
      },
      fail: (err) => {
        console.log(err)
        uni.showToast({
          title: '上传失败',
          icon: 'none'
        })
      },
      complete: (complete) => {
        console.log(complete)
      },
    })
  }
  const saveImage = () => {
    console.log('保存图片')
    popup.value?.close()
    uni.saveImageToPhotosAlbum({
      filePath: '',
      success: (success) => {
        console.log(success)
      },
      fail: (err) => {
        console.log(err)
      },
      complete: (complete) => {
        console.log(complete)
      },
    })
  }

  const cancel = () => {
    console.log('取消')
    popup.value?.close()
  }
</script>
<style lang="scss">
.userImage {
  background-color: #000;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .img {
    height: 700rpx;
    width: 700rpx;
  }
}

.pop {
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 20rpx;

  .btns {
    height: 250rpx;
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    button {
      flex: 1;
      width: 100%;
      box-sizing: border-box;
      border-bottom: 1px solid #e5e3e3;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .btn {
    width: 100%;
    border-top: 5px solid #e5e3e3;
  }
}
</style>