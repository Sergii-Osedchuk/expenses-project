import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import './ExpensesList.css';
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

const ExpensesList = ({ expenses }) => {
  const [chosenYear, setChosenYear] = useState('2020');

  const updateYear = (year) => {
    setChosenYear(year);
  }

  const filteredExpenses = expenses.filter(expense => {
    return expense.date.getFullYear().toString() === chosenYear;
  })

  return (
    <div>
      <Card className='expenses'>
      <ExpensesFilter chooseYear={updateYear} selected = {chosenYear}/>
        <ul>
          {filteredExpenses.length === 0 ? (<p>There are no expenses this year!</p>) : filteredExpenses.map(expense => 
           <li key={expense.id}>
              <ExpenseItem 
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
              />
            </li>)}
        </ul>
      </Card>
    </div>
    
  )
}

export default ExpensesList;