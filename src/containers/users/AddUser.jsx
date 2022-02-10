import React, { useState } from "react";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";

//Ui
import Button from "../UI/Button";
import ErrorModel from "../UI/ErrorModel";

const AddUser = (props) => {
  
  const [userName, setUserName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState(null);

  const addUserHandler = (event) => {
    event.preventDefault();
    if (userName.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "invalid input",
        message: "please enter a valid Name and Age (non-empty values).",
      });
      return;
    }
    if (+age < 1) {
      setError({
        title: "invalid age",
        message: "please enter a valid  Age (age > 0 ).",
      });
      return;
    }
    props.onAddUser(userName, age);
    setAge("");
    setUserName("");
  };

  const nameChangeHandler = (event) => {
    setUserName(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  };
  const errorHandler = () => {
    setError(null);
  };
  return (
    <>
      {error && (
        <ErrorModel
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}></ErrorModel>
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler} className={styles.form}>
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={userName}
              onChange={nameChangeHandler}></input>
          </div>
          <div>
            <label htmlFor="age">Age</label>
            <input
              type="number"
              id="age"
              value={age}
              onChange={ageChangeHandler}></input>
          </div>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
