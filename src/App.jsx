import { Form } from "./Form/Form";
import { Input } from "./inputs/Input";
import { ContactRender } from "./ContactRender/ConstactRender";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContactsThunk } from "./store/Slice/contactsSlice";

import { getIsLoading } from "./store/selectors";
import LoaderExampleText from "./Loaders/LoaderExampleText";

export const App = () => {
  const isLoading = useSelector(getIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(isLoading);
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
            {isLoading && <LoaderExampleText />}
            {!isLoading && <ContactRender />}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
