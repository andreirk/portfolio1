import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';
import authReducer from '../reducers/auth';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const expensifyCombinedReducer = combineReducers({
                                        expenses: expensesReducer,
                                        filters: filtersReducer,
                                      })

export default () => {
  const store = createStore(
      expensifyCombinedReducer,
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
