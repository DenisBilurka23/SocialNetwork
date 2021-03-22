import React from 'react'
import classes from './People.module.scss'
import Preloader from "../common/preloader/preloader";
import {NavLink} from "react-router-dom";

const People = (props) => {
    const userGenerator = props.users.map((user) => {
        return (
            <div className={classes.People} key={`user + ${Math.random()}`}>
                <NavLink to={'profile/' + user.id}>
                    <div>
                        <img src={user.photos.small || props.defaultProfilePicture} alt="Profile picture"/>
                    </div>
                    <div>
                        {user.name}
                    </div>
                </NavLink>
                <div className={classes.buttonBlock}>
                    {
                        user.followed ?
                            <button disabled={!props.isFollowLoaded} onClick={() => {
                                props.followLoading(true)
                                props.onUnfollow(user.id)
                            }}>Unfollow</button>
                            : <button disabled={!props.isFollowLoaded} onClick={() => {
                                props.followLoading(true)
                                props.onFollow(user.id)
                            }}>Follow</button>}
                </div>
            </div>
        )
    })

    return (
        <div>
            {userGenerator}
            {props.isLoaded ?
                <button
                    onClick={props.loadMoreHandler}
                    className={classes.loadMore}
                >load more</button> : <Preloader/>}
        </div>
    )
}


export default People