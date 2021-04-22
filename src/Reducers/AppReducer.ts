import {TOGGLE_INITIALIZE} from "../Actions/ActionTypes";
import {ActionCreatorsTypes} from "../Actions/ActionCreators";

const initialState = {
    initialized: false
}
type initialStateType = typeof initialState
const AppReducer = (state = initialState, action: ActionCreatorsTypes): initialStateType => {
    switch (action.type) {
        case TOGGLE_INITIALIZE:{
            return {
                ...state,
                initialized: !state.initialized
            }
        }
        default: return state
    }
}
export default AppReducer