import React from 'react'
import {NavLink} from "react-router-dom";

const Person = props => {
    const path = `/messeges/${props.id}`
    return <NavLink to={path}>{props.name}</NavLink>
}

export default Person