import React from 'react'
import {sendMessageActionCreator, changeMessageValueActionCreator} from "../../Actions/ActionCreators";
import Messeges from "./Messeges";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        usersState: state.MessegeReducer.users,
        messegeState: state.MessegeReducer.messeges,
        inputValueContainer: state.MessegeReducer.inputValue
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        sendMessegeHandlerContainer: (messege) => {
            dispatch(sendMessageActionCreator(messege))
        }
    }
}

const MessegesContainer = connect(mapStateToProps, mapDispatchToProps)(Messeges)
export default MessegesContainer