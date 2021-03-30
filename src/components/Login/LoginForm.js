import {Field} from "redux-form";
import {Input, InputPassword, InputValidate} from "../common/Input/Input";
import {maxLength, required} from "../../validation/validation";
import classes from './Login.module.scss'

// const Inpt = InputValidate(() => <input type="password"/>)
const maxLength15 = maxLength(25)
const LoginForm = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <label htmlFor="email">Email</label>
                    <Field validate={[required, maxLength15]} component={Input} name="email"/>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <Field validate={[required, maxLength15]} component={InputPassword} name="password"/>
                </div>
                {props.error && <div className={classes.errorMessege}>{props.error}</div>}
                <div>
                    <label htmlFor="checkbox">Remember me</label>
                    <Field name="rememberMe" id="checkbox" value="Remember me" type="checkbox" component="input"/>
                </div>
                {props.captchaUrl &&
                <div>
                    <img src={props.captchaUrl.url} alt="captcha"/>
                    <div><Field name="captcha" component="input" type="text"/></div>
                </div>}

                <button>Log in</button>
            </form>

        </div>
    )
}
export default LoginForm