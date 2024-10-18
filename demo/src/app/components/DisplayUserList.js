"use client";
import { useSelector,useDispatch } from "react-redux";
import {removeUser} from '../redux/slice';

const DisplayUserList = () => {
  const data = useSelector((state) => state.usersData?.users);
  const dispatch=useDispatch();

  const handleRemove=(id)=>{
    dispatch(removeUser(id));
  }
  return (
    <div
      style={{
        boxShadow: "0 0 4px 0 gray",
        padding: "4px 8px",
      }}
    >
      <h1>Display User List</h1>
      <ul>
        {data?.map((item) => (
          <div key={item.id} style={{
            display:"flex",
          }}>
            <li>{item.name}</li>
            <button style={{ marginLeft: 6 }} onClick={(e)=>handleRemove(item.id)}>Remove</button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default DisplayUserList;
