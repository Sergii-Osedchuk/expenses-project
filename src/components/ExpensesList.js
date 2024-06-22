import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import './ExpensesList.css';

const ExpensesList = ({ expenses }) => {
  return (
    <Card className='expenses'>
      <ul>
        {expenses.map(expense => 
          <li key={expense.key}>
            <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date}/>
          </li>
      )}
      </ul>
    </Card>
  )
}

export default ExpensesList;