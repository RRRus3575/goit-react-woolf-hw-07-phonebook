import { useDispatch, useSelector } from "react-redux";
import css from "./Input.module.css";
import { filterContacts } from "../store/Slice/filterSlice";

export const Input = ({ label, name, value, type, onChange }) => {
  const dispatch = useDispatch();

  const handleSearch = ({ target: { value: value } }) => {
    dispatch(filterContacts(value));
  };
  return (
    <label className={css.label}>
      {label}
      <input
        className={css.input}
        onChange={handleSearch}
        name={name}
        value={value}
        type={type}
        required
      />
    </label>
  );
};
