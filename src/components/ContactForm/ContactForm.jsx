import PropTypes from "prop-types";
import { useState } from "react";
import { connect } from "react-redux";
import * as actions from "../../redux/contacts/contacts-actions";
import { Form, Input, BtnSubmit } from "./ContactForm.styled";

// contacts: [
//       { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
//       { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
//       { id: "id-3", name: "Eden Clements", number: "645-17-79" },
//       { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
// ],

function ContactForm({ onSubmit, contacts }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const contact = { name, number };

  const handleInputValue = ({ currentTarget: { name, value } }) => {
    name === "name" ? setName(value) : setNumber(value);
  };

  const resetState = () => {
    setName("");
    setNumber("");
  };

  const onFormSubmit = (e) => {
    e.preventDefault();

    const existedNames = contacts.map((contact) => contact.name);
    if (existedNames.includes(contact.name)) {
      return alert(`${contact.name} is already in contacts`);
    }

    onSubmit(contact);
    resetState();
  };

  return (
    <Form onSubmit={onFormSubmit}>
      <Input
        type="text"
        name="name"
        placeholder="Name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={name}
        onChange={handleInputValue}
      />
      <Input
        type="tel"
        name="number"
        placeholder="Number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={number}
        onChange={handleInputValue}
      />
      <BtnSubmit type="submit">Add contact</BtnSubmit>
    </Form>
  );
}

const mapStateToProps = (state) => ({
  contacts: state.contacts.items,
  filter: state.contacts.filter,
});

const mapDispachToProps = (dispatch) => ({
  onSubmit: (value) => dispatch(actions.submitForm(value)),
});

export default connect(mapStateToProps, mapDispachToProps)(ContactForm);

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
