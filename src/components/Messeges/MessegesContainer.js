import React from 'react'
import classes from './Messeges.module.scss'
import Person from "./Person/Person"
import Messege from "./Messege/Messege"
import {changeMessageValue, sendMessage} from "../../Actions/ActionTypes";
import {sendMessageActionCreator, changeMessageValueActionCreator} from "../../Actions/ActionCreators";
const Messeges = props => {
    // const users = ['Arthur', 'Micah', 'Daniel', 'Denis', 'Andrew']
    // const messeges = ['Hi', 'Hi', 'Whats up', 'Nothing']
    const userGenerator = props.state.users.map((name, index) => <Person name={name} id={index}/>)
    const messegeGenerator = props.state.messeges.map((messege, index) => {
        if (messege.trim() !== '') {
            if (index % 2 === 0) {
                return <Messege classname={classes.myMessege} text={messege}/>
            } else return <Messege classname={classes.opponentMessege} text={messege}/>
        }
    })
    let sendMessegeRef = React.createRef()
    const sendMessegeHandler = () => {
        // props.sendMessage()
        props.dispatch(sendMessageActionCreator())
    }
    const changeMessegeValueHandler = (event) => {
        // props.changeMessageValue(sendMessegeRef.current.value)
        props.dispatch(changeMessageValueActionCreator(event.target.value))
    }

    return (

        <div className={classes.Messeges}>
            <div className={classes.dialogs}>
                {userGenerator}
            </div>
            <div>
                <div className={classes.messeges}>
                    {messegeGenerator}
                </div>
                <div className="sendMessege">
                    <input onChange={changeMessegeValueHandler}
                           value={props.state.inputValue}
                           type="placeholder"/>
                    <button onClick={sendMessegeHandler}>Send</button>
                </div>
            </div>

        </div>
    )
}
export default Messeges