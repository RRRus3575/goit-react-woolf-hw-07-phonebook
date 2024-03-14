import { Form } from "./Form/Form";
import { Input } from "./inputs/Input";
import { ContactRender } from "./ContactRender/ConstactRender";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getContactsThunk } from "./store/Slice/contactsSlice";

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  return (
    <div
      style={{
        margin: 50,
      }}
    >
      <div>
        <h1>Phonebook</h1>
        <Form />
      </div>
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <h2>Contacts</h2>
          <Input
            type={"text"}
            name={"filter"}
            label={"Find contacts by name"}
          />
          <ul>
            <ContactRender />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
