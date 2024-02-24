import React, { useEffect, useState } from "react";
import Card from "../UI/Card.jsx";
import addUserCss from "./AddUser.module.css";
import Button from "../UI/Button.jsx";
import ErrorModal from "../UI/ErrorModal.jsx";
const Adduser = (props) => {
  const [enteredUsername, setUsername] = useState("");
  const [enteredAge, setAge] = useState("");
  const [enteredCollegeName, setCollegeName] = useState("");
  const [error, setError] = useState();
  useEffect(() => {
    if (
      enteredUsername.trim().length === 0 ||
      enteredAge.trim().length === 0 ||
      enteredCollegeName.trim().length === 0
    ) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
    }
  }, [enteredAge, enteredUsername, enteredCollegeName]);
  const addUserHandler = (e) => {
    e.preventDefault();
    props.onAddUser(
      enteredUsername.trim(),
      enteredAge.trim(),
      enteredCollegeName.trim()
    );
    setAge("");
    setCollegeName("");
    setUsername("");
  };
  const errorHandler = () => {
    setError(null);
  };
  const userNameChangeHandler = (e) => {
    setUsername(e.target.value);
  };
  const ageChangeHandler = (e) => {
    setAge(e.target.value);
  };
  const collegeNameChangeHandler = (e) => {
    setCollegeName(e.target.value);
  };

  return (
    <React.Fragment>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={addUserCss.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            onChange={userNameChangeHandler}
            value={enteredUsername}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            onChange={ageChangeHandler}
            value={enteredAge}
          />
          <label htmlFor="collegeName">College Name</label>
          <input
            value={enteredCollegeName}
            id="collegeName"
            type="text"
            onChange={collegeNameChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </React.Fragment>
  );
};

export default Adduser;
