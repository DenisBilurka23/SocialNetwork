import './App.scss'
import Navigation from "./components/Navigation/Navigation";
import {Switch, Route, withRouter} from 'react-router-dom'
import FriendList from "./components/Friends /FriendList";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {Component} from "react";
import {connect} from "react-redux";
import {initializeThunkCreator} from "./Thunk/Thunk";
import {compose} from "redux";
import Preloader from "./components/common/preloader/preloader";
import React, {Suspense} from 'react'
const PeopleContainer = React.lazy(() => import('./components/People/PeopleContainer'))
const MessegesContainer = React.lazy(() => import('./components/Messeges/MessegesContainer'))

class App extends Component {
    componentDidMount() {
        this.props.initializeThunkCreator()
    }

    render() {
        return (
            <div className="App">
                <HeaderContainer/>
                <div className="content">
                    <Navigation/>
                    {!this.props.initialized ? <Preloader/> :
                        <Switch>
                            <Suspense fallback={<Preloader/>}>
                                <Route path="/profile/:userID?" render={() => <ProfileContainer/>}/>
                                <Route path="/messeges" render={() => <MessegesContainer
                                    // store={props.store}
                                />}/>
                                <Route path="/friends" render={() => <FriendList
                                    // friends={props.state.friends}
                                />}/>
                                <Route path="/people" component={PeopleContainer}/>
                                <Route path="/login" component={Login}/>
                            </Suspense>
                        </Switch>
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    initialized: state.AppReducer.initialized
})

export default compose(withRouter,
    connect(mapStateToProps, {initializeThunkCreator}))(App)
