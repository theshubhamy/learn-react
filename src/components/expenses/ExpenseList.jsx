import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";
const ExpenseList = (props) => {
  return (
    <>
      {props.item.length === 0 ? (
        <div className="expenses-list__fallback">No expenses found.</div>
      ) : (
        props.item.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))
      )}
    </>
  );
};

export default ExpenseList;
