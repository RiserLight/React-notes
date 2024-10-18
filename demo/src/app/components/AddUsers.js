"use client";
import { useState } from "react";
import { addUser } from "../redux/slice";
import { useDispatch } from "react-redux";
const AddUsers = () => {
  const [name, setName] = useState("");
  const dispatch=useDispatch();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser(name));
    setName('');
  };
  return (
    <div style={{
      boxShadow:"0 0 4px 0 gray",
      padding:"4px 8px"
    }}>
      <h1>Add User</h1>
      <form
        onSubmit={(e) => handleFormSubmit(e)}
      >
        <input
          placeholder="User Name Item"
          type="text"
          required
          value={name}
          onChange={(e) => setName((prev) => e.target.value)}
          style={{
            padding: "8px 4px",
            fontSize: 16,
            display:"block",
            marginBottom:"1%",
            width:"40%"
          }}
        />
        <button
          style={{
            width: "fit-content",
            padding: "8px 64px",
            fontWeight: 600,
            fontSize: 20,
          }}
          type="submit"
        >
          Add user
        </button>
      </form>
    </div>
  );
};

export default AddUsers;
