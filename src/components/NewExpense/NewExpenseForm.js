import React, { useState } from 'react';
import './NewExpenseForm.css';

const NewExpenseForm = (props) => {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1
    const year = date.getFullYear()
    const dateFormat = year + "-" + month + "-" + day

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    /* const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    }) */
    const handleChangeTitle = (event) => {
        setEnteredTitle(event.target.value)
        /* setUserInput({
            ...userInput,
            enteredTitle: event.target.value
        }) */
        /* setUserInput((prevState)=>{
            return {...prevState, enteredTitle: event.target.value}
        }) */
    }
    const handleChangeAmount = (event) => {
        setEnteredAmount(event.target.value)
        /* setUserInput({
            ...userInput,
            enteredAmount: event.target.value
        }) */
        /* setUserInput((prevState)=>{
            return {...prevState, enteredTitle: event.target.value}
        }) */
    }
    const handleChangeDate = (event) => {
        setEnteredDate(event.target.value)
        /* setUserInput({
            ...userInput,
            enteredDate: event.target.value
        }) */
        /* setUserInput((prevState)=>{
            return {...prevState, enteredTitle: event.target.value}
        }) */
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        }

        props.onSaveExpenseData(expenseData)
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
        props.onToggleForm()
    }


    return (
        <form onSubmit={handleSubmit}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={handleChangeTitle}></input>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.1" value={enteredAmount} onChange={handleChangeAmount}></input>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min={dateFormat} value={enteredDate} placeholder="dd-mm-yyyy" onChange={handleChangeDate}></input>
                </div>
                <button type="button" onClick={props.onToggleForm}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};

export default NewExpenseForm;