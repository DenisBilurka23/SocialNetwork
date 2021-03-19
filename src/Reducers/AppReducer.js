import {TOGGLE_INITIALIZE} from "../Actions/ActionTypes";

const initialState = {
    initialized: false
}
const AppReducer = (state = initialState, action) => {
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