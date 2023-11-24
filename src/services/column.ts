import { http } from '@/utils/http'

export const getColumnsAPI = (data: any) => {
  return http<any>({
    url: '/system/column/list',
    method: 'GET',
    data,
  })
}

export const likeUpAPI = (id: number) => {
  return http<any>({
    url: `/system/column/like/${id}`,
    method: 'GET',
  })
}

export const likeDownAPI = (id: number) => {
  return http<any>({
    url: `/system/column/like/${id}`,
    method: 'DELETE',
  })
}

export const getColumnsDetailAPI = (id: number) => {
  return http<any>({
    url: `/system/column/${id}/${2}`,
    method: 'GET',
  })
}