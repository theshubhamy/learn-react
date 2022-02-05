import React, { useState } from "react";
import AddUser from "./components/users/AddUser";
import UserList from "./components/users/UserList";

const App = () => {
  const [userList, setUserList] = useState([]);
  const addUserHandler = (userName, age) => {
    setUserList((initialUserList) => {
      return [...initialUserList, { userName: userName, age: age }];
    });
  };
  return (
    <>
      <AddUser onAddUser={addUserHandler} />
      <UserList UserData={userList} />
    </>
  );
};

export default App;
