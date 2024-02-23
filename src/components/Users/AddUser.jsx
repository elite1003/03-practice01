import React, { useRef, useState } from "react";
import Card from "../UI/Card.jsx";
import addUserCss from "./AddUser.module.css";
import Button from "../UI/Button.jsx";
import ErrorModal from "../UI/ErrorModal.jsx";
const Adduser = (props) => {
  const inputAgeRef = useRef();
  const inputUserNameRef = useRef();
  const inputCollegeNameRef = useRef();
  const [error, setError] = useState();
  const addUserHandler = (e) => {
    const enteredUsername = inputUserNameRef.current.value;
    const enteredAge = inputAgeRef.current.value;
    const enteredCollegeName = inputCollegeNameRef.current.value;
    e.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
    }
    props.onAddUser(
      enteredUsername.trim(),
      enteredAge.trim(),
      enteredCollegeName.trim()
    );
    inputAgeRef.current.value = "";
    inputCollegeNameRef.current.value = "";
    inputUserNameRef.current.value = "";
  };
  const errorHandler = () => {
    setError(null);
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
          <input id="username" type="text" ref={inputUserNameRef} />
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" ref={inputAgeRef} />
          <label htmlFor="collegeName">College Name</label>
          <input id="collegeName" type="text" ref={inputCollegeNameRef} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </React.Fragment>
  );
};

export default Adduser;
