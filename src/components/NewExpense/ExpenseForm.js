import './ExpenseForm.css';
import { useState } from 'react';

const ExpenseForm = ({onSaveExpenseData}) => {
  const [ enteredTitle, setEnteredTitle ] = useState('');
  const [ enteredAmount, setEnteredAmount ] = useState('');
  const [ enteredDate, setEnteredDate ] = useState('');

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  }

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  }

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  }

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate)
    }

    onSaveExpenseData(expenseData);

    setEnteredAmount('');
    setEnteredDate('');
    setEnteredTitle('');
  }

  return <form onSubmit={submitHandler}>
    <div className='new-expense__controls'>
      <div className='new-expense__control'>
        <label>Title</label>
        <input 
          type='text' 
          onChange={titleChangeHandler} 
          value={enteredTitle}
        ></input>
      </div>
      <div className='new-expense__control'>
        <label>Amount</label>
        <input 
          onChange={amountChangeHandler} 
          type='number' 
          min='0.1' 
          step='0.1' 
          value={enteredAmount}
        ></input>
      </div>
      <div className='new-expense__control'>
        <label>Date</label>
        <input 
          onChange={dateChangeHandler} 
          type='date' 
          min='2019-01-01' 
          max='2024-12-31' 
          value={enteredDate}
        ></input>
      </div>
    </div>
    <div className='new-expense__actions'>
      <button type='submit'>Add expense</button>
    </div>
  </form>
}

export default ExpenseForm;