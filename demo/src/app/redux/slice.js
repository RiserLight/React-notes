
import { createSlice,nanoid ,current} from "@reduxjs/toolkit";

const initialState={
  users:JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
};

const Slice=createSlice({
  name:'User',
  initialState,
  reducers:{
    addUser:(state,action)=>{
      const data={
        id:nanoid(),
        name:action.payload
      }
      state.users.push(data);
      const value=JSON.stringify(current(state.users))
      localStorage.setItem("users",value);
    },
    removeUser:(state,action)=>{
      const arr=[...state.users]
      const data=arr.filter((item)=> item.id !==action.payload);
      state.users=[...data]
      const value=JSON.stringify(data);
      localStorage.removeItem("users",value)
    }
  }
});

export const {addUser,removeUser}=Slice.actions;
export default Slice.reducer;


