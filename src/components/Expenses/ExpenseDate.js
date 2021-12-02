import './ExpenseDate.css';

const ExpenseDate = (props) => {
    const dayFromProps = props.dateItem.toLocaleString('es-ES', { day: '2-digit' });
    const monthFromProps = props.dateItem.toLocaleString('es-ES', { month: 'long' });
    const yearFromProps = props.dateItem.getFullYear();
    return (
        <div className="expense-date">
            <div className="expense-date__month">{monthFromProps}</div>
            <div className="expense-date__year">{yearFromProps}</div>
            <div className="expense-date__day">{dayFromProps}</div>
        </div>
    )
};

export default ExpenseDate;