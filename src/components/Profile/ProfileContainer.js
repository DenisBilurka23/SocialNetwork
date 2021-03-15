import React from 'react'
import classes from './Profile.module.scss'
import PostsContainer from "./Posts/PostsContainer";

const Profile = (props) => {
    return (
        <div className="Main">
            <div className={classes.image}><img
                src="https://i.pinimg.com/originals/eb/f0/02/ebf002d6348c3ae432649da4418fce40.jpg" alt="img"/></div>
            <div>Ava+description</div>
            <PostsContainer
                // store={props.store}
            />
        </div>
    )
}
export default Profile