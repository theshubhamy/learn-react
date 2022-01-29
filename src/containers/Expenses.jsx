import React from "react";
import ExpenseItem from "../components/expenses/ExpenseItem";

import "./Expenses.css";
const Expenses = (props) => {
  const expense = props.item;
  
  return (
    <>

      <div className="expense">
        <>
          {expense.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))}
        </>
      </div>
    </>
  );
};

export default Expenses;
