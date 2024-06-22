import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from './Card';
import { useState } from 'react';

const ExpenseItem = ({title, date, amount}) => {
  const [expenseTitle, setExpenseTitle] = useState(title);

  const clickHandler = () => {
    setExpenseTitle('Updated!');
  };
  
  return (
    <Card className='expense-item'>
      <ExpenseDate date={date}/>
      <div className='expense-item__description'>
        <h2>{expenseTitle}</h2>
        <div className='expense-item__price'>${amount}</div>
      </div>
      <button onClick={clickHandler}>Change title</button>
    </Card>
  )
}

export default ExpenseItem;