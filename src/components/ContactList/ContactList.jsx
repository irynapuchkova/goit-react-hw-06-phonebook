import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as actions from "../../redux/contacts/contacts-actions";

import {
  BtnDelete,
  ContactsList,
  Contact,
  ContactData,
} from "./ContactList.styled";

function ContactList({ contacts, deleteContact }) {
  return (
    <ContactsList>
      {contacts.map(({ id, name, number }) => (
        <Contact key={id}>
          <ContactData>{name}</ContactData>
          <ContactData>{number}</ContactData>
          <BtnDelete type="button" onClick={() => deleteContact(id)}>
            Delete
          </BtnDelete>
        </Contact>
      ))}
    </ContactsList>
  );
}

const filterContacts = (contacts, filter) => {
  const normalisedFilter = filter.toLowerCase();

  return contacts.filter((contact) =>
    contact.name.toLowerCase().includes(normalisedFilter)
  );
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: filterContacts(items, filter),
});

const mapDispachToProps = (dispatch) => ({
  handleFilter: (value) => dispatch(actions.filter(value)),
  deleteContact: (id) => dispatch(actions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispachToProps)(ContactList);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func,
};
