import React from 'react'
import People from "./People"
import {
    FollowLoadingAC,
    followToggleActionCreator,
    onLoadActionCreator, pageChangerActionCreator, totalCountActionCreator
} from "../../Actions/ActionCreators"
import {connect} from "react-redux"
import {getUsersThunkCreator, onFollowThunkCreator, onUnfollowThunkCreator} from "../../Thunk/Thunk";
import {withAuthComponent} from "../../hoc/AuthHOC";
import {compose} from "redux";

class PeopleContainer extends React.Component {
    componentDidMount() {
        this.props.onLoadHandler(false)
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    pageChangeItemsHandler = (page) => {
        this.props.onLoadHandler(false)
        this.props.getUsers(page, this.props.pageSize)
        this.props.pageChangerHandler(page)
    }

    render() {
        return (
            <People
                pageChangeItemsHandler={this.pageChangeItemsHandler}
                currentPage={this.props.currentPage}
                defaultProfilePicture={this.props.defaultProfilePicture}
                users={this.props.users}
                FollowHandler={this.props.FollowHandler}
                isLoaded={this.props.isLoaded}
                followLoading={this.props.followLoading}
                isFollowLoaded={this.props.isFollowLoaded}
                onFollow={this.props.onFollow}
                onUnfollow={this.props.onUnfollow}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        defaultProfilePicture: state.PeopleReducer.defaultProfilePicture,
        users: state.PeopleReducer.users,
        currentPage: state.PeopleReducer.currentPage,
        allUsers: state.PeopleReducer.allUsers,
        pageNumbers: state.PeopleReducer.allUsers / state.PeopleReducer.pageSize,
        pageSize: state.PeopleReducer.pageSize,
        isLoaded: state.PeopleReducer.isLoaded,
        isFollowLoaded: state.PeopleReducer.isFollowLoaded,
        isAuthorized: state.AuthReducer.isAuthorized
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        FollowHandler: (id) => {
            dispatch(followToggleActionCreator(id))
        },
        setUserNumberHandler: (users) => {
            dispatch(totalCountActionCreator(users))
        },
        pageChangerHandler: (page) => {
            dispatch(pageChangerActionCreator(page))
        },
        onLoadHandler: (isLoaded) => {
            dispatch(onLoadActionCreator(isLoaded))
        },
        followLoading: (isFollowLoaded) => {
            dispatch(FollowLoadingAC(isFollowLoaded))
        },
        getUsers: (currentPage, pageSize) => {
            dispatch(getUsersThunkCreator(currentPage, pageSize))
        },
        onFollow: (id) => {
            dispatch(onFollowThunkCreator(id))
        },
        onUnfollow: (id) => {
            dispatch(onUnfollowThunkCreator(id))
        }
    }
}
// let AuthComponent = withAuthComponent(PeopleContainer)


//     = (props) => {
//     console.log(props.isAuthorized)
//     if (props.isAuthorized) return <PeopleContainer {...props}/>
//         return <Redirect to="/login"/>
// }

export default compose(
    withAuthComponent,
    connect(mapStateToProps, mapDispatchToProps)
)(PeopleContainer)
