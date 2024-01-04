import React, { useState } from 'react';
import ExpensesChart from './ExpensesChart'
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  let ExpensesShow=<p>No expense to show</p>
  if(filteredExpenses.length>0&& filteredExpenses.length===1){
    ExpensesShow=filteredExpenses.map((expense)=>(
      <div><ExpenseItem
      key={expense.id}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
      />
      <p>Only single expense here..Please add more!!</p>
      </div>
    ))
  
  }
  if(filteredExpenses.length>1){
    ExpensesShow=filteredExpenses.map((expense)=>(
      <ExpenseItem
      key={expense.id}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
      />
    ))
  }

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter selected={filteredYear} 
        onChangeFilter={filterChangeHandler} />
        {ExpensesShow}
        <ExpensesChart expenses ={filteredExpenses}/>
      </Card>
    </div>
  );
};

export default Expenses;