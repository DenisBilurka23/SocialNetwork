import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials:true,
    headers: {
        'API-KEY': '4c3aed8d-b246-411a-bff3-7d32bab21afd'
    }
})
export const usersApi = {
    async getUsers(page, pageSize) {
        const response =  await instance.get(`users?page=${page}&count=${pageSize}`)
        return response.data
    },
    async followUser(id) {
        const response = await instance.post(`follow/${id}`)
        return response.data
    },
    unfollowUser(id) {
        return instance.delete(`follow/${id}`).then(response => response.data)
    }
}
export const authorization = {
    me() {
        return instance.get('auth/me').then(response => response.data)
    },
    login(email, password, rememberMe, captcha) {
        return instance.post('/auth/login', {email, password, rememberMe, captcha})
            .then(response => response.data)
    },
    logout() {
        return instance.delete('/auth/login')
            .then(response => response.data)
    }
}
export const profileApi = {
    getProfile: (userID) => instance.get(`profile/${userID}`),
    getStatus: (userID) => instance.get(`profile/status/${userID}`),
    putStatus: (status) => instance.put('profile/status', {status}),
    uploadPictureApi: (file) => {
        const formData = new FormData();
        formData.append("image", file);
        return instance.put('/profile/photo', formData)
    },
    updateProfile: (profile) => instance.put('/profile', profile)
}
export const securityApi = {
    getCaptcha: () => instance.get('/security/get-captcha-url')
}

