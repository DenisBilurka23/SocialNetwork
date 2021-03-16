import {reduxForm} from "redux-form";
import LoginForm from "./LoginForm";
import {connect} from "react-redux";

const LoginFormContainer = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmitHandler = (data) => {
        console.log(data)
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginFormContainer onSubmit={onSubmitHandler}/>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {

        state: state.form
    }
}
export default connect(mapStateToProps)(Login)