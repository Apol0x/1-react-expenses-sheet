import React, { useState } from 'react';
import ExpensesList from './ExpensesList';
import ExpenseFilter from './ExpenseFilter';
import ExpensesChart from './ExpensesChart';
import './ExpenseItemContainer.css';
const ExpenseItemContainer = (props) => {

    const [year, setFilter] = useState('2021');
    const handleFilterChange = (year) => {
        setFilter(year);
    }
    const expensesFiltered = props.expenses.filter(item => item.date.getFullYear().toString() === year)
    return (
        <div className="expenses">
            <ExpenseFilter selected={year} onSelectFilter={handleFilterChange} />
            <ExpensesChart expenses={expensesFiltered}/>
            <ExpensesList expenses={expensesFiltered}/>
        </div>
    )
};

export default ExpenseItemContainer;