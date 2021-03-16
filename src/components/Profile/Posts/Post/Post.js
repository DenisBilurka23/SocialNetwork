import React from 'react'
import classes from './Post.module.scss'
const Post = props => {
    return (
        <div className={classes.Post}>
            <div className={classes.container}>
                <img src={props.profilePic} alt="profile picture"/>
                <div className="post">{props.text}</div>
            </div>
            <div>Likes: {props.likes}</div>
        </div>
    )
}
export default Post