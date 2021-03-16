import reportWebVitals from './reportWebVitals'
import {BrowserRouter} from "react-router-dom"
import App from "./App"
import ReactDOM from 'react-dom'
import store from "./Redux/ReduxStore"
import {Provider} from "react-redux";
import './index.css'


const Render = () => {
    const app = (
        <BrowserRouter>
            <Provider store={store}>
                <App
                    // store={store}
                    // state={store.getState()}
                    // dispatch={store.dispatch.bind(store)}
                    // addPost={store.addPost.bind(store)}
                    // changeValue={store.changeValue.bind(store)}
                    // sendMessage={store.sendMessage.bind(store)}
                    // changeMessageValue={store.changeMessageValue.bind(store)}
                />
            </Provider>
        </BrowserRouter>
    )
    ReactDOM.render(app, document.getElementById('root'))
}
Render(store.getState())


reportWebVitals();
