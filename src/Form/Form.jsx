import { useState } from "react";
import css from "./Form.module.css";

import { useDispatch, useSelector } from "react-redux";
import { getContacts } from "../store/selectors";
import {
  addContact,
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
      })
    );
    dispatch(
      addContact({
        name: name,
        number: number,
      })
    );

    e.target.reset();
  };

  const { form, submit } = css;
  return (
    <form onSubmit={handleSubmit} autoComplete="off" className={form}>
      <label>
        Name
        <input
          id="name"
          onChange={handleChangeName}
          type={"text"}
          name={"name"}
          label={"Name"}
          required
        />
      </label>
      <label>
        Number
        <input
          onChange={handleChangeNumber}
          type={"tel"}
          name={"number"}
          label={"Number"}
          required
        />
      </label>

      <button type="submit" className={submit}>
        Add contact
      </button>
    </form>
  );
};
