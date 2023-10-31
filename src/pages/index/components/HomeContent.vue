<template>
  <view class="category">
    <view class="category-item" @tap="tapAct">
      <image src="../../../static/home/activity.png" class="icon" />
      <text class="text">活动发起</text>
    </view>
    <navigator :url="item.url" class="category-item" hover-class="none" v-for="item in items" :key="item.id"
      open-type="navigate">
      <image :src="item.icon" class="icon" />
      <text class="text">{{ item.text }}</text>
    </navigator>
  </view>
  <div class="divider"></div>
  <view class="activity">
    <view class="activity-box">
      <view class="activity-box-content">活动一览</view>
      <view class="activity-box-select">
        <uni-data-select v-model="status" :localdata="statusList" @change="change" placeholder="全部" :clear="false">
        </uni-data-select>
      </view>
    </view>
    <view class="activity-details">
      <navigator class="activity-details-item" v-for="item in activities" :key="item.id" url="/pages/activity/ActivityDetails">
        <view class="activity-details-item-title">
          <view class="title">{{ item.title }}</view>
        </view>
        <view class='activity-details-item-contents'>
          <view class="activity-details-item-content">
            <view class="sponsor">
              发起学院：{{ item.sponsorCollege }}
            </view>
            <view class="activity-details-item-content-time">
              <image class="img" src="../../../static/activity/clock.png" />{{ item.time }}
            </view>
            <view class="activity-details-item-content-address">
              <image class="img" src="../../../static/activity/address.png" />{{ item.address }}
            </view>
          </view>
          <view class="activity-details-item-status">
            <view class="population">
              <image class="img" src="../../../static/activity/User.png"></image>1/50
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

<script setup lang='ts'>
import { ref, reactive } from 'vue'
const status = ref<string>('全部')
const statusList = ref([
  { value: 0, text: "全部" },
  { value: 1, text: "待举办" },
  { value: 2, text: "进行中" },
  { value: 3, text: "已结束" }
])
const change = (e: any) => {
  console.log(e)
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
  // {
  //   id: 1,
  //   text: '活动发起',
  //   icon: '../../../static/home/activity.png',
  //   url: ()=>{uni.switchTab({url:'/pages/activity/activity'})}
  // },
  {
    id: 2,
    text: '活动签到',
    icon: '../../../static/home/sy-sign_in.png',
    url: '/pages/activity/ActivitySignIn'
  },
  {
    id: 3,
    text: '礼品中心',
    icon: '../../../static/home/sy-article.png',
    url: '/pages/gift/gift'
  },
  {
    id: 4,
    text: '我要推荐',
    icon: '../../../static/home/sy-video.png',
    url: '/pages/recommend/recommend'
  }
])
const activities = ref<Activity[]>([
  {
    id: 1,
    title: '活动一为日后吉尔菲娜撒旦否为很丰富未付金额我来附加额外',
    status: '待举办',
    time: '2021-09-01',
    address: '学生事务大楼',
    sponsorCollege: '信息学院'
  },
  {
    id: 2,
    title: '活动二',
    status: '进行中',
    time: '2021-09-01',
    address: '学生事务大楼',
    sponsorCollege: '信息学院'
  }
])


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
      width: 150rpx;
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