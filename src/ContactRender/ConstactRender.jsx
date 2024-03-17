import { useDispatch, useSelector } from "react-redux";
import css from "./ContactRender.module.css";
// import { deleteContact } from "../store/Slice/contactsSlice";
import { contactsSelector } from "../store/selectors";

import {
  deleteContact,
  deleteContactThunk,
} from "../store/Slice/contactsSlice";

export const ContactRender = () => {
  const contacts = useSelector(contactsSelector);

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteContactThunk(id));
    dispatch(deleteContact(id));
  };

  return (
    <ul>
      {contacts.map((el) => (
        <li key={el.id}>
          {el.name}: {el.number}
          <button
            name={el.id}
            onClick={() => {
              handleDelete(el.id);
            }}
            className={css.delete}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
