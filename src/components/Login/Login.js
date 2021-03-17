import {reduxForm} from "redux-form";
import LoginForm from "./LoginForm";
import {connect} from "react-redux";
import {loginThunkCreator} from "../../Thunk/Thunk"
import {Redirect} from "react-router";

const LoginFormContainer = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmitHandler = (payload) => {
        props.loginThunkCreator(payload.email, payload.password, payload.rememberMe)
    }

    return (
        <div>
            { props.isAuthorized ? <Redirect to="/profile"/> :null}
                <h1>Login</h1>
                <LoginFormContainer onSubmit={onSubmitHandler}/>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        isAuthorized: state.AuthReducer.isAuthorized
    }
}
export default connect(mapStateToProps, {loginThunkCreator})(Login)