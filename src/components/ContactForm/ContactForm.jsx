import PropTypes from "prop-types";
import { useState } from "react";
import { connect } from "react-redux";
import * as actions from "../../redux/contacts/contacts-actions";
import { Form, Input, BtnSubmit } from "./ContactForm.styled";

function ContactForm({ onSubmit }) {
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
  items: state.contacts.items,
  filter: state.contacts.filter,
});

const mapDispachToProps = (dispatch) => ({
  onSubmit: (value) => dispatch(actions.submitForm(value)),
});

export default connect(mapStateToProps, mapDispachToProps)(ContactForm);

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
};
