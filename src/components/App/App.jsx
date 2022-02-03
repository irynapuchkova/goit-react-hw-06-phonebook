// import { connect } from "react-redux";

import ContactForm from "../ContactForm/ContactForm";
import Filter from "../Filter/Filter";
import ContactList from "../ContactList/ContactList";
// import * as actions from "../../redux/contacts/contacts-actions";
import { Title, FormSet } from "./App.styled";

// contacts: [
//       { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
//       { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
//       { id: "id-3", name: "Eden Clements", number: "645-17-79" },
//       { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
// ],

export default function App() {
  // useEffect(() => {
  //   window.localStorage.setItem("contacts", JSON.stringify(contacts));
  // }, [contacts]);

  // const formSubmitHandle = ({ name, number }) => {
  //   const contactsNames = contacts.map((contact) => contact.name);

  //   if (contactsNames.includes(name)) {
  //     return alert(`${name} is already in contacts`);
  //   }

  //   const newContact = {
  //     id: shortid.generate(),
  //     name,
  //     number,
  //   };

  //   setContacts((prevState) => [newContact, ...prevState]);
  // };

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

// const mapStateToProps = (state) => ({
//   items: state.contacts.items,
//   filter: state.contacts.filter,
// });

// const mapDispachToProps = (dispatch) => ({
//   // formSubmitHandle: (value) => dispatch(actions.submitForm(value)),
// });

// export default connect(mapStateToProps, mapDispachToProps)(App);
