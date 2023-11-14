import { defineStore } from 'pinia'
import { ref } from 'vue'

// 定义 Store
export const useMemberStore = defineStore(
  'member',
  () => {
    // 会员信息
    const profile = ref<any>()
    // const memberInfo = ref<{ name: string, id: number, avatar: string }>({
    //   name: '',
    //   id: 0,
    //   avatar: ''
    // })

    // 保存会员信息，登录时使用
    const setProfile = (val: any) => {
      profile.value = val
      // memberInfo.value.name = val.name
      // memberInfo.value.id = val.id
      // memberInfo.value.avatar = val.avatar
    }

    // 清理会员信息，退出时使用
    const clearProfile = () => {
      profile.value = undefined
      // memberInfo.value.name = ''
      // memberInfo.value.id = 0
      // memberInfo.value.avatar = ''
    }

    // 记得 return
    return {
      profile,
      // memberInfo,
      setProfile,
      clearProfile,
    }
  },
  // TODO: 持久化
  {
    persist: {
      storage: {
        setItem(key, value) {
          uni.setStorageSync(key, value)
        },
        getItem(key) {
          return uni.getStorageSync(key)
        },
      }
    }
  },
)
