import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';
import {createSelector} from "reselect";

export const ExpenseList = (props) => (
  <div className="content-container">
    <div className="list-header">
      <div className="show-for-mobal">Expenses</div>
      <div className="show-for-desktop">Expense</div>
      <div className="show-for-desktop">Amount</div>
    </div>
<div className="list-body">    {
      props.expenses.length === 0 ? (
        <div className="list-item list-item--message">No expenses</div>
      ) : (
          props.expenses.map((expense) => {
            return <ExpenseListItem key={expense.id} {...expense} />;
          })
        )
    }</div>
  </div>
);

const expenseState = (state) => state.expensify
const expenseSelector = createSelector(expenseState, selectExpenses )

const mapStateToProps = (state) => {
  return {
    expenses: expenseSelector(state)
  };
};

export default connect(mapStateToProps)(ExpenseList);
