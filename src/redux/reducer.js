import {combineReducers} from 'redux'
import {routerReducer as router} from 'react-router-redux'
import {reducer as form} from 'redux-form'
import authReducer, {moduleName as authModule} from '../ducks/auth'
import peopleReducer, {moduleName as peopleModule} from '../ducks/people'
import eventsReducer, {moduleName as eventModule} from '../ducks/events'
// import the root reducer

import clonstagram from "../components/apps/Clonstagram2/reducers/index";



export default combineReducers({
    router, form,
    clonstagram ,
    [authModule]: authReducer,
    [peopleModule]: peopleReducer,
    [eventModule]: eventsReducer
})