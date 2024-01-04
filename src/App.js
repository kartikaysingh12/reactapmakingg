import React, { useState } from 'react';

import NewExpense from './component/NewExpense/NewExpense';
import Expenses from './component/Expenses/Expenses';

const ExpensesAre = [
  {
    id: 'e1',
    title: 'News Paper',
    amount: 100,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2',
   title: 'Iphone', amount: 800, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 223,
    date: new Date(2021, 2, 28),
  },
];

const App = () => {
  const [expenses,setExpenses]= useState(ExpensesAre);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses)=>{
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;