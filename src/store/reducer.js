import { contactsSliceReducer } from "./Slice/contactsSlice";
import { filterSliceReducer } from "./Slice/filterSlice";

export const reducer = {
  contacts: contactsSliceReducer,
  filter: filterSliceReducer,
};
