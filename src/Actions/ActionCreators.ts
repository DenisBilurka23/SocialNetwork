import {
    addPost, authorizing, captcha,
    changeMessageValue,
    changeValue, DELETE_POST, followLoading,
    followToggle, getStatus,
    loadMore, loadProfile, logout, onLoad, pageChanger,
    sendMessage, TOGGLE_INITIALIZE, totalCount, UPDATE_PHOTO,
} from "./ActionTypes";
import {profileType, usersType} from "../Types/Types";

export const changeMessageValueActionCreator = (messege: string): changeMessageValueActionCreatorType => {
    return {
        type: changeMessageValue,
        text: messege
    }
}
type changeMessageValueActionCreatorType = {
    type: typeof changeMessageValue
    text: string
}
export const sendMessageActionCreator = (messege: string): sendMessageActionCreatorType => {
    return {
        type: sendMessage,
        messege
    }
}
type sendMessageActionCreatorType = {
    type: typeof sendMessage
    messege: string
}
export const addPostActionCreator = (data: string): addPostActionCreatorType => {
    return {
        type: addPost,
        data
    }
}
type addPostActionCreatorType = {
    type: typeof addPost
    data: string
}
export const changeValueActionCreator = (text: string): changeValueActionCreatorType => {
    return {
        type: changeValue,
        text: text
    }
}
type changeValueActionCreatorType = {
    type: typeof changeValue
    text: string
}
export const followToggleActionCreator = (id: number): followToggleActionCreatorType => {
    return {
        id,
        type: followToggle
    }
}
type followToggleActionCreatorType = {
    type: typeof followToggle
    id: number
}
export const loadMoreActionCreator = (users: Array<usersType>): loadMoreActionCreatorType => {
    return {
        type: loadMore,
        users
    }
}
type loadMoreActionCreatorType = {
    type: typeof loadMore
    users: Array<usersType>
}
export const totalCountActionCreator = (users: number): totalCountActionCreatorType => {
    return {
        type: totalCount,
        users
    }
}
type totalCountActionCreatorType = {
    type: typeof totalCount
    users: number
}
export const pageChangerActionCreator = (page: number): pageChangerActionCreatorType => {
    return {
        type: pageChanger,
        page
    }
}
type pageChangerActionCreatorType = {
    type: typeof pageChanger
    page: number
}
export const onLoadActionCreator = (isLoaded: boolean): onLoadActionCreatorType => {
    return {
        type: onLoad,
        isLoaded
    }
}
type onLoadActionCreatorType = {
    type: typeof onLoad
    isLoaded: boolean
}
export const onLoadProfile = (data: profileType): onLoadProfileType => {
    return {
        type: loadProfile,
        data
    }
}
type onLoadProfileType = {
    type: typeof loadProfile
    data: profileType
}
export const authorizingAC = (data: any): authorizingACType => {
    return {
        type: authorizing,
        login: data.data.login,
        email: data.data.email,
        id: data.data.id,
    }
}
type authorizingACType = {
    type: typeof authorizing
    login: string
    email: string
    id: number
}
export const FollowLoadingAC = (isFollowLoaded: boolean): FollowLoadingACType => {
    return {
        type: followLoading,
        isFollowLoaded: !isFollowLoaded,
    }
}
type FollowLoadingACType = {
    type: typeof followLoading
    isFollowLoaded: boolean
}
export const setStatusAC = (status: string): setStatusACType => {
    return {
        type: getStatus,
        status
    }
}
type setStatusACType = {
    type: typeof getStatus
    status: string
}
export const logoutAC = (): logoutACType => {
    return {
        type: logout
    }
}
type logoutACType = {type: typeof logout}

export const initialize = ():initializeType => ({
    type: TOGGLE_INITIALIZE
})
type initializeType = {type: typeof TOGGLE_INITIALIZE}

export const DeletePostAC = (id: number): DeletePostACType => ({
    type: DELETE_POST,
    id
})
type DeletePostACType = {
    type: typeof DELETE_POST
    id: number
}
export const updatePhotoAC = (photos: any): updatePhotoACType => ({
    type: UPDATE_PHOTO,
    photos
})
type updatePhotoACType = {
    type: typeof UPDATE_PHOTO
    photos: any
}
export const captchaAC = (captchaUrl: string): captchaACType => ({
    type: captcha,
    captchaUrl
})
type captchaACType = {
    type: typeof captcha
    captchaUrl: string
}
export type ActionCreatorsTypes = captchaACType | updatePhotoACType | DeletePostACType |
    initializeType | logoutACType | setStatusACType | FollowLoadingACType | authorizingACType |
    onLoadProfileType | onLoadActionCreatorType | pageChangerActionCreatorType |
    totalCountActionCreatorType | loadMoreActionCreatorType | followToggleActionCreatorType |
    changeValueActionCreatorType | addPostActionCreatorType | sendMessageActionCreatorType |
    changeMessageValueActionCreatorType


