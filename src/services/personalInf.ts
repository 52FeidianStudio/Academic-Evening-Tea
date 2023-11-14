import { http } from "@/utils/http";


export const getPersonalInf = () => {
    return http<any>({
        method: 'GET',
        url: '/user'
    })
}

export const changePersonalInf = (data: any) => {
    return http<any>({
        method: "PUT",
        url: "/user",
        data
    })
}
