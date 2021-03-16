import React from 'react'
import classes from './Messeges.module.scss'
import Person from "./Person/Person"
import Messege from "./Messege/Messege"
import {Field, reduxForm} from "redux-form";

const Messeges = props => {
    const userGenerator = props.usersState.map((name, index) => <Person key={index} name={name} id={index}/>)
    const messegeGenerator = props.messegeState.map((messege, index) => {
        if (messege.trim() !== '') {
            if (index % 2 === 0) {
                return <Messege key={index} classname={classes.myMessege} text={messege}/>
            } else return <Messege key={index} classname={classes.opponentMessege} text={messege}/>
        }
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

const MessegeForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name="messege" component="input" type="placeholder"/>
            <button>Send</button>
        </form>
    )
}
const MessegeReduxForm = reduxForm({form: 'messege'})(MessegeForm)


export default Messeges