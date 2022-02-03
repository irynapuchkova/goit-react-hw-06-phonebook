import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as actions from "../../redux/contacts/contacts-actions";
import { Title, Input, Wrapper } from "./Filter.styled";

function Filter({ value, handleFilter }) {
  return (
    <Wrapper>
      <Title>Find contacts by name</Title>
      <Input
        type="text"
        placeholder="Filter"
        value={value}
        onChange={handleFilter}
      />
    </Wrapper>
  );
}

const mapStateToProps = (state) => ({
  value: state.contacts.filter,
});

const mapDispachToProps = (dispatch) => ({
  handleFilter: (e) => dispatch(actions.filter(e.currentTarget.value)),
});

export default connect(mapStateToProps, mapDispachToProps)(Filter);

Filter.propTypes = {
  value: PropTypes.string,
  handleFilter: PropTypes.func,
};
