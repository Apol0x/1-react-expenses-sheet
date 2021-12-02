import React, { useState } from 'react';
import './NewExpense.css';
import NewExpenseForm from './NewExpenseForm.js';
import './NewExpenseForm.css';

const NewExpense = (props) => {
    const [toggleFormState, setToggleForm] = useState(false);

    const saveExpenseDataHanlder = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
    }
    const toggleFormNewExpense = () => {
        setToggleForm(state => !state)

    }
    return (
        <div className="new-expense">
            <button type="button" onClick={toggleFormNewExpense} className={toggleFormState ?  'new-expense__control hide' : 'new-expense__control'}>Add New Expense</button>
            {
                toggleFormState ?
                <NewExpenseForm onToggleForm={toggleFormNewExpense} onSaveExpenseData={saveExpenseDataHanlder} />
                : null
            }
        </div>
    );
};

export default NewExpense;