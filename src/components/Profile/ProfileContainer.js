import React, {Component} from 'react'
import {connect} from "react-redux";
import Profile from "./Profile";
import {onLoadProfile, setStatusAC} from "../../Actions/ActionCreators";
import {withRouter} from "react-router";
import {profileApi} from "../../api/api";
import {compose} from "redux";
import {putStatusThunkCreator, sendFormThunkCreator, updatePhotoThunkCreator} from "../../Thunk/Thunk";

class ProfileContainer extends Component {
    state = {
        editMode: false
    }
    modeChanger = () => this.setState({editMode: !this.state.editMode})
    updateUrl () {
        let id = this.props.match.params.userID
        if (!id) {
            id = this.props.authID
            !id && this.props.history.push('/login')
        }
        profileApi.getProfile(this.props.match.params.userID || this.props.authID)
            .then(response => this.props.onLoadProfile(response.data))
        profileApi.getStatus(this.props.match.params.userID || this.props.authID)
            .then(response => this.props.setStatusAC(response.data))
    }
    componentDidMount() {
        this.updateUrl()

    }
    componentDidUpdate(prevProps) {
        if(prevProps.match.params.userID !== this.props.match.params.userID) {
            this.updateUrl()
        }
    }

    render() {
        return (
            <Profile profile={this.props.profile}
                     status={this.props.status}
                     putStatus={this.props.putStatusThunkCreator}
                     setStatus={this.props.setStatusAC}
                     userID={this.props.match.params.userID}
                     updatePhoto={this.props.updatePhotoThunkCreator}
                     modeChanger={this.modeChanger}
                     editMode={this.state.editMode}
                     updateProfile={this.props.sendFormThunkCreator}
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
    connect(mapStateToProps, {onLoadProfile,
        setStatusAC, putStatusThunkCreator, updatePhotoThunkCreator, sendFormThunkCreator}),
    withRouter
)(ProfileContainer)