import { createSlice } from "@reduxjs/toolkit";
import { userList } from "./Data";
const userSlice = createSlice({
  name: "users",
  initialState: userList,
  reducers: {
    addUser: (state, action) => {
      console.log(action);
      state.push(action.payload);
    },
    updateUser: (state, action) => {
      const { id, fname, lname, email, phone } = action.payload;
      return state.map((user) => {
        if (user.id === id) {
          return {
            ...user,
            fname: fname,
            lname: lname,
            email: email,
            phone: phone,
          };
        }
        return user;
      });
    },
    deleteUser: (state, action) => {
      const { id } = action.payload;
      const deletingUser = state.find((user) => user.id === id);
      if (deletingUser) {
        return state.filter((user) => user.id !== id);
      }
    },

    blockUser: (state, action) => {
      const { id } = action.payload;
      const blockingUser = state.find((user) => user.id === id);
      if (blockingUser) {
        return state.map((user) => {
          if (user.id === id) {
            return { ...user, blocked: true };
          }
          return user;
        });
      }
    },
  },
});
export const { addUser, updateUser, deleteUser, blockUser } = userSlice.actions;
export default userSlice.reducer;
