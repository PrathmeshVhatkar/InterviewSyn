import { useState, useEffect } from "react";
import UserInputComponent from "./UserInputComponent";
import {
  getUserData,
  addUserData,
  editUserData,
  deleteUserData,
} from "../utils/apiFetching";
import UserCard from "./UserCard";

function App() {
  const [userList, setUserList] = useState([]);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [editId, setEditId] = useState(null);
  useEffect(() => {
    async function getUser() {
      const data = await getUserData();
      setUserList([...data]);
    }
    getUser();
  }, []);
  async function handleSubmit(e) {
    e.preventDefault();
    if (editId) {
      await editUserData(editId, { userName, role, email });
    } else {
      await addUserData({ userName, role, email });
    }

    setEditId(null);
    setUserName("");
    setEmail("");
    setRole("");
    setUserList(await getUserData());
  }

  function handleEdit(userInfo) {
    setEditId(userInfo.id);
    setUserName(userInfo.userName);
    setEmail(userInfo.email);
    setRole(userInfo.role);
  }

  async function handleDelete(id) {
    await deleteUserData(id);
    setUserList(await getUserData());
  }
  return (
    <div className="w-full min-h-screen bg-slate-400 flex flex-col items-center">
      <h1 className="font-extrabold text-2xl text-center">User CRUD Ops</h1>
      <div className=" w-full mt-12">
        <UserInputComponent
          email={email}
          setEmail={setEmail}
          role={role}
          setRole={setRole}
          userName={userName}
          setUserName={setUserName}
          handleSubmit={handleSubmit}
        />
      </div>
      <div className="w-full p-4 flex justify-around">
        {userList?.map((user) => {
          return (
            <UserCard
              userInfo={user}
              key={user.id}
              handleEdit={() => handleEdit(user)}
              handleDelete={() => handleDelete(user.id)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
