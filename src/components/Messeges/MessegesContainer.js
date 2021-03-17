import React from 'react'
import {sendMessageActionCreator, changeMessageValueActionCreator} from "../../Actions/ActionCreators";
import Messeges from "./Messeges";
import {connect} from "react-redux";
import {compose} from "redux";
import {withAuthComponent} from "../../hoc/AuthHOC";


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
export default compose(withAuthComponent,
    connect(mapStateToProps, mapDispatchToProps))(Messeges)
// const MessegesContainer = connect(mapStateToProps, mapDispatchToProps)(Messeges)
// export default MessegesContainer