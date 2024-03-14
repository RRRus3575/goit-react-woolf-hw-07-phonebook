import { useDispatch, useSelector } from "react-redux";
import css from "./ContactRender.module.css";
import { deleteContact } from "../store/Slice/contactsSlice";
import { getContacts, getFilter } from "../store/selectors";

export const ContactRender = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  const handleDelete = (nameEl) => {
    dispatch(deleteContact(nameEl));
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
          handleDelete(e.target.name);
        }}
        className={css.delete}
      >
        Delete
      </button>
    </li>
  ));
};
