import React, { useState } from "react";
import "./App.css";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UsersList.jsx";

const App = () => {
  const [userList, setUserList] = useState([]);
  const addUserHandler = (uName, uAge, uCollege) => {
    setUserList((prevUserList) => {
      return [
        ...prevUserList,
        {
          name: uName,
          age: uAge,
          id: Math.random().toString(),
          collegeName: uCollege,
        },
      ];
    });
  };
  return (
    <React.Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={userList} />
    </React.Fragment>
  );
};

export default App;
