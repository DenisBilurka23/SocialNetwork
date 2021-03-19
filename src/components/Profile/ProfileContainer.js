import React, {Component} from 'react'
import {connect} from "react-redux";
import Profile from "./Profile";
import {onLoadProfile, setStatusAC} from "../../Actions/ActionCreators";
import {withRouter} from "react-router";
import {profileApi} from "../../api/api";
import {compose} from "redux";
import {putStatusThunkCreator} from "../../Thunk/Thunk";

class ProfileContainer extends Component {

    componentDidMount() {
        let id = this.props.match.params.userID
        if (!id) {
            id = this.props.authID
            !id && this.props.history.push('/login')
        }
        console.log('this.props',this.props)
        profileApi.getProfile(this.props.match.params.userID || this.props.authID)
            .then(response => this.props.onLoadProfile(response.data))
        profileApi.getStatus(this.props.match.params.userID || this.props.authID)
            .then(response => this.props.setStatusAC(response.data))
    }
    render() {
        return (
            <Profile profile={this.props.profile}
                     status={this.props.status}
                     putStatus={this.props.putStatusThunkCreator}
                     setStatus={this.props.setStatusAC}
            />
        )
    }

}

const mapStateToProps = (state) => {
    return {
        profile: state.ProfileReducer.profile,
        status: state.ProfileReducer.status,
        authID: state.AuthReducer.id
    }
}
// const WithRouterProfileContainer = withRouter(ProfileContainer)
// export default connect(mapStateToProps, {onLoadProfile})(WithRouterProfileContainer)
export default compose(
    connect(mapStateToProps, {onLoadProfile, setStatusAC, putStatusThunkCreator}),
    withRouter
)(ProfileContainer)