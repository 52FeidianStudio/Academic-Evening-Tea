import { http } from "@/utils/http";

export const getCollegeListAPI = () => {
  return http<any>({
    method: "GET",
    url: "/system/depts/list"
  })
}

export const launchActivityAPI = (data:any) => {
  return http<any>({
    method: "POST",
    url: "/system/activity",
    data
  })
}

// 判断是否有发起活动的权限
export const getLaunchPermissionAPI = () => {
  return http<any>({
    method: "GET",
    url: "/system/activity/menu"
  })
}