import React from "react";
import Card from "../UI/Card";
import userListCss from "./UsersList.module.css";
const UsersList = (props) => {
  return (
    <Card className={userListCss.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} {user.age} years old
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
