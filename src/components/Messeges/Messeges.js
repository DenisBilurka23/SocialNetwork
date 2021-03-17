import React from 'react'
import classes from './Messeges.module.scss'
import Person from "./Person/Person"
import Messege from "./Messege/Messege"
import {Field, reduxForm} from "redux-form";
import {maxLength, required} from "../../validation/validation";
import Placeholder from "../common/Placeholder/Placeholder";
import InputHOC from "../common/Input/Input";

const Messeges = props => {
    const userGenerator = props.usersState.map((name, index) => <Person key={index} name={name} id={index}/>)
    const messegeGenerator = props.messegeState.map((messege, index) => {
        if (index % 2 === 0) {
            return <Messege key={index} classname={classes.myMessege} text={messege}/>
        } else return <Messege key={index} classname={classes.opponentMessege} text={messege}/>
    })
    const onSubmitHandler = (data) => {
        props.sendMessegeHandlerContainer(data.messege)
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
                    <MessegeReduxForm onSubmit={onSubmitHandler}/>
                </div>
            </div>
        </div>
    )
}

const maxLength50 = maxLength(50)
const MessegeForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field validate={[required, maxLength50]} name="messege" component={Placeholder}/>
            <button>Send</button>
        </form>
    )
}
const MessegeReduxForm = reduxForm({form: 'messege'})(MessegeForm)


export default Messeges