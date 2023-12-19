<template>
  <view class="category">
    <view class="category-item" @tap="tapAct">
      <image src="../../../static/home/activity.png" class="icon" />
      <text class="text">活动发起</text>
    </view>
    <navigator
      :url="item.url"
      class="category-item"
      hover-class="none"
      v-for="item in items"
      :key="item.id"
      open-type="navigate"
    >
      <image :src="item.icon" class="icon" />
      <text class="text">{{ item.text }}</text>
    </navigator>
  </view>
  <div class="divider"></div>
  <view class="activity">
    <view class="activity-box">
      <view class="activity-box-content">活动一览</view>
      <view class="activity-box-select">
        <uni-data-select
          v-model="status"
          :localdata="(statusList as any)"
          @change="change"
          placeholder="全部"
          :clear="false"
        >
        </uni-data-select>
      </view>
    </view>
    <view class="activity-details">
      <navigator
        class="activity-details-item"
        v-for="item in activities"
        :key="item.id"
        :url="`/pages/activity/ActivityDetails?id=${item.id}`"
      >
        <view class="activity-details-item-title">
          <view class="title">{{ item.title }}</view>
        </view>
        <view class="activity-details-item-contents">
          <view class="activity-details-item-content">
            <view class="sponsor"> 发起学院：{{ item.sponsorCollege }} </view>
            <view class="activity-details-item-content-time">
              <image class="img" src="../../../static/activity/clock.png" />{{ item.time }}
            </view>
            <view class="activity-details-item-content-address">
              <image class="img" src="../../../static/activity/address.png" />{{ item.address }}
            </view>
          </view>
          <view class="activity-details-item-status">
            <view class="population">
              <image class="img" src="../../../static/activity/User.png"></image
              >{{ item.population }} / {{ item.limitPopulation }}
            </view>
            <view class="status">
              {{ item.status }}
            </view>
          </view>
        </view>
      </navigator>
    </view>
  </view>
</template>

<script setup lang="ts">
import { getHomeContentAPI, giftIsShow } from '@/services/HomeContent'
import { onLoad, onShow, onHide } from '@dcloudio/uni-app'
import { ref, reactive } from 'vue'
const status = ref<string>('全部')
const statusN = ref<Number>(0)
const statusList = ref([
  { value: 0, text: '全部' },
  { value: 1, text: '进行中' },
  { value: 2, text: '已结束' },
  { value: 3, text: '精选' },
])
const change = (e: any) => {
  console.log(e)
  if (e === 0) {
    statusN.value = 0
    getHomeContent(0, 0, 0)
  } else if (e === 1) {
    statusN.value = 1
    getHomeContent(1, 2, 1)
  } else if (e === 2) {
    statusN.value = 2
    getHomeContent(1, 2, 2)
  } else {
    statusN.value = 3
    getHomeContent(2, 2, 1)
  }
}
type Category = {
  id: number
  text: string
  icon: string
  url: any
}
type Activity = {
  id: number
  title: string
  status: string
  time: string
  address: string
  img?: string
  // 报名人数和限制人数
  population?: number
  limitPopulation?: number
  // 发起学院
  sponsorCollege: string
}
const tapAct = () => {
  uni.switchTab({ url: '/pages/activity/ActivityLaunch' })
}
const items = ref<Category[]>([
  {
    id: 2,
    text: '活动签到',
    icon: '../../../static/home/sy-sign_in.png',
    url: '/pages/activity/ActivitySignIn',
  },
  // {
  //   id: 3,
  //   text: '礼品中心',
  //   icon: '../../../static/home/sy-article.png',
  //   url: '/pages/gift/giftCenter',
  // },
  {
    id: 3,
    text: '我要推荐',
    icon: '../../../static/home/sy-video.png',
    url: '/pages/recommend/recommend',
  },
])
const gIsShow = ref(false)
const giftShow = async () => {
  const res = await giftIsShow()
  console.log(res)
  gIsShow.value = res.data
  if (gIsShow.value) {
    items.value = [
      {
        id: 2,
        text: '活动签到',
        icon: '../../../static/home/sy-sign_in.png',
        url: '/pages/activity/ActivitySignIn',
      },
      {
        id: 3,
        text: '礼品中心',
        icon: '../../../static/home/sy-article.png',
        url: '/pages/gift/giftCenter',
      },
      {
        id: 4,
        text: '我要推荐',
        icon: '../../../static/home/sy-video.png',
        url: '/pages/recommend/recommend',
      },
    ]
  }
}
const activities = ref<Activity[]>([])

