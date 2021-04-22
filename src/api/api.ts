import axios from "axios";
import {photosType, profileType, usersType} from "../Types/Types";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials:true,
    headers: {
        'API-KEY': '4c3aed8d-b246-411a-bff3-7d32bab21afd'
    }
})
export enum resultCodeEnum {
    success= 0,
    error= 1
}

type getUsersType = {
    items: Array<usersType>
    totalCount: number
    error: null | string
}
type defaultType = {
    resultCode: resultCodeEnum
    messages: Array<string>
    data: {}
}
type authMeType = {
    data: {
        id: number
        email: string
        login: string
    }
    resultCode: resultCodeEnum
    messages: Array<String>
}
type photoType = {
    resultCode: resultCodeEnum
    messages: Array<string>
    data: photosType
}
export const usersApi = {
    async getUsers(page: number, pageSize: number) {
        const response =  await instance.get<getUsersType>(`users?page=${page}&count=${pageSize}`)
        return response.data
    },
    async followUser(id: number) {
        const response = await instance.post<defaultType>(`follow/${id}`)
        return response.data
    },
    unfollowUser(id: number) {
        return instance.delete<defaultType>(`follow/${id}`).then(response => response.data)
    }
}
export const authorization = {
    me() {
        return instance.get<authMeType>('auth/me').then(response => response.data)
    },
    login(email: string, password: string, rememberMe: boolean, captcha: string) {
        return instance.post<defaultType>('/auth/login', {email, password, rememberMe, captcha})
            .then(response => response.data)
    },
    logout() {
        return instance.delete<defaultType>('/auth/login')
            .then(response => response.data)
    }
}
export const profileApi = {
    getProfile: (userID: number) => instance.get<profileType>(`profile/${userID}`),
    getStatus: (userID: number) => instance.get<string>(`profile/status/${userID}`),
    putStatus: (status: string) => instance.put<defaultType>('profile/status', {status}),
    uploadPictureApi: (file:any) => {
        const formData = new FormData();
        formData.append("image", file);
        return instance.put('/profile/photo', formData)
    },
    updateProfile: (profile: profileType) => instance.put<photoType>('/profile', profile)
}
export const securityApi = {
    getCaptcha: () => instance.get('/security/get-captcha-url')
}

