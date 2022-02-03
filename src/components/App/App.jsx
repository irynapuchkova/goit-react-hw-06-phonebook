import ContactForm from "../ContactForm/ContactForm";
import Filter from "../Filter/Filter";
import ContactList from "../ContactList/ContactList";
import { Title, FormSet } from "./App.styled";

export default function App() {
  return (
    <FormSet>
      <Title>Phonebook</Title>
      <ContactForm />
      <Title>Contacts</Title>
      <Filter />
      <ContactList />
    </FormSet>
  );
}