const getHomeContent = async (type: number, state: number, isEnd: number) => {
  // 获取首页内容
  let res
  if (type === 0) {
    res = await getHomeContentAPI()
  } else {
    res = await getHomeContentAPI({ type: type, state: state, isEnd: isEnd })
  }
  console.log(res)
  if (res.code === 200) {
    activities.value = res.rows.map((item: any) => ({
      id: item.id,
      title: item.userImg2,
      status: item.isEnd == 1 ? '进行中' : '已结束',
      time: item.lat,
      address: item.address,
      sponsorCollege: item.hbKeyword,
      population: item.hbNum,
      limitPopulation: item.hot,
    }))
    if (activities.value.length === 0) {
      uni.showToast({
        title: '暂无活动',
        icon: 'none',
      })
    }
  } else {
    uni.showToast({
      title: '查询失败',
      icon: 'none',
    })
  }
}

onLoad(() => {
  giftShow()
  console.log('onLoad!!!')
  uni.onNetworkStatusChange((res) => {
    if (!res.isConnected) {
      uni.showToast({
        title: '网络已断开',
        icon: 'none',
      })
    }
  })
  getHomeContent(0, 0, 0)
})
onHide(() => {
  uni.setStorageSync('status_key', statusN.value)
  console.log(statusN.value)
})
onShow(() => {
  console.log(uni.getStorageSync('status_key'))
  statusN.value = uni.getStorageSync('status_key')
  if (statusN.value === 0) {
    getHomeContent(0, 0, 0)
  } else if (statusN.value === 1) {
    getHomeContent(1, 2, 1)
  } else if (statusN.value === 2) {
    getHomeContent(1, 2, 2)
  } else {
    getHomeContent(2, 2, 1)
  }
})
</script>

<style lang="scss">
.category {
  margin: 20rpx 0 0;
  padding: 10rpx 0;
  display: flex;
  flex-wrap: nowrap;
  // min-height: 328rpx;
  justify-content: space-around;

  .category-item {
    width: 150rpx;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;

    .icon {
      width: 90rpx;
      height: 90rpx;
    }

    .text {
      font-size: 26rpx;
      color: #666;
    }
  }
}

.divider {
  width: 90%;
  height: 1px;
  background-color: #d6d6d6;
  margin: 15px auto;
  margin-bottom: 5px;
}

.activity {
  .activity-box {
    display: flex;
    justify-content: space-between;
    width: 90%;
    margin: 0rpx auto;

    .activity-box-content {
      font-size: 30rpx;
      font-weight: bold;
      padding-top: 20rpx;
      color: #333;
    }

    .activity-box-select {
      width: 160rpx;
    }
  }

  .activity-details {
    width: 90%;
    margin: 20rpx auto;

    .activity-details-item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      width: 100%;
      height: 260rpx;
      border-bottom: 1px solid #d6d6d6;

      .activity-details-item-title {
        font-size: 30rpx;
        font-weight: bolder;
        color: #333;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        margin-bottom: 20rpx;
      }

      .activity-details-item-contents {
        display: flex;
        justify-content: space-between;
        width: 100%;

        .activity-details-item-content {
          display: flex;
          justify-content: center;
          flex-direction: column;
          flex: 1;

          .sponsor {
            margin-bottom: 10rpx;
            font-size: 30rpx;
            color: black;
            margin-bottom: 20rpx;
          }

          .activity-details-item-content-time {
            margin-bottom: 10rpx;
            font-size: 26rpx;
            color: #767575;

            .img {
              width: 30rpx;
              height: 30rpx;
              margin-right: 10rpx;
            }
          }

          .activity-details-item-content-address {
            font-size: 26rpx;
            color: #767575;

            .img {
              width: 30rpx;
              height: 30rpx;
              margin-right: 10rpx;
            }
          }
        }

        .activity-details-item-status {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          justify-content: space-around;
          width: 200rpx;

          .population {
            margin-bottom: 10rpx;
            font-size: 26rpx;
            color: #666;

            .img {
              width: 32rpx;
              height: 32rpx;
              margin-right: 10rpx;
              // color: black;
            }
          }

          .status {
            font-size: 26rpx;
            color: #666;
          }
        }
      }
    }
  }
}
</style>
