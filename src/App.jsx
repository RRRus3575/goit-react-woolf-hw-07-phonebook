import { Form } from "./Form/Form";
import { Input } from "./inputs/Input";
import { ContactRender } from "./ContactRender/ConstactRender";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContactsThunk } from "./store/Slice/contactsSlice";

import { getContacts, getError, getIsLoading } from "./store/selectors";
import LoaderExampleText from "./Loaders/LoaderExampleText";

export const App = () => {
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const contacts = useSelector(getContacts);
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
          {error.length > 0 && <p>{error}</p>}
          {isLoading && <LoaderExampleText />}
          {!isLoading && error.length < 1 && contacts.length < 1 && (
            <p>
              There are no contacts yet, you can add a new contact in the form
              above 😊
            </p>
          )}
          {!isLoading && error.length < 1 && <ContactRender />}
        </div>
      </div>
    </div>
  );
};

export default App;
