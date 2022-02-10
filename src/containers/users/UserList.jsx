import React from "react";
import Card from "../UI/Card";
import styles from "./UserList.module.css";
const UserList = (props) => {
  return (
    <Card className={styles.users}>
      <ul>
        {props.UserData?.map((data) => (
          <div key={data.userName}>
            <li>
              {data.userName} {data.age} years old
            </li>
          </div>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
