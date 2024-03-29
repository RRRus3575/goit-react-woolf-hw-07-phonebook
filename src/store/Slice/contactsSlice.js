import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  deleteApiContact,
  getApiContacts,
  postApiContact,
} from "../../Api/api";

export const getContactsThunk = createAsyncThunk(
  "AllContacts",
  async (_, thunkAPI) => {
    try {
      const data = await getApiContacts();

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const postContactThunk = createAsyncThunk("addContact", async (data) => {
  const obj = await postApiContact(data);

  console.log("obj", obj.data);
  return obj.data;
});
export const addContact = createAsyncThunk("addContactStore", (data) => {
  console.log("addData", data);
  return data;
});

export const deleteContactThunk = createAsyncThunk(
  "deleteContact",
  async (id) => {
    const data = await deleteApiContact(id);
    console.log(data);
    return data;
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

      .addCase(deleteContactThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.contacts = state.contacts.filter((el) => el.id !== payload.id);
      })

      .addCase(postContactThunk.fulfilled, (state, { payload }) => {
        state.contacts = [...state.contacts, payload];
        state.isLoading = false;
      })
      .addMatcher(
        (action) => action.type.endsWith("rejected"),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload.message;
        }
      )
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
