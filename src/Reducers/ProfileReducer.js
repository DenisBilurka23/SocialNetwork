import {getStatus, loadProfile, UPDATE_PHOTO} from "../Actions/ActionTypes";

const initialState = {
    profile: null,
    status: ''
}
const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case loadProfile: {
            return {
                ...state,
                profile: action.data
            }
        }
        case getStatus: {
            return {
                ...state,
                status: action.status
            }
        }
        case UPDATE_PHOTO: {
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            }
        }
        default: return state
    }
}
export default ProfileReducer