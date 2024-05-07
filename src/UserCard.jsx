/* eslint-disable react/prop-types */

function UserCard({ userInfo, handleDelete, handleEdit }) {
  const { userName, role, email } = userInfo;
  return (
    <div className="lg:w-[23%] md:w-[48%] max-sm:w-full border border-black rounded-lg p-4 flex-wrap ">
      <div>
        UserName : <span className="font-bold">{userName.toLowerCase()}</span>
      </div>
      <div>
        Email : <span className="font-bold"> {email.toLowerCase()}</span>
      </div>
      <div>
        role: <span className="font-bold">{role.toLowerCase()}</span>
      </div>
      <div className="w-full flex flex-wrap justify-between items-center">
        <button
          onClick={handleEdit}
          className="border border-black p-2 rounded-sm">
          Edit
        </button>
        <button
          onClick={handleDelete}
          className="border border-black p-2 rounded-sm">
          {" "}
          Delete
        </button>
      </div>
    </div>
  );
}

export default UserCard;
