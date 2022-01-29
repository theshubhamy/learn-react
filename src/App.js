import React from "react";
import Expense from "./containers/Expenses";
import NewExpenses from "./components/newExpenses/NewExpenses";
const App = () => {
  const expense = [
    {
      id: "id-1",
      title: "Toilet Paper",
      amount: 98.12,
      date: new Date(2022, 2, 24),
    },
    {
      id: "id-2",
      title: "News Paper",
      amount: 98.12,
      date: new Date(2022, 1, 20),
    },
    {
      id: "id-3",
      title: "car Insurance",
      amount: 980.12,
      date: new Date(2022, 1, 18),
    },
    {
      id: "id-4",
      title: "New Laptop",
      amount: 988.12,
      date: new Date(2022, 1, 16),
    },
    {
      id: "id-5",
      title: "New IPhone",
      amount: 798.12,
      date: new Date(2022, 1, 14),
    },
  ];
  const addExpenseHandler = (expense) => {
    console.log(expense);
  };
  return (
    <>
      <NewExpenses onAddExpense={addExpenseHandler} />
      <Expense item={expense} />
    </>
  );
};

export default App;
