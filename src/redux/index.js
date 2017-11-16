import {createStore, applyMiddleware} from 'redux'
import {routerMiddleware} from 'react-router-redux'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import reducer from './reducer'
import saga from './saga'
import history from '../history'
import posts from "../components/apps/Clonstagram2/data/posts";
import comments from "../components/apps/Clonstagram2/data/comments";

const sagaMiddleware = createSagaMiddleware()

const enhancer = applyMiddleware(routerMiddleware(history), sagaMiddleware, logger)


// create an object for the default data
const defaultState = {
  posts,
  comments
};

const initState = {
  clonstagram: defaultState
}

const store = createStore(reducer, initState, enhancer)

sagaMiddleware.run(saga)

window.store = store

export default store