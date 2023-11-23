import React, { useState } from "react";
import { useUserContext } from "../context/UserContext";
import { DeletePopup } from "./DeletePopup";

const UserList: React.FC = () => {
  const { state, dispatch } = useUserContext();
  const [open, setOpen] = useState(false);
  const [userId, setUserId] = useState<number | null>(null);
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-4">User List</h2>
      <ul>
        {state.users.map((user) => (
          <li
            key={user.id}
            className="mb-2 p-2 bg-gray-100 rounded-md flex justify-between"
          >
            {user.firstName} {user.lastName}{" "}
            <div>
              <button
                onClick={() => {
                  dispatch({ type: "UPDATE_USER", payload: user });
                  dispatch({ type: "SHOW_FORM", payload: true });
                }}
                className="ml-2 bg-blue-500 text-white px-2 py-1 rounded-md hover:bg-blue-700"
              >
                Edit User
              </button>
              <button
                // onClick={() => {
                //   dispatch({ type: "DELETE_USER", payload: user.id });
                // }}
                onClick={() => {
                  setOpen(true);
                  setUserId(user.id);
                }}
                className="ml-2 bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-700"
              >
                Delete
              </button>
            </div>{" "}
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <button
          onClick={() => dispatch({ type: "SHOW_FORM", payload: true })}
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-700"
        >
          Add
        </button>{" "}
      </div>
      <DeletePopup open={open} setOpen={setOpen} userId={userId} />
    </div>
  );
};

export default UserList;
