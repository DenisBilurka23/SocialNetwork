import {authorizing, logout} from "../Actions/ActionTypes";

const initialState = {
    id: null,
    login: null,
    email: null,
    isAuthorized: false,
}
const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case authorizing: {
            return {
                ...state,
                id: action.id,
                login: action.login,
                isAuthorized: true
            }
        }
        case logout: {
            return {
                ...state,
                id: null,
                login: null,
                isAuthorized: false
            }
        }
        default: return state
    }
}
export default AuthReducer