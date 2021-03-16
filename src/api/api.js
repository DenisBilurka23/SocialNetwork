import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials:true,
    headers: {
        'API-KEY': '4c3aed8d-b246-411a-bff3-7d32bab21afd'
    }
})
export const usersApi = {
    getUsers(page, pageSize) {
        return instance.get(`users?page=${page}&count=${pageSize}`).then(response => response.data)
    },
    getAllUsers() {
        return instance.get(`users`).then(response => response.data)
    },
    followUser(id) {
        return instance.post(`follow/${id}`).then(response => response.data)
    },
    unfollowUser(id) {
        return instance.delete(`follow/${id}`).then(response => response.data)
    }
}
export const authorization = {
    me() {
        return instance.get('auth/me').then(response => response.data)
    }
}
export const profileApi = {
    getProfile: (userID) => instance.get(`profile/${userID}`),
    getStatus: (userID) => instance.get(`profile/status/${userID}`),
    putStatus: (status) => instance.put('profile/status', {status})
}

