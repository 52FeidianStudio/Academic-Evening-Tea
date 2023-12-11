<script>
import newsItem from './components/newsItem.vue'

import { ref, computed, onMounted } from 'vue'
import { getAudit } from '@/services/Audit'
export default {
  components: {
    newsItem,
  },
  setup() {
    const showMoments = ref(true)

    const isShowMoments = () => {
      showMoments.value = true
      console.log(showMoments.value)
    }

    const isShowTimes = () => {
      showMoments.value = false
      console.log(showMoments.value)
    }

    const isPastTargetDate = ref(true)
    const getA = async () => {
      const res = await getAudit()
      console.log(res)
      isPastTargetDate.value = res.data
      if (!isPastTargetDate.value) {
        uni.showToast({
          title: '推荐部分功能尚未实现，敬请期待~',
          icon: 'none',
          duration: 2000,
          complete: function () {
            setTimeout(function () {
              uni.switchTab({
                url: '/pages/index/index',
              })
            }, 2000) // 在弹窗关闭后，延迟2秒执行页面跳转
          },
        })
      }
    }

    onMounted(() => {
      getA()
    })

    return {
      showMoments,
      isShowMoments,
      isShowTimes,
      isPastTargetDate,
      getA,
    }
  },
}
//
</script>

<template>
  <view v-if="isPastTargetDate" class="container">
    <view class="main">
      <view v-if="showMoments" class="Moments">
        <news-item :kind="1"></news-item>
      </view>
      <view v-else class="Times">
        <news-item :kind="2"></news-item>
      </view>
    </view>

    <view class="buttons">
      <button :class="{ selected: showMoments }" @tap="isShowMoments()">精彩瞬间</button>
      <button :class="{ selected: !showMoments }" @tap="isShowTimes()">科普时间</button>
    </view>
  </view>
</template>

<style lang="scss">
.container {
  width: 100%;
  padding-bottom: 90rpx;
}
.buttons {
  position: fixed;
  display: flex;
  flex-direction: row;
  top: 0;
  width: 100%;
  height: 90rpx;
  line-height: 90rpx;
  background-color: #f8f8f8;
  button {
    height: 80rpx;
  }
}
.selected {
  background-color: #007bff;
  color: #f8f8f8;
}
button {
  width: 45%;
  font-size: 32rpx;
}

.main {
  height: calc(100% - 90rpx);
  overflow-y: auto;
  overflow-x: hidden;
  width: 100%;
}
.Moments {
  margin-top: 105rpx;
}
.Times {
  margin-top: 105rpx;
}
</style>
