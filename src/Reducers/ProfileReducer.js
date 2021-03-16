import {getStatus, loadProfile} from "../Actions/ActionTypes";

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
        default: return state
    }
}
export default ProfileReducer