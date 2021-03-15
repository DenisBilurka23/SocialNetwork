import React from 'react'
import classes from './Profile.module.scss'

const Profile = () => {
    return (
        <div className="Main">
            <div className={classes.image}><img
                src="https://i.pinimg.com/originals/eb/f0/02/ebf002d6348c3ae432649da4418fce40.jpg" alt="img"/></div>
            <div>Ava+description</div>
            <div className={classes.posts}>
                <div className={classes.myPosts}>My posts</div>
                <div className={classes.newPost}>New Post</div>
                <div>post1</div>
                <div>post2</div>
            </div>
        </div>
    )
}
export default Profile