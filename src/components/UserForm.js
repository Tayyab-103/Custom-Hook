import React from "react";
import useCustomHook from "../hooks/useCustomHook";
import "../components/UserForm.css"

const UserForm = () => {
  const [firstName, bindFirstName, restFirstName] = useCustomHook("");
  const [lastName, bindLastName, restLastName] = useCustomHook("");

  const submitHandler = (e) => {
    e.preventDefault(); //stop refreshing the page
    alert(`Hello ${firstName} ${lastName}`);
    restFirstName();
    restLastName();
  };
  return (
    <div className="container">
      <form className="formm" onSubmit={submitHandler}>
        <div className="formDiv">
          <h1>Custom Hooks</h1>
          <label htmlFor="firstName">First Name: </label>
          <input
            // value={firstName}
            // onChange={(e) => setFirstName(e.target.value)}
            {...bindFirstName}
            type="text"
          />
        </div>
        <div className="formDiv2">
          <label htmlFor="lastName">Last Name: </label>
          <input
            // value={lastName}
            // onChange={(e) => setLastName(e.target.value)}
            {...bindLastName}
            type="text"
          />
        </div>
        <button className="btn">Submit</button>
      </form>
    </div>
  );
};

export default UserForm;
