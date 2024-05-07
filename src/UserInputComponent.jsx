/* eslint-disable react/prop-types */
import { useState } from "react";

function UserInputComponent(props) {
  const {
    email,
    setEmail,
    userName,
    setUserName,
    role,
    setRole,
    handleSubmit,
  } = props;

  const [userNameError, setUserNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [roleError, setRoleError] = useState("");

  const handleUserNameChange = (e) => {
    const value = e.target.value;
    setUserName(value);
    if (value === "" || value.length < 2) {
      setUserNameError(
        "UserName is required and should be at least 2 characters long"
      );
    } else {
      setUserNameError("");
    }
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    if (value === "" || !value.includes("@")) {
      setEmailError("Email is required and should be a valid email address");
    } else {
      setEmailError("");
    }
  };

  // Function to validate and update Role
  const handleRoleChange = (e) => {
    const value = e.target.value;
    setRole(value);
    if (value === "" || (value !== "User" && value !== "Admin")) {
      setRoleError("Role is required and should be either 'User' or 'Admin'");
    } else {
      setRoleError("");
    }
  };

  return (
    <div>
      <form className="flex flex-col w-6/12 m-auto gap-4">
        <input
          value={userName}
          placeholder="Enter UserName"
          className="p-4 rounded-lg border border-black"
          onChange={handleUserNameChange}
        />
        <span className="font-bold text-red-600 mt-4">{userNameError}</span>

        <input
          value={email}
          placeholder="Enter Email"
          className="p-4 rounded-lg border border-black"
          onChange={handleEmailChange}
        />
        <span className="font-bold text-red-600 mt-4">{emailError}</span>

        <input
          value={role}
          placeholder="Enter Role 'User / Admin'"
          className="p-4 rounded-lg border border-black"
          onChange={handleRoleChange}
        />
        <span className="font-bold text-red-600 mt-4">{roleError}</span>

        <button
          type="submit"
          disabled={userNameError || emailError || roleError}
          onClick={(e) => handleSubmit(e)}
          className="border bg-slate-800 text-white p-2 rounded-lg">
          Submit
        </button>
      </form>
    </div>
  );
}

export default UserInputComponent;
