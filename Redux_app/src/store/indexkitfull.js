import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import authReducer from "./authSlice";

const storeKit = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
});

export default storeKit;
