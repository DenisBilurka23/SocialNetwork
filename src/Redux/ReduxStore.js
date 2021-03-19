import {applyMiddleware, combineReducers, createStore} from "redux"
import MessegeReducer from "../Reducers/MessegeReducer"
import PostReducer from "../Reducers/PostReducer"
import FriendsReducer from "../Reducers/FriendsReducer"
import PeopleReducer from "../Reducers/PeopleReducer"
import ProfileReducer from "../Reducers/ProfileReducer"
import AuthReducer from "../Reducers/AuthReducer"
import ThunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import AppReducer from "../Reducers/AppReducer";

const reducers = combineReducers({
    MessegeReducer,
    PostReducer,
    FriendsReducer,
    PeopleReducer,
    ProfileReducer,
    AuthReducer,
    form: formReducer,
    AppReducer
})
const store = createStore(reducers, applyMiddleware(ThunkMiddleware))
window.store = store
export default store