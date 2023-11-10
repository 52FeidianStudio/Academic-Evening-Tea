import { useMemberStore } from "@/stores"

const httpInterceptor = {
  // 拦截前触发
  invoke(options: UniApp.RequestOptions) {
    // 非http开头拼接
    if (!options.url.startsWith('http')) {
      options.url = 'http://117.50.163.249:3166' + options.url
    }
    options.timeout = 10000
    // 添加小程序请求头标识
    options.header = {
      ...options.header,
      // 'source-client': 'miniapp'
    }
    // 添加token请求头标识
    const token = uni.getStorageSync('token')
    if (token) {
      options.header.Authorization = `Bearer ${token}`
    }
  }
}

// 拦截request请求
uni.addInterceptor('request', httpInterceptor)
// 拦截uploadFile请求
uni.addInterceptor('uploadFile', httpInterceptor)

type Data<T> = {
  code: string,
  msg: string,
  result: T
}

export const http = <T>(options: UniApp.RequestOptions) => {
  return new Promise<T>((resolve, reject) => {
    uni.request({
      ...options,
      success(res) {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve(res.data as T)
        } else if (res.statusCode === 401) {
          uni.navigateTo({
            url: '/pages/login/login'
          })
          reject(res)
        } else {
          uni.showToast({
            icon: 'none',
            title: (res.data as Data<T>).msg || '请求失败'
          })
          reject(res)
        }
      },
      fail(err) {
        uni.showToast({
          icon: 'none',
          title: err.errMsg || '网络错误，请换个网络试试'
        })
        reject(err)
      }
    })
  })
}