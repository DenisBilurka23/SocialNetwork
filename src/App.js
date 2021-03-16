import './App.scss'
import Navigation from "./components/Navigation/Navigation";
import {Switch, Route} from 'react-router-dom'
import FriendList from "./components/Friends /FriendList";
import MessegesContainer from "./components/Messeges/MessegesContainer";
import PeopleContainer from "./components/People/PeopleContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";

const App = (props) => {
    return (
        <div className="App">
            <HeaderContainer/>
            <div className="content">
                <Navigation/>
                <Switch>
                    <Route path="/profile/:userID" render={() => <ProfileContainer/>}/>
                    <Route path="/messeges" render={() => <MessegesContainer
                        // store={props.store}
                    />}/>
                    <Route path="/friends" render={() => <FriendList
                        // friends={props.state.friends}
                    />}/>
                    <Route path="/people" component={PeopleContainer}/>
                    <Route path="/login" component={Login}/>
                </Switch>
            </div>
        </div>
    )
}

export default App;
