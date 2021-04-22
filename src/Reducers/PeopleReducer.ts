import {
    followLoading,
    followToggle,
    loadMore,
    onLoad,
    pageChanger,
    totalCount
} from "../Actions/ActionTypes"
import {photosType, usersType} from "../Types/Types";
import {ActionCreatorsTypes} from "../Actions/ActionCreators";

const initialState = {
    users: [] as Array<usersType>,
    currentPage: 1,
    pageSize: 6,
    allUsers: 0,
    isLoaded: false,
    isFollowLoaded: true,
    defaultProfilePicture: 'https://st.depositphotos.com/2101611/3925/v/600/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg'
}

type initialStateType = typeof initialState
const PeopleReducer = (state = initialState, action: ActionCreatorsTypes): initialStateType => {
    switch (action.type) {
        case followToggle: {
            return {
                ...state,
                users: state.users.map((user: any, id) => {
                    if (user.id === action.id) return {...user, followed:!user.followed}
                    else return {...user}
                } ),
            }
        }
        case loadMore: {
            return {
                ...state,
                currentPage: state.currentPage + 1,
                users:[...state.users, ...action.users]
            }
        }
        case totalCount: {
            return {
                ...state,
                allUsers: action.users
            }
        }
        case pageChanger: {
            return{
                ...state,
                currentPage: action.page
            }
        }
        case onLoad: {
            return{
                ...state,
                isLoaded: action.isLoaded
            }
        }
        case followLoading: {
            return{
                ...state,
                isFollowLoaded: action.isFollowLoaded
            }
        }
        default: return state
    }
}
export default PeopleReducer