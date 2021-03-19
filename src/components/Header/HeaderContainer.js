import React, {Component} from 'react'
import Header from "./Header";
import {connect} from "react-redux";
import {authorizingThunkCreator, logoutThunkCreator} from "../../Thunk/Thunk";

class HeaderContainer extends Component {
    render() {
        return (
            <Header logoutThunkCreator={this.props.logoutThunkCreator}
                    login={this.props.login}
                    isAuthorized={this.props.isAuthorized}/>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        isAuthorized: state.AuthReducer.isAuthorized,
        login: state.AuthReducer.login
    }
}



export default connect(mapStateToProps, {authorizingThunkCreator, logoutThunkCreator})(HeaderContainer)