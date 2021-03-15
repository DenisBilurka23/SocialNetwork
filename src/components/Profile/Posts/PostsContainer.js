import React from 'react'
import classes from './Posts.module.scss'
import Post from "./Post/Post";
import {addPostActionCreator, changeValueActionCreator} from "../../../Actions/ActionCreators";


const Posts = props => {
    const postsGenerator = props.postPage.posts.map(post => <Post
        profilePic={post.profilePic}
        text={post.text}
        likes={post.likeCounter}
        />)
    const addPostHandler = () => {
        // props.addPost()
        props.dispatch(addPostActionCreator())
    }
    const changeValueHandler = (event) => {
        // props.changeValue(inputPostRef.current.value)
        props.dispatch(changeValueActionCreator(event.target.value))
    }
    let inputPostRef = React.createRef()

    return (
        <div className={classes.Posts}>
            <div className={classes.myPosts}>My posts</div>
            <div className={classes.newPost}>New Post</div>
            <div>
                <input ref={inputPostRef} onChange={changeValueHandler} value={props.postPage.inputValue} type="placeholder"/>
                <button onClick={addPostHandler}>Post</button>
            </div>

            {postsGenerator}
        </div>
    )
}
export default Posts