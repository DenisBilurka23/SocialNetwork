import {Field} from "redux-form";

const LoginForm = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <label htmlFor="login">Login</label>
                    <Field type="text" component="input" name="login" id="login"/>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <Field type="password" component="input" name="password" id="password"/>
                </div>
                <div>
                    <label htmlFor="checkbox">Remember me</label>
                    <Field id="checkbox" value="Remember me" type="checkbox" component="input"/>
                </div>
                <button>Log in</button>
            </form>
        </div>
    )
}
export default LoginForm