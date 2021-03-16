import React from 'react'
import Posts from "./Posts";
import {addPostActionCreator, changeValueActionCreator} from "../../../Actions/ActionCreators";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        postsState: state.PostReducer.posts,
        inputValueContainer: state.PostReducer.inputValue
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addPostHandlerContainer: (data) => {
            dispatch(addPostActionCreator(data))
        },
        changeValueHandlerContainer: (char) => {
            dispatch(changeValueActionCreator(char))
        }
    }
}
const PostContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)
export default PostContainer