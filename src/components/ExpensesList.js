import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css';

const ExpensesList = ({ expenses }) => {
  return (
    <div className='expenses'>
      <ul>
        {expenses.map(expense => 
          <li key={expense.key}>
            <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date}/>
          </li>
      )}
      </ul>
    </div>
  )
}

export default ExpensesList;