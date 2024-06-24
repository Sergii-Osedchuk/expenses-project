import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = ({onAddExpense}) => {
  const saveExpenseDataHandler = (enteredData) => {
    const expenseData = {
      ...enteredData,
      id: Math.random().toString()
    }

    onAddExpense(expenseData);
  }
  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </div>
  )
}

export default NewExpense;