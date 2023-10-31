<template>
  <view class="user">
    <navigator class="avatar item" url="/pages/my/components/userImage">
      <view>头像</view>
      <view class="user-avatar texts">
        <image class="img" :src='user.img' />
        <image src="../../../static/my/arrow-right.png" />
      </view>
    </navigator>
    <view class="item">
      <view>名字</view>
      <view class="texts">
        <text class="text1" v-if="!isDisabled">{{ user.name }}</text>
        <uni-easyinput class="text2" v-else v-model="editedUser.name" />
      </view>
    </view>
    <view class="item">
      <view>学院</view>
      <view class="texts">
        <text class="text1" v-if="!isDisabled">{{ user.college }}</text>
        <uni-easyinput class="text2" v-else v-model="editedUser.college" />
        <!-- <image src="../../../static/my/arrow-right.png" /> -->
      </view>
    </view>
    <view class="item">
      <view>学号</view>
      <view class="texts">
        <text class="text1" v-if="!isDisabled">{{ user.studentId }}</text>
        <uni-easyinput class="text2" v-else v-model="editedUser.studentId" />
        <!-- <image src="../../../static/my/arrow-right.png" /> -->
      </view>
    </view>
    <view class="btns">
      <button @tap="changeUserInfo" v-if="!isDisabled">修改个人资料</button>
      <view v-if="isDisabled">
        <button @tap="saveEdit">保存</button>
        <button @tap="cancelEdit">取消修改</button>
      </view>
      <button @tap="logout">退出登录</button>
    </view>
  </view>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
type userInfo = {
  name: string
  studentId: string
  img?: string
  // 学院
  college: string
}
const isDisabled = ref<Boolean>(false)
const user = ref<userInfo>({
  name: '张三',
  studentId: '2018111111',
  img: '../../../static//my/headpic.png',
  college: '计算机学院'
})
const editedUser = ref<userInfo>({
  name: '',
  studentId: '',
  college: ''
})

const changeUserInfo = () => {
  isDisabled.value = !isDisabled.value
}

const saveEdit = () => {
  user.value = editedUser.value
  isDisabled.value = !isDisabled.value
  // 传给后端
}

const cancelEdit = () => {
  isDisabled.value = !isDisabled.value
}

const logout = () => {
  uni.showModal({
    title: '提示',
    content: '确定退出登录吗？',
    success: (res) => {
      if (res.confirm) {
        uni.showToast({
          title: '退出成功',
          icon: 'success',
          duration: 2000
        })
        setTimeout(() => {
          uni.reLaunch({
            url: '/pages/login/login'
          })
        }, 2000)
      } else if (res.cancel) {
        console.log('用户点击取消')
      }
    }
  })
}
</script>
<style lang="scss">
.user {
  width: 90%;
  margin: 0 auto;

  .item {
    display: flex;
    width: 100%;
    height: 130rpx;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e5e3e3;

    .texts {
      display: flex;
      justify-content: space-between;
      flex-wrap: nowrap;
      align-items: center;

      .text1{
        margin-right: 5rpx;
        color: #8e8d8d;
      }

      image {
        width: 40rpx;
        height: 40rpx;
      }
    }
  }

  .avatar {
    height: 200rpx;

    .user-avatar {
      .img {
        width: 80rpx;
        height: 80rpx;
      }
    }
  }

  .btns{
    border-bottom: none;
    display: flex;
    flex-direction: column;
    button{
      margin-top: 20rpx;
      width: 100%;
      background-color: #eeeded;
    }
  }
}
</style>