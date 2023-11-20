<script setup lang="ts">
//
import { onLoad } from '@dcloudio/uni-app';
import { ref } from 'vue';
import { logInAPI } from '@/services/logIn';

type logInInfo = {
  username: string,
  password: string
}

const logInInfo = ref<logInInfo>({
  username: '',
  password: ''
})

// 暂时登录
const logIn = () => {
  console.log(logInInfo.value);
  if(logInInfo.value.username==''){
    uni.showToast({
        title: '用户名不能为空！',
        icon: 'none',
        duration: 1000
      })
      return
  }
  if(logInInfo.value.password==''){
    uni.showToast({
        title: '密码不能为空！',
        icon: 'none',
        duration: 1000
      })
      return
  }
  else{
    logInAPI({
    username: logInInfo.value.username,
    password: logInInfo.value.password
  }).then(res => {
    console.log(logInInfo.value);
    console.log(res);
    if (res.code === 200) {
      uni.showToast({
        title: '登录成功',
        icon: 'success',
        duration: 1000
      })
      setTimeout(() => {
        uni.switchTab({
          url: '/pages/index/index'
        })
      }, 2000)
      // 存储token
      uni.setStorageSync('token', res.token)
    } else {
      uni.showToast({
        title: '密码错误',
        icon: 'error',
        duration: 1000
      })
    }
  })
  }

  // uni.showToast({
  //   title: '登录成功',
  //   icon: 'success',
  //   duration: 1000
  // })
  // setTimeout(() => {
  //   uni.switchTab({
  //     url: '/pages/index/index'
  //   })
  // }, 2000)
}

// 获取code登陆凭证
let code = '';
onLoad(async () => {
  const res = await wx.login();
  console.log(res);
  code = res.code;
})

// 获取用户手机号码
const onGetphonenumber = (ev: any) => {
  console.log(ev);
}
</script>

<template>
  <view class="viewport">
    <view class="logo">
      <image src="../../static/log.png"></image>
    </view>
    <view class="login-content">
      <uni-easyinput class="input" type="text" v-model="logInInfo.username" placeholder="用户名" />
      <uni-easyinput class="input" type="password" v-model="logInInfo.password" placeholder="密码"/>
    </view>
    <view class="login">
      <button class="button phone" @tap="logIn">
        <text class="icon icon-phone"></text>
        登录/注册
      </button>
      <view class="tips">登录/注册即视为你同意《服务条款》</view>
    </view>
  </view>
</template>

<style lang="scss">
page {
  height: 100%;
}

.viewport {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 20rpx 40rpx;

  .login-content {
    width: 80%;
    height: 300rpx;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 20rpx;
    .input {
      width: 100%;
    }
  }
}

.logo {
  flex: 1;
  text-align: center;
  margin-bottom: 60rpx;
  image {
    width: 220rpx;
    height: 220rpx;
    margin-top: 10vh;
  }
}

.login {
  width: 90%;
  display: flex;
  flex-direction: column;
  height: 60vh;
  padding: 40rpx 20rpx 20rpx;

  .button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 80rpx;
    font-size: 28rpx;
    border-radius: 72rpx;
    color: #fff;

    .icon {
      font-size: 40rpx;
      margin-right: 6rpx;
    }
  }

  .phone {
    background-color: #06afe3;
  }

  .wechat {
    background-color: #06c05f;
  

    .options {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 70rpx;

      button {
        padding: 0;
        background-color: transparent;
      }
    }

    .icon {
      font-size: 24rpx;
      color: #444;
      display: flex;
      flex-direction: column;
      align-items: center;

      &::before {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 80rpx;
        height: 80rpx;
        margin-bottom: 6rpx;
        font-size: 40rpx;
        border: 1rpx solid #444;
        border-radius: 50%;
      }
    }

    .icon-weixin::before {
      border-color: #06c05f;
      color: #06c05f;
    }
  }
}

.tips {
  position: absolute;
  bottom: 80rpx;
  left: 20rpx;
  right: 20rpx;
  font-size: 23rpx;
  color: #999;
  text-align: center;
}</style>