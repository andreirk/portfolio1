import {combineReducers} from 'redux'
import {routerReducer as router} from 'react-router-redux'
import {reducer as form} from 'redux-form'
import authReducer, {moduleName as authModule} from './ducks/auth'
import peopleReducer, {moduleName as peopleModule} from './ducks/people'
import eventsReducer, {moduleName as eventModule} from './ducks/events'
import phonesReducer, {moduleName as phoneModule} from './ducks/phones'
// import the root reducer

import clonstagram from "../components/apps/Clonstagram2/reducers/index";
import {expensifyCombinedReducer as expensify} from "../components/apps/Expensify/store/configureStore";



export default combineReducers({
    router, form,
    clonstagram ,
    expensify,
    [authModule]: authReducer,
    [peopleModule]: peopleReducer,
    [eventModule]: eventsReducer,
    [phoneModule]: phonesReducer,
})