import React from 'react'
import classes from './Posts.module.scss'
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";

const Posts = props => {
    const postsGenerator = props.postsState.map(post => <Post
        key={'post' + Math.random()}
        profilePic={post.profilePic}
        text={post.text}
        likes={post.likeCounter}
        />)
    const addPostHandler = (data) => {
        props.addPostHandlerContainer(data.post)
    }
    // let inputPostRef = React.createRef()

    return (
        <div className={classes.Posts}>
            <div>
                <PostReduxForm onSubmit={addPostHandler}/>
            </div>
            {postsGenerator}
        </div>
    )
}

const PostReduxForm = reduxForm({form: 'post'})((props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name="post" type="placeholder" component="input"/>
            <button>Post</button>
        </form>
    )
})

export default Posts