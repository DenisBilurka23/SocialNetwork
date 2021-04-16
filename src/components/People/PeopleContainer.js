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
import {
    getAllUsers,
    getCurrentPage,
    getDefaultProfilePicture, getIsAuthorizedInfo, getIsFollowLoadedInfo, getIsLoadedInfo,
    getPageSize,
    getUsers
} from "../../Redux/Selectors/Selectors";

class PeopleContainer extends React.Component {
    componentDidMount() {
        this.props.onLoadHandler(false)
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
        window.addEventListener('scroll', this.onScroll)
    }

    loadMoreHandler = () => {
        this.props.onLoadHandler(false)
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }
    onScroll = () => {
        const windowHeight = window.innerHeight
        const currentScroll = window.pageYOffset
        const fullHeight = document.body.offsetHeight
        if (windowHeight + currentScroll >= fullHeight && this.props.isLoaded) {
            this.loadMoreHandler()
        }
    }


    render() {
        return (

            <People
                loadMoreHandler={this.loadMoreHandler}
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
        defaultProfilePicture: getDefaultProfilePicture(state),
        users: getUsers(state),
        currentPage: getCurrentPage(state),
        allUsers: getAllUsers(state),
        pageSize: getPageSize(state),
        isLoaded: getIsLoadedInfo(state),
        isFollowLoaded: getIsFollowLoadedInfo(state),
        isAuthorized: getIsAuthorizedInfo(state)
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
