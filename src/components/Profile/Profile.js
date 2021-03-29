import React from 'react'
import classes from './Profile.module.scss'
import PostsContainer from "./Posts/PostsContainer";
import Preloader from "../common/preloader/preloader";
import StatusHooks from "./StatusHooks";
import ProfileForm from "./ProfileForm";

const Profile = (props) => {
    const profilePictureChanger = (event) => {
        if (event.target.files[0]) {
            props.updatePhoto(event.target.files[0])
        }
    }
    const sendFormHandler = (data) => {
        props.updateProfile(data).then(() => props.modeChanger())
    }
    if (props.profile) {
        const contactKeys = props.profile.contacts && Object.keys(props.profile.contacts)
        const renderContacts = props.profile.contacts && contactKeys.map(item => {
                return (
                    props.profile.contacts[item] ? <div>
                        {`${item}: ${props.profile.contacts[item]}`}
                    </div> : null
                )
            }
        )
        return (

            <div className={classes.Main}>
                {!props.editMode ?
                    <div onDoubleClick={props.modeChanger} className={classes.Profile}>
                        <div className={classes.profileHeader}>
                            <div className={classes.image}>
                                {props.profile.photos.large ? <img src={props.profile.photos.large} alt="img"/>
                                    : <img
                                        src="https://st.depositphotos.com/2101611/3925/v/600/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg"
                                        alt="profile picture"/>}
                            </div>
                            <div className={classes.fullName}>
                                {props.profile.fullName}
                            </div>
                        </div>
                        <div className={classes.bio}>
                            {!props.userID ? <input type="file" onChange={profilePictureChanger}/> : null}
                            <StatusHooks setStatus={props.setStatus} putStatus={props.putStatus} status={props.status}/>
                            <div
                                className={classes.aboutMe}>{props.profile.aboutMe ? props.profile.aboutMe : null}</div>
                            {renderContacts}
                        </div>
                    </div> : <ProfileForm initialValues={props.profile}
                                          profile={props.profile}
                                          onSubmit={sendFormHandler}
                    />}
                <PostsContainer profile={props.profile}/>
            </div>
        )
    } else
        return (<Preloader/>)

}
export default Profile