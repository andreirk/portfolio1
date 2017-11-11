import React, { Component } from 'react'
import {Provider} from 'react-redux'
import store from '../redux/index'
import App from './App'

//import {BrowserRouter as Router} from 'react-router-dom'
import {ConnectedRouter as Router} from 'react-router-redux'
import history from '../history'


class Root extends Component {

    render() {
        return (
            <Provider store={store}>
                <Router history = {history}>
                  <App />
                </Router>
            </Provider>
        )
    }
}

export default Root