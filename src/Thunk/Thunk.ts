import {authorization, profileApi, resultCodeEnum, securityApi, usersApi} from "../api/api"
import {
    ActionCreatorsTypes,
    authorizingAC,
    captchaAC,
    FollowLoadingAC,
    followToggleActionCreator,
    initialize,
    loadMoreActionCreator,
    logoutAC,
    onLoadActionCreator,
    onLoadProfile,
    setStatusAC,
    updatePhotoAC
} from "../Actions/ActionCreators";
import {stopSubmit} from "redux-form";
import {Dispatch} from "redux";
import {stateType} from "../Redux/ReduxStore";
import {profileType} from "../Types/Types";
import {AxiosResponse} from "axios";

export const getUsersThunkCreator = (currentPage: number, pageSize: number) => async (dispatch:Dispatch<ActionCreatorsTypes>) => {
    const data = await usersApi.getUsers(currentPage, pageSize)
    dispatch(onLoadActionCreator(true))
    dispatch(loadMoreActionCreator(data.items))
}
export const onFollowThunkCreator = (id: number) => async (dispatch:Dispatch<ActionCreatorsTypes>) => {
    const data = await usersApi.followUser(id)
    dispatch(FollowLoadingAC(false))
    return data.resultCode === resultCodeEnum.success ? dispatch(followToggleActionCreator(id)) : null
}
export const onUnfollowThunkCreator = (id: number) => async (dispatch: Dispatch<ActionCreatorsTypes>) => {
    const data = await usersApi.unfollowUser(id)
    dispatch(FollowLoadingAC(false))
    return data.resultCode === resultCodeEnum.success ? dispatch(followToggleActionCreator(id)) : null
}
export const putStatusThunkCreator = (status: string) => async (dispatch: Dispatch<ActionCreatorsTypes>) => {
    const response = await profileApi.putStatus(status)
    if (response.data.resultCode === resultCodeEnum.success) {
        dispatch(setStatusAC(status))
    }
}
export const authorizingThunkCreator = () => (dispatch: Dispatch<ActionCreatorsTypes>) => {
    // @ts-ignore
    return authorization.me().then(data => {
        if (data.resultCode === resultCodeEnum.success) {
            dispatch(authorizingAC(data))
        }
    })
}
export const loginThunkCreator = (email:string, password:string, login:any, captcha:string) => async (dispatch: Dispatch<any>) => {
    try {
        const response = await authorization.login(email, password, login, captcha)
        if (response.resultCode === resultCodeEnum.success) {
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

export const logoutThunkCreator = () => async (dispatch: Dispatch<ActionCreatorsTypes>) => {
    const response = await authorization.logout()
        if(response.resultCode === 0) {
            dispatch(logoutAC())
        }
}
export const initializeThunkCreator = () => (dispatch: any) => {
    dispatch(authorizingThunkCreator()).then(() => dispatch(initialize()))
}
export const updatePhotoThunkCreator = (file: any) => async (dispatch: Dispatch<ActionCreatorsTypes>) => {
    const response = await profileApi.uploadPictureApi(file)
    if(response.data.resultCode === 0) {
        dispatch(updatePhotoAC(response.data.data.photos))
    }
}

export const sendFormThunkCreator = (data:any) => async (dispatch: Dispatch<ActionCreatorsTypes>, getState: () => stateType) => {
    const response = await profileApi.updateProfile(data)
    if(response.data.resultCode === 0) {
        profileApi.getProfile(getState().AuthReducer.id as number)
            .then((response:AxiosResponse<profileType>) => dispatch(onLoadProfile(response.data)))
        profileApi.getStatus(getState().AuthReducer.id as number)
            .then((response:AxiosResponse<string>) => dispatch(setStatusAC(response.data)))
    } else {
        dispatch(stopSubmit('ProfileForm', {_error: response.data.messages[0] || 'error'}))
        return Promise.reject()
    }
}
const captchaThunkCreator = () => async (dispatch: Dispatch<ActionCreatorsTypes>) => {
    const response = await securityApi.getCaptcha()
    dispatch(captchaAC(response.data))
}