import {authorization, profileApi, usersApi} from "../api/api"
import {
    authorizingAC,
    FollowLoadingAC,
    followToggleActionCreator,
    loadMoreActionCreator, logoutAC,
    onLoadActionCreator, setStatusAC, initialize
} from "../Actions/ActionCreators";
import {stopSubmit} from "redux-form";

export const getUsersThunkCreator = (currentPage, pageSize) => (dispatch) => {
    usersApi.getUsers(currentPage, pageSize).then(data => {
        dispatch(onLoadActionCreator(true))
        dispatch(loadMoreActionCreator(data.items))
    })
}
export const onFollowThunkCreator = (id) => (dispatch) => {
    usersApi.followUser(id)
        .then(data => {
            dispatch(FollowLoadingAC(false))
            return data.resultCode === 0 ? dispatch(followToggleActionCreator(id)) : null
        })
}
export const onUnfollowThunkCreator = (id) => (dispatch) => {
    usersApi.unfollowUser(id)
        .then(data => {
            dispatch(FollowLoadingAC(false))
            return data.resultCode === 0 ? dispatch(followToggleActionCreator(id)) : null
        })
}
export const putStatusThunkCreator = (status) => (dispatch) => {
    profileApi.putStatus(status).then(response => {
        if(response.data.resultCode === 0) {
            dispatch(setStatusAC(status))
        }
    })
}
export const authorizingThunkCreator = () => (dispatch) => {
    return authorization.me().then(data => {
        if (data.resultCode === 0) {
            dispatch(authorizingAC(data))
        }
    })
}
export const loginThunkCreator = (email, password, login) => (dispatch) => {
    authorization.login(email, password, login).then(response => {
        if(response.resultCode === 0) {
            dispatch(authorizingThunkCreator())
        } else {
            dispatch(stopSubmit('login', {_error: response.messages || 'error'}))
        }
    })
}
export const logoutThunkCreator = () => (dispatch) => {
    authorization.logout().then(response => {
        console.log('resultCode', response)
        if(response.resultCode === 0) {
            dispatch(logoutAC())
        }
    })
}
export const initializeThunkCreator = () => (dispatch) => {
    dispatch(authorizingThunkCreator()).then(() => dispatch(initialize()))
}