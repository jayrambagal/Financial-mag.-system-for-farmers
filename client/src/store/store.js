import { configureStore } from "@reduxjs/toolkit";
import expenseSlice from "./reducers";
import { apiSlice } from "./apiSlice";

// configuration of store for storing all the data of hole application 
export const store = configureStore({
  reducer: {
    expense: expenseSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
    devTools:false
});
