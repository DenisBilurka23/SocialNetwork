import React from 'react'
import classes from './Header.module.scss'
import {NavLink} from "react-router-dom";

const LogoutNav = (props) => (
    <div className={classes.LogoutNav}>
        <div>{props.login}</div>
        <button onClick={props.logoutHandler}>Logout</button>
    </div>
)
const Header = (props) => {
    return (
        <div className={classes.Header}>
            <img src="https://cdn.logo.com/hotlink-ok/logo-social-sq.png" alt="logo"/>
            {props.isAuthorized ? <LogoutNav login={props.login} logoutHandler={props.logoutThunkCreator}/>
                : <NavLink to="/login">Login</NavLink>}
        </div>
    )
}
export default Header