import {changeMessageValue, sendMessage} from '../Actions/ActionTypes'

const initialState = {
    inputValue: '',
    users: ['Arthur', 'Micah', 'Daniel', 'Denis', 'Andrew'],
    messeges: ['Hi', 'Hi', 'Whats up', 'Nothing']
}
const messegePageReducer = (state = initialState, action) => {
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