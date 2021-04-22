import {authorizing, captcha, logout} from "../Actions/ActionTypes";
import {ActionCreatorsTypes} from "../Actions/ActionCreators";

const initialState = {
    id: null as null | number,
    login: null as null | string,
    email: null as null | string,
    captcha: null as null | string,
    captchaUrl: null as null | string,
    isAuthorized: false as boolean
}
type initialStateType = typeof initialState
const AuthReducer = (state = initialState, action: ActionCreatorsTypes): initialStateType => {
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
        case captcha : {
            return {
                ...state,
                captchaUrl: action.captchaUrl
            }
        }
        default: return state
    }
}
export default AuthReducer