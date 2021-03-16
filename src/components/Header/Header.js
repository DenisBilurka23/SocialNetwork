import React from 'react'
import classes from './Header.module.scss'
console.log(classes)
const Header = (props) => {
    return(
        <div className={classes.Header}>
            <img src="https://cdn.logo.com/hotlink-ok/logo-social-sq.png" alt="logo"/>
            {props.isAuthorized ? <div>{props.login}</div> : <div>Login</div>}
        </div>
    )
}
export default Header