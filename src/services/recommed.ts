import { http } from "@/utils/http";

export const getRecommedList = () => {
    return http<any>({
        method: 'GET',
        url: '/system/recommend/list'
    })
}

export const getRecommedDetail = (id) => {
    return http<any>({
        method: 'GET',
        url: `/system/recommend/${id}`
    })
}
export const sendLike = (id) => {
    return http<any>({
        method: 'GET',
        url: `/system/recommend/like/${id}`
    })
}
export const deletLike = (id) => {
    return http<any>({
        method: 'DELETE',
        url: `/system/recommend/like/${id}`
    })
}

export const sendcommen = (data) => {
    return http<any>({
        method: 'POST',
        url: '/system/recommnedcomment',
        data
    })
}
export const newRecommend = (data) => {
    return http<any>({
        method: 'POST',
        url: '/system/recommend',
        data
    })
}