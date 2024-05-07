/* eslint-disable react/prop-types */
// import { useState } from "react";
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

  return (
    <div>
      <form className="flex flex-col w-6/12 m-auto gap-4">
        <input
          value={userName}
          placeholder="Enter UserName"
          className="p-4 rounded-lg border border-black"
          onChange={(e) => {
            setUserName(e.target.value);
            // if (e.target.value === "" || e.target.value.length < "2") {
            //   setUserNameError("UserName is required");
            // }
          }}></input>
        {/* <span className="font-bold text-red-600 mt-4">{userNameError}</span> */}
        <input
          value={email}
          placeholder="Enter Email"
          className="p-4 rounded-lg border border-black"
          onChange={(e) => {
            setEmail(e.target.value);
            // if (e.target.value === "" || e.target.value.includes("@")) {
            //   setEmailError("Email is required");
            // }
          }}></input>
        {/* <span className="font-bold text-red-600 mt-4">{emailError}</span> */}

        <input
          value={role}
          placeholder="Enter Role 'User / Admin'"
          className="p-4 rounded-lg border border-black"
          onChange={(e) => {
            setRole(e.target.value);
            // if (e.target.value === "") {
            //   setRoleError("UserName is required");
            // }
          }}></input>
        <button
          type="submit"
          //   disabled={userNameError || emailError || roleError}
          onClick={(e) => handleSubmit(e)}
          className="border bg-slate-800 text-white p-2 rounded-lg">
          Submit
        </button>
      </form>
    </div>
  );
}

export default UserInputComponent;
