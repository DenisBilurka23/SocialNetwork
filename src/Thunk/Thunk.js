import {authorization, profileApi, usersApi} from "../api/api"
import {
    authorizingAC,
    FollowLoadingAC,
    followToggleActionCreator,
    loadMoreActionCreator, logoutAC,
    onLoadActionCreator, setStatusAC, initialize
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
export const loginThunkCreator = (email, password, login) => async (dispatch) => {
    const response = await authorization.login(email, password, login)
    if (response.resultCode === 0) {
        dispatch(authorizingThunkCreator())
    } else {
        dispatch(stopSubmit('login', {_error: response.messages || 'error'}))
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