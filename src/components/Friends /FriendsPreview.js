import React from 'react'
import {NavLink} from "react-router-dom";
import classes from './FriendsPreview.module.scss'

const FriendsPreview = props => {
    const friendsPreviewGenerator = props.friendsState.map((friend, index) => {
        if (index < 3) {
            const cls = `friendsPreviewGeneratorItem${index}`
            return (
                <div className={classes.cls} key={index}>
                    <div><img src={friend.profilePic} alt="profile picture"/></div>
                    <div>{friend.name}</div>
                </div>
            )
        }
    })
    return (
        <NavLink to="/friends">
            <div className={classes.FriendsPreview}>
                <div>FRIENDS</div>
                <div className={classes.friendsPreviewGenerator}>
                    {friendsPreviewGenerator}
                </div>
            </div>
        </NavLink>
    )
}
export default FriendsPreview