import {getStatus, loadProfile, UPDATE_PHOTO} from "../Actions/ActionTypes";
import {profileType} from "../Types/Types";
import {ActionCreatorsTypes} from "../Actions/ActionCreators";

const initialState = {
    profile: null as profileType | null,
    status: '' as string
}

type initialStateType = typeof initialState

const ProfileReducer = (state = initialState, action: ActionCreatorsTypes): initialStateType => {
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
                profile: {...state.profile, photos: action.photos} as profileType
            }
        }
        default: return state
    }
}
export default ProfileReducer