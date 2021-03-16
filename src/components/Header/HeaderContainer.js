import React, {Component} from 'react'
import Header from "./Header";
import {connect} from "react-redux";
import {authorizingAC} from "../../Actions/ActionCreators";
import {authorization} from "../../api/api";

class HeaderContainer extends Component {
    componentDidMount() {
        authorization.me().then(data => {
            if (data.resultCode === 0)  this.props.authorizingAC(data)
        })
    }

    render() {
        return (
            <Header login={this.props.login} isAuthorized={this.props.isAuthorized}/>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        isAuthorized: state.AuthReducer.isAuthorized,
        login: state.AuthReducer.login
    }
}



export default connect(mapStateToProps, {authorizingAC})(HeaderContainer)