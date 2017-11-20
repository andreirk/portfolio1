import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpensesSummary from './ExpensesSummary';
import AddExpensePage from "./AddExpensePage";
import EditExpensePage from "./EditExpensePage";
import {Route, Switch} from "react-router-dom";

const ExpenseDashboardPage = () => (
  <div className="row p-2">

    <div className="col-4 p-2 m-3">
      <Switch>
        <Route exact path="/admin/expensify" component={AddExpensePage} />
        <Route path="/admin/expensify/edit/:id" component={EditExpensePage} />
      </Switch>
    </div>

    <div className="col-6  p-2 m-3">
      <ExpensesSummary />
      <ExpenseListFilters />
      <ExpenseList />
    </div>
  </div>

);

export default ExpenseDashboardPage;
