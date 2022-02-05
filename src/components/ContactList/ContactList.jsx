import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";

import selectors from "../../redux/contacts/contacts-selectors";
import * as actions from "../../redux/contacts/contacts-actions";

import {
  BtnDelete,
  ContactsList,
  Contact,
  ContactData,
} from "./ContactList.styled";

function ContactList() {
  const filteredContacts = useSelector(selectors.filteredContacts);
  const dispatch = useDispatch();

  return (
    <ContactsList>
      {filteredContacts.map(({ id, name, number }) => (
        <Contact key={id}>
          <ContactData>{name}</ContactData>
          <ContactData>{number}</ContactData>
          <BtnDelete
            type="button"
            onClick={() => dispatch(actions.deleteContact(id))}
          >
            Delete
          </BtnDelete>
        </Contact>
      ))}
    </ContactsList>
  );
}

export default ContactList;

ContactList.propTypes = {
  filteredContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func,
};
