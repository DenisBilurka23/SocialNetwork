import React from 'react'
import {Redirect} from "react-router";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        isAuthorized: state.AuthReducer.isAuthorized
    }
}
export const withAuthComponent = (Component) => {
    class newComponent extends React.Component {
        render() {
            if (this.props.isAuthorized) return <Component {...this.props}/>
            return <Redirect to="/login"/>
        }
    }
    return connect(mapStateToProps)(newComponent)
}