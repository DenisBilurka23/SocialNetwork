import {authorizing} from "../Actions/ActionTypes";

const initialState = {
    id: null,
    login: null,
    email: null,
    isAuthorized: false,
    auth: {
        login: null,
        password: null,
        rememberMe: false
    }
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
        // case login
        default: return state
    }
}
export default AuthReducer