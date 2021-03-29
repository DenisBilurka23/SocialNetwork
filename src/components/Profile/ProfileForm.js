import {Field, reduxForm} from "redux-form";
import classes from './Profile.module.scss'

const ProfileForm = (props) => {
    const contactsFormGenerator = Object.keys(props.profile.contacts).map(item => {
            return (
                <div key={item}>
                    <label htmlFor={item}>{`${item}: `}</label>
                    <Field component="input"
                           className={classes.input}
                           id={item} type="text"
                           name={`contacts.${item}`}
                    />
                </div>
            )
        })


    return (
        <div className={classes.ProfileForm}>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <label htmlFor="aboutMe">About me: </label>
                    <Field className={classes.input}
                           component="input" type="input"
                           id="aboutMe"
                           name="aboutMe"
                           defaultValue="default"
                    />
                </div>
                <div>
                    <label htmlFor="lfaj">Looking for a job: </label>
                    <Field component="input"
                           id="lfaj"
                           type="checkbox"
                           name="lookingForAJob"
                    />
                </div>
                <div>
                    <label htmlFor="lfajb">looking for a job description:</label>
                    <Field className={classes.input}
                           component="input" type="input"
                           id="lfajb"
                           name="lookingForAJobDescription"/>
                </div>
                <div>
                    <label htmlFor="fullName">Full name: </label>
                    <Field className={classes.input}
                           component="input"
                           name="fullName"
                           id="fullName"/>
                </div>
                {contactsFormGenerator}
                {props.error && <div className={classes.errorMessege}>{props.error}</div>}
                <button>Save changes</button>
            </form>

        </div>
    )
}

export default reduxForm({form: 'ProfileForm'})(ProfileForm)