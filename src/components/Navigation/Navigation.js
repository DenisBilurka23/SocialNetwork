import React from 'react'
import classes from'./Navigation.module.scss'
import {NavLink} from "react-router-dom";
import Profile from "../Profile/Profile";
import Messeges from "../Messeges/Messeges";
import FriendsPreview from "../Friends /FriendsPreview";
import FriendsPreviewContainer from "../Friends /FriendsPreviewContainer";
const Navigation = props => {
    return(
        <div className={classes.Navigation}>
            <ul>
                <li className={classes.active}>
                    <NavLink to="/profile">Profile</NavLink>
                </li>
                <li>
                    <NavLink to="/messeges">Messeges</NavLink>
                </li>
                <li>
                    News
                </li>
                <li>
                    <NavLink to="/people">Find new people</NavLink>
                </li>
                <li>
                    Music
                </li>
                <li>
                    Settings
                </li>
                <li>
                    <FriendsPreviewContainer
                        // store={props.store}
                    />
                </li>
            </ul>
        </div>
    )
}
export default Navigation