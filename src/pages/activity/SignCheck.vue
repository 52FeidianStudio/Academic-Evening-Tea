<template>
  <div class="tip-page">
    <div class="content">
      <uni-icons
        class="icons"
        v-if="result === 1 || result === 2"
        type="info"
        color="#ffa500"
        size="100"
      ></uni-icons>
      <uni-icons
        class="icons"
        v-else-if="result === 3"
        type="checkbox-filled"
        color="green"
        size="100"
      ></uni-icons>
      <uni-icons class="icons" v-else type="clear" color="red" size="100"></uni-icons>

      <div class="message">{{ message[result - 1] }}</div>

      <view class="tag-view">
        <uni-tag v-if="result === 1" @click="toapply" text="未报名 点击报名" />
        <uni-tag v-else-if="result === 4" text="不在报名时间" />
      </view>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { http } from '../../utils/http'
import { onLoad } from '@dcloudio/uni-app'

const result = ref<number>(1)
const props = defineProps<{
  id: number
}>()
console.log(props.id)
const message = ref<string[]>(['签到失败', '请勿重复签到', '签到成功', '签到失败'])

const postFeedbackAPI = (data: any) => {
  return http<any>({
    url: '/system/useractivity/register',
    method: 'PUT',
    data: {
      activityId: data,
    },
  })
}

const postFeedback = async (AId: number) => {
  const res = await postFeedbackAPI(AId)
  console.log(res)
  result.value = res.data
}

const AId = props.id

const toapply = () => {
  console.log('去报名！')
  uni.redirectTo({
    url: '/pages/index/index',
  })
  uni.navigateTo({
    url: '/pages/activity/ActivityDetails?id=' + AId,
  })
}
onLoad(() => {
  postFeedback(AId)
})
</script>

<style>
.tip-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.icons {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border-radius: 50%;
}

.message {
  margin-top: 1vh;
  font-size: 26px;
  font-weight: bold;
  color: #333;
}
</style>
