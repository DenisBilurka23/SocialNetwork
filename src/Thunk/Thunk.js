import {authorization, profileApi, securityApi, usersApi} from "../api/api"
import {
    authorizingAC,
    FollowLoadingAC,
    followToggleActionCreator,
    loadMoreActionCreator, logoutAC,
    onLoadActionCreator, setStatusAC, initialize, updatePhotoAC, onLoadProfile, captchaAC
} from "../Actions/ActionCreators";
import {stopSubmit} from "redux-form";

export const getUsersThunkCreator = (currentPage, pageSize) => async (dispatch) => {
    const data = await usersApi.getUsers(currentPage, pageSize)
    dispatch(onLoadActionCreator(true))
    dispatch(loadMoreActionCreator(data.items))
}
export const onFollowThunkCreator = (id) => async (dispatch) => {
    const data = await usersApi.followUser(id)
    dispatch(FollowLoadingAC(false))
    return data.resultCode === 0 ? dispatch(followToggleActionCreator(id)) : null
}
export const onUnfollowThunkCreator = (id) => async (dispatch) => {
    const data = await usersApi.unfollowUser(id)
    dispatch(FollowLoadingAC(false))
    return data.resultCode === 0 ? dispatch(followToggleActionCreator(id)) : null
}
export const putStatusThunkCreator = (status) => async (dispatch) => {
    const response = await profileApi.putStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatusAC(status))
    }
}
export const authorizingThunkCreator = () => (dispatch) => {
    return authorization.me().then(data => {
        if (data.resultCode === 0) {
            dispatch(authorizingAC(data))
        }
    })
}
export const loginThunkCreator = (email, password, login, captcha) => async (dispatch) => {
    try {
        const response = await authorization.login(email, password, login, captcha)
        if (response.resultCode === 0) {
            dispatch(authorizingThunkCreator())
        } else {
            if (response.resultCode === 10) {
                dispatch(captchaThunkCreator())
            }
            dispatch(stopSubmit('login', {_error: response.messages || 'error'}))
        }
    } catch (e) {
        console.log(e)
    }
}

export const logoutThunkCreator = () => async (dispatch) => {
    const response = await authorization.logout()
        if(response.resultCode === 0) {
            dispatch(logoutAC())
        }
}
export const initializeThunkCreator = () => (dispatch) => {
    dispatch(authorizingThunkCreator()).then(() => dispatch(initialize()))
}
export const updatePhotoThunkCreator = (file) => async (dispatch) => {
    const response = await profileApi.uploadPictureApi(file)
    if(response.data.resultCode === 0) {
        dispatch(updatePhotoAC(response.data.data.photos))
    }
}
export const sendFormThunkCreator = (data) => async (dispatch, getState) => {
    const response = await profileApi.updateProfile(data)
    if(response.data.resultCode === 0) {
        profileApi.getProfile(getState().AuthReducer.id)
            .then(response => dispatch(onLoadProfile(response.data)))
        profileApi.getStatus(getState().AuthReducer.id)
            .then(response => dispatch(setStatusAC(response.data)))
    } else {
        dispatch(stopSubmit('ProfileForm', {_error: response.data.messages[0] || 'error'}))
        return Promise.reject()
    }
}
const captchaThunkCreator = () => async (dispatch) => {
    const response = await securityApi.getCaptcha()
    dispatch(captchaAC(response.data))
}