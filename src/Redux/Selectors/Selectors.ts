import {stateType} from "../ReduxStore";

export const getDefaultProfilePicture = (state:stateType) => state.PeopleReducer.defaultProfilePicture
export const getUsers = (state:stateType) => state.PeopleReducer.users
export const getCurrentPage = (state:stateType) => state.PeopleReducer.currentPage
export const getAllUsers = (state:stateType) => state.PeopleReducer.allUsers
export const getPageSize = (state:stateType) => state.PeopleReducer.pageSize
export const getIsLoadedInfo = (state:stateType) => state.PeopleReducer.isLoaded
export const getIsFollowLoadedInfo = (state:stateType) => state.PeopleReducer.isFollowLoaded
export const getIsAuthorizedInfo = (state:stateType) => state.AuthReducer.isAuthorized