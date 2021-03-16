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
        profileApi.getProfile(this.props.match.params.userID).then(response => {
            this.props.onLoadProfile(response.data)
        })
        profileApi.getStatus(this.props.match.params.userID).then(response => {
            this.props.setStatusAC(response.data)
        })
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
        status: state.ProfileReducer.status
    }
}
// const WithRouterProfileContainer = withRouter(ProfileContainer)
// export default connect(mapStateToProps, {onLoadProfile})(WithRouterProfileContainer)
export default compose(
    connect(mapStateToProps, {onLoadProfile, setStatusAC, putStatusThunkCreator}),
    withRouter
)(ProfileContainer)