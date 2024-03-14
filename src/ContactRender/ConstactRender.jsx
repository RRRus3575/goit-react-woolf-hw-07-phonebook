import { useDispatch, useSelector } from "react-redux";
import css from "./ContactRender.module.css";
// import { deleteContact } from "../store/Slice/contactsSlice";
import { getContacts, getFilter } from "../store/selectors";
import { deleteContact } from "../Api/api";
import {
  deleteContactThunk,
  getContactsThunk,
} from "../store/Slice/contactsSlice";

export const ContactRender = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    console.log("elID", id);
    dispatch(deleteContactThunk(id));
    setTimeout(() => {
      dispatch(getContactsThunk());
    }, 1000);
  };

  const contactFilter = () => {
    const cont = contacts.filter((el) =>
      el.name.toLowerCase().includes(filter.toLowerCase())
    );
    return cont;
  };

  return contactFilter().map((el) => (
    <li key={el.id}>
      {el.name}: {el.number}
      <button
        name={el.id}
        onClick={(e) => {
          handleDelete(el.id);
        }}
        className={css.delete}
      >
        Delete
      </button>
    </li>
  ));
};
