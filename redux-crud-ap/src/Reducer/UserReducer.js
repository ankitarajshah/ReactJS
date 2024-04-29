import { createSlice } from "@reduxjs/toolkit";

const userList = [
  {
    name: "Ankita Shah",
    email: "ankita@gmail.com",
    id: 1,
  },
  {
    name: "An Shah",
    email: "an@gmail.com",
    id: 2,
  },
  {
    name: "Anki Shah",
    email: "anki@gmail.com",
    id: 3,
  },
];
const userSlice = createSlice({
  name: "users",
  initialState: userList,
  reducers: {
    addUser: (state, action) => {
      console.log("call2");
      console.log(action, "action");
      state.push(action.payload);
      // console.log(action);
    },
    updateUser: (state, action) => {
      const { id, name, email } = action.payload;
      const updatingUser = state.find((user) => user.id === id);
      console.log(updatingUser, "update");
      if (updatingUser) {
        updatingUser.name = name;
        updatingUser.email = email;
      }
    },
    deleteUser: (state, action) => {
      const { id } = action.payload;
      const deletingUser = state.find((user) => user.id === id);
      if (deletingUser) {
        return state.filter((user) => user.id !== id);
      }
    },
  },
});
export const { addUser, deleteUser, updateUser } = userSlice.actions;
export default userSlice.reducer;
