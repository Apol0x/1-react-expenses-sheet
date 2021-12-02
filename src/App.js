import React, { useState } from 'react';
import ExpenseItemContainer from './components/Expenses/ExpenseItemContainer';
import NewExpense from './components/NewExpense/NewExpense';
function App() {
  const EXPENSES_DUMMY = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  const [expenses, setEnteredExpense] = useState(EXPENSES_DUMMY);

  const saveExpenseDataHanlder = (enteredExpenseData) => {
    setEnteredExpense((prevExpense) => {
      console.log("APP.JS saveExpenseDataHanlder", enteredExpenseData,"PREVEXPENSE", prevExpense, "NEW EXPENSE", enteredExpenseData)
      return [enteredExpenseData, ...prevExpense]
    })
  }

  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense onAddExpense={saveExpenseDataHanlder} />
      <ExpenseItemContainer expenses={expenses} />
    </div>
  );
}

export default App;
