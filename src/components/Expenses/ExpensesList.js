import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = (props) => {
    const {expenses} = props;
    if(expenses.length === 0){
        return  <h2 className="expenses-list__fallback">No results for that year</h2>
    }
    return (
        <ul className="expenses-list">
            {expenses.map((item, key) => <ExpenseItem item={item} key={key} />)}
        </ul>
    );
};

export default ExpensesList;