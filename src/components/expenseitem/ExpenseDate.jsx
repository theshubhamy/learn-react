import React from "react";
import "./ExpenseDate.css";

const ExpenseDate = (props) => {
  const month = props.date.toLocaleString("en-IN", { month: "long" });
  const day = props.date.toLocaleString("en-IN", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <>
      <div className="expense-date">
        <div clasName="expense-date-month">{month}</div>
        <div clasName="expense-date-day">{day}</div>
        <div clasName="expense-date-year">{year}</div>
      </div>
    </>
  );
};

export default ExpenseDate;
