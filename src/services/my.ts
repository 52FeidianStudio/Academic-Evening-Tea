import { http } from "@/utils/http";

export const getMyActivityAPI = () => {
  return http<any>({
    method:'GET',
    url:'/system/useractivity/myactivity'
  })
}
