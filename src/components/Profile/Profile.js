import React from 'react'
import classes from './Profile.module.scss'
import PostsContainer from "./Posts/PostsContainer";
import Preloader from "../common/preloader/preloader";
import Status from "./Status";
import StatusHooks from "./StatusHooks";

const Profile = (props) => {
    if (props.profile) {
        const contactKeys = Object.keys(props.profile.contacts)
        const renderContacts = contactKeys.map(item => {
                return (
                    props.profile.contacts[item] ? <div>
                        {`${item}: ${props.profile.contacts[item]}`}
                    </div> : null
                )
            }
        )
        // const contacts = []
        // for(let key in props.profile.contacts) {
        //     contacts.push((<div>{props.profile.contacts[key]}</div>))
        // }

        return (
            <div className={classes.Main}>
                <div className={classes.Profile}>
                    <div className={classes.profileHeader}>
                        <div className={classes.image}>
                            {props.profile.photos.large ? <img src={ props.profile.photos.large } alt="img"/> : null}
                        </div>
                        <div className={classes.fullName}>
                            {props.profile.fullName}
                        </div>
                    </div>
                    <div className={classes.bio}>
                        <StatusHooks setStatus={props.setStatus} putStatus={props.putStatus} status={props.status}/>
                        <div className={classes.aboutMe}>{props.profile.aboutMe ? props.profile.aboutMe : null}</div>
                        {renderContacts}
                    </div>
                </div>
                <PostsContainer/>
            </div>
        )
    } else
        return (<Preloader/>)

}
export default Profile