import React from 'react'
import classes from './Header.module.scss'
console.log(classes)
const Header = () => {
    return(
        <div className={classes.Header}>
            <img src="https://cdn.logo.com/hotlink-ok/logo-social-sq.png" alt="logo"/>
        </div>
    )
}
export default Header