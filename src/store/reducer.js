import { contactsSliceReducer } from "./Slice/contactsSlice";
import { filterSliceReducer } from "./Slice/filterSlice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "contacts",
  storage,
};

const persistedReducer = persistReducer(persistConfig, contactsSliceReducer);

export const reducer = {
  contacts: persistedReducer,
  filter: filterSliceReducer,
};
