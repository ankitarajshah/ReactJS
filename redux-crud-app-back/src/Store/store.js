import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../Reducer/UserReducer";
const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});
export default store;
