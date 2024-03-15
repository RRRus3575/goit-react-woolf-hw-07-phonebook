import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { deleteContact, getContacts, postContact } from "../../Api/api";

export const getContactsThunk = createAsyncThunk("AllContacts", async () => {
  const data = await getContacts();
  console.log("get", data);
  return data;
});
export const postContactThunk = createAsyncThunk("addContact", async (data) => {
  postContact(data);
});

export const deleteContactThunk = createAsyncThunk(
  "deleteContact",
  async (id) => {
    deleteContact(id);
  }
);

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    contacts: [],
    isLoading: false,
    error: "",
  },
  extraReducers: (builder) => {
    builder

      .addCase(getContactsThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.contacts = payload;
      })
      .addCase(getContactsThunk.rejected, (state, { error }) => {
        state.isLoading = false;
        state.error = error;
      })
      .addMatcher(
        (action) => action.type.endsWith("pending"),
        (state) => {
          state.isLoading = true;
          state.error = "";
        }
      );
  },
});

export const contactsSliceReducer = contactsSlice.reducer;
