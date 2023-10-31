<template>
  <view class="detail">
    <view class="top">
      <view class="detail-title">
        {{ item.title }}
      </view>
      <view class="detail-content">
        <view class="status">
          {{ item.status }}
        </view>
        <view class="population">
          <image class="img" src="../../static/activity/User.png" />{{ item.population }}/{{ item.limitPopulation }}
        </view>
      </view>
    </view>
    <view class="middle">
      <view class="sponsor">
        发起学院：{{ item.sponsorCollege }}
      </view>
      <view class="time">
        <image class="img" src="../../static/activity/clock.png" />{{ item.time }}
      </view>
      <view class="address">
        <image class="img" src="../../static/activity/address.png" />{{ item.address }}
      </view>
    </view>
    <view class="bottom">
      <view class="sponsor-intro">
        <view class="title">
          主讲人简介：
        </view>
        <view class="intro">
          {{ item.sponsorIntroduction }}
        </view>
      </view>
      <view class="activity-intro">
        <view class="title">
          活动简介：
        </view>
        <view class="intro">
          {{ item.activityIntroduction }}
        </view>
      </view>
    </view>
    <view class="footer">
      <view class="activity-btn">
        <button class="btn">报名</button>
      </view>
    </view>
  </view>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
type details = {
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
  // 活动简介
  activityIntroduction: string
  sponsorIntroduction: string
}

const item = ref<details>({
  id: 1,
  title: '活动标题吃的食物i巨款符号位u奥回复爱的是你覅就',
  status: '进行中',
  time: '2021-06-01 12:00',
  address: '活动地址',
  img: '',
  population: 1,
  limitPopulation: 50,
  sponsorCollege: '发起学院',
  activityIntroduction: '活动简介的撒娇分化为都符合我发觉伟黄瑞哦沃达丰挖掘的腹黑哦我发的环境而而较为发达后i额外符合维护请围绕覅偶尔玩',
  sponsorIntroduction: '阿苏的环境恶趣味的核武器违法和我i复合物i培武将军覅偶尔微积分我i而吴炯附加额外覅欧锦二级覅欧文分解哦'
})

</script>

<style lang="scss">
.detail {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  width: 90%;
  margin: 0 auto;

  .top {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 20rpx;

    .detail-title {
      font-size: 44rpx;
      // font-weight: bold;
      margin: 10rpx 0 0 10rpx;
      margin-bottom: 15rpx;
    }

    .detail-content {
      display: flex;
      justify-content: space-between;
      margin: 0 10rpx 10rpx 10rpx;

      .status {
        font-size: 30rpx;
        color: #FF0000;

        .img {
          width: 30rpx;
          height: 30rpx;
          margin-right: 10rpx;

        }
      }

      .population {
        font-size: 30rpx;
        color: #000000;
        .img {
          width: 30rpx;
          height: 30rpx;
          margin-right: 10rpx;
        }
      }
    }
  }

  .middle {
    height: 30%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-bottom: 60rpx;

    .sponsor {
      flex: 1;
      display: flex;
      align-items: center;
      font-size: 30rpx;
      color: #000000;
      border-bottom: 1px solid #d6d6d6;
    }

    .time {
      font-size: 30rpx;
      color: #000000;
      flex: 1;
      display: flex;
      align-items: center;
      border-bottom: 1px solid #d6d6d6;

      .img {
        width: 30rpx;
        height: 30rpx;
        margin-right: 10rpx;
      }
    }

    .address {
      font-size: 30rpx;
      color: #000000;
      flex: 1;
      display: flex;
      align-items: center;
      border-bottom: 1px solid #d6d6d6;

      .img {
        width: 30rpx;
        height: 30rpx;
        margin-right: 10rpx;
      }
    }
  }

  .bottom {
    flex: 1;

    .sponsor-intro {
      margin-bottom: 80rpx;

      .title {
        font-size: 30rpx;
        color: grey;
        margin-bottom: 10rpx;
      }

      .intro {
        font-size: 30rpx;
        color: #000000;
      }
    }

    .activity-intro {
      .title {
        font-size: 30rpx;
        color: grey;
        margin-bottom: 10rpx;
      }

      .intro {
        font-size: 30rpx;
        color: #000000;
      }
    }
  }
  .footer{
    .activity-btn{
      margin-bottom: 45rpx;
      display: flex;
      justify-content: center;
      .btn{
        width: 40%;
      }
    }
  }
}
</style>