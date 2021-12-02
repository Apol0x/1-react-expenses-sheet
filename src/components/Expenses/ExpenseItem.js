import React from 'react';
import ExpenseDate from "./ExpenseDate.js";
import './ExpenseItem.css';
const ExpenseItem = (props) => {
    return (
        <li className="expense-item">
            <ExpenseDate dateItem={props.item.date} />
            <h2>{props.item.title}</h2>
            <div className="expense-item__price">{props.item.amount}</div>
        </li>
    )
};

export default ExpenseItem;