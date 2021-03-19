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
    let pages = []
    for (let i = 1; i <= 5; i++) {
        pages.push(<span
            className={`${classes.page} ${i === props.currentPage ? classes.current : null}`}
            onClick={() => props.pageChangeItemsHandler(i)}
            key={i}
        >
                {i}</span>)
    }
    return (
        <div>
            {props.isLoaded ? <div className={classes.pages}>{pages}</div> : null}
            {props.isLoaded ? userGenerator : <Preloader/>}
        </div>
    )
}


export default People