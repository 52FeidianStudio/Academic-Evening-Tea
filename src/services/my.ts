import { http } from '@/utils/http'

export const getMyActivityAPI = () => {
  return http<any>({
    method: 'GET',
    url: '/system/useractivity/myactivity',
  })
}
export const getConnect = () => {
  return http<any>({
    method: 'GET',
    url: '/system/head/list',
  })
}
