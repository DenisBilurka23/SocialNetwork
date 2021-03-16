import {
    addPost, authorizing,
    changeMessageValue,
    changeValue, followLoading,
    followToggle, getStatus,
    loadMore, loadProfile, onLoad, pageChanger,
    sendMessage, totalCount,
} from "./ActionTypes";

export const changeMessageValueActionCreator = (messege) => {
    return {
        type: changeMessageValue,
        text: messege
    }
}
export const sendMessageActionCreator = (messege) => {
    return {
        type: sendMessage,
        messege
    }
}
export const addPostActionCreator = (data) => {
    return {
        type: addPost,
        data
    }
}
export const changeValueActionCreator = (text) => {
    return {
        type: changeValue,
        text: text
    }
}
export const followToggleActionCreator = (id) => {
    return {
        id,
        type: followToggle
    }
}
export const loadMoreActionCreator = (users) => {
    return {
        type: loadMore,
        users
    }
}
export const totalCountActionCreator = (users) => {
    return {
        type: totalCount,
        users
    }
}
export const pageChangerActionCreator = (page) => {
    return {
        type: pageChanger,
        page
    }
}
export const onLoadActionCreator = (isLoaded) => {
    return {
        type: onLoad,
        isLoaded
    }
}
export const onLoadProfile = (data) => {
    return {
        type: loadProfile,
        data
    }
}
export const authorizingAC = (data) => {
    return {
        type: authorizing,
        login: data.data.login,
        email: data.data.email,
        id: data.data.id,
    }
}
export const FollowLoadingAC = (isFollowLoaded) => {
    return {
        type: followLoading,
        isFollowLoaded: !isFollowLoaded,
    }
}
export const setStatusAC = (status) => {
    return {
        type: getStatus,
        status
    }
}


