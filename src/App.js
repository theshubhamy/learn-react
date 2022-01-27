import React from "react";
import ExpenseItem from "./containers/ExpenseItem";
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
  return (
    <div className="app">
      <h1 className="expense-heading">Expense Traker</h1>
      <ExpenseItem
        title={expense[0].title}
        amount={expense[0].amount}
        date={expense[0].date}
      />
      <ExpenseItem
        title={expense[1].title}
        amount={expense[1].amount}
        date={expense[1].date}
      />
      <ExpenseItem
        title={expense[2].title}
        amount={expense[2].amount}
        date={expense[2].date}
      />
      <ExpenseItem
        title={expense[3].title}
        amount={expense[3].amount}
        date={expense[3].date}
      />
      <ExpenseItem
        title={expense[4].title}
        amount={expense[4].amount}
        date={expense[4].date}
      />
    </div>
  );
};

export default App;
