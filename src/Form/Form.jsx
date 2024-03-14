import { useEffect, useState } from "react";
import css from "./Form.module.css";

import { useDispatch, useSelector } from "react-redux";
// import { createContact } from "../store/Slice/contactsSlice";
import { nanoid } from "@reduxjs/toolkit";
import { getContacts } from "../store/selectors";
import {
  getContactsThunk,
  postContactThunk,
} from "../store/Slice/contactsSlice";

export const Form = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeNumber = (e) => {
    setNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (contacts.find((el) => el.name.toLowerCase() === name.toLowerCase())) {
      alert(`${name} is alredy in contacts`);
      return;
    }
    dispatch(
      postContactThunk({
        name: name,
        number: number,
        // id: nanoid(),
      })
    );

    e.target.reset();

    dispatch(getContactsThunk());
  };

  // useEffect(() => {
  //   dispatch(getContactsThunk());
  // }, [name]);

  const { form, submit } = css;
  return (
    <form onSubmit={handleSubmit} autoComplete="off" className={form}>
      <input
        onChange={handleChangeName}
        type={"text"}
        name={"name"}
        label={"Name"}
        required
      />
      <input
        onChange={handleChangeNumber}
        type={"tel"}
        name={"number"}
        label={"Number"}
        required
      />
      <button type="submit" className={submit}>
        Add contact
      </button>
    </form>
  );
};
