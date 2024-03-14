import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./reducer";
import { persistStore } from "redux-persist";

export const store = configureStore({
  reducer,
});

export let persistor = persistStore(store);
