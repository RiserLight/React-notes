
import { createSlice,nanoid ,current , createAsyncThunk} from "@reduxjs/toolkit";

const initialState={
  userAPIData: [],
  users:JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
};

// first argument is the name of action
export const fetchApiUsers=createAsyncThunk("fetchApiUsers",async()=>{
  const result=await fetch('https://jsonplaceholder.typicode.com/users');
  return await result.json();
 
});

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
  },
  extraReducers: (builder) => {
    builder.addCase(fetchApiUsers.fulfilled, (state, action) => {
        state.userAPIData = action.payload
    })

}
});

export const {addUser,removeUser}=Slice.actions;
export default Slice.reducer;


