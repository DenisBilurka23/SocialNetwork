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
import {stateType} from "../../Redux/ReduxStore";
import {usersType} from "../../Types/Types";

type PeopleContainerType = mapStateType & mapDispatchType
type mapStateType = {
    currentPage: number
    pageSize: number
    isLoaded: boolean
    defaultProfilePicture: string
    users: Array<usersType>
    isFollowLoaded: boolean
    isAuthorized: any
}
type mapDispatchType = {
    onLoadHandler: (isLoaded: boolean) => any
    onFollow: (id: number) => void
    onUnfollow: (id: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
    followLoading: (isFollowLoaded: boolean) => void
}

class PeopleContainer extends React.Component<PeopleContainerType> {
    componentDidMount() {
        this.props.onLoadHandler(false)
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
        window.addEventListener('scroll', this.onScroll)
    }

    loadMoreHandler = () => {
        this.props.onLoadHandler(false)
        const {currentPage, pageSize} = this.props
        this.props.getUsers(currentPage, pageSize)
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
                defaultProfilePicture={this.props.defaultProfilePicture}
                users={this.props.users}
                isLoaded={this.props.isLoaded}
                followLoading={this.props.followLoading}
                isFollowLoaded={this.props.isFollowLoaded}
                onFollow={this.props.onFollow}
                onUnfollow={this.props.onUnfollow}
            />

        )
    }
}

const mapStateToProps = (state: stateType): mapStateType => {
    return {
        defaultProfilePicture: getDefaultProfilePicture(state),
        users: getUsers(state),
        currentPage: getCurrentPage(state),
        pageSize: getPageSize(state),
        isLoaded: getIsLoadedInfo(state),
        isFollowLoaded: getIsFollowLoadedInfo(state),
        isAuthorized: getIsAuthorizedInfo(state)
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        onLoadHandler: (isLoaded:boolean) => {
            dispatch(onLoadActionCreator(isLoaded))
        },
        followLoading: (isFollowLoaded:boolean) => {
            dispatch(FollowLoadingAC(isFollowLoaded))
        },
        getUsers: (currentPage:number, pageSize:number) => {
            dispatch(getUsersThunkCreator(currentPage, pageSize))
        },
        onFollow: (id:number) => {
            dispatch(onFollowThunkCreator(id))
        },
        onUnfollow: (id:number) => {
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
