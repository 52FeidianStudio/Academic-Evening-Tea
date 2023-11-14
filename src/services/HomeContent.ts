import { http } from "@/utils/http";

type HomeContent = {
  /**
     * 1是活动进行中2是活动已结束
     */
  isEnd: number;
  /**
   * 1是审核中2是审核通过
   */
  state: number;
  /**
   * 1未精选2已精选
   */
  type: number;
}

export const getHomeContentAPI = (data?: HomeContent) => {
  const requestData = data ? data : {a:1}
  console.log(requestData);
  return http<any>({
    method: "POST",
    url: "/system/activity/list",
    data:requestData
  });
}