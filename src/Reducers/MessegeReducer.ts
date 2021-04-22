import {sendMessage} from '../Actions/ActionTypes'
import {ActionCreatorsTypes} from "../Actions/ActionCreators";

const initialState = {
    inputValue: '' as string,
    users: ['Arthur', 'Micah', 'Daniel', 'Denis', 'Andrew'] as Array<string>,
    messeges: ['Hi', 'Hi', 'Whats up', 'Nothing'] as Array<string>
}
type initialStateType = typeof initialState
const messegePageReducer = (state = initialState, action: ActionCreatorsTypes): initialStateType => {
    switch (action.type) {
        case sendMessage: {
            return {
                ...state,
                messeges: [...state.messeges, action.messege]
            }
        }
        default: return state
    }
}
export default messegePageReducer