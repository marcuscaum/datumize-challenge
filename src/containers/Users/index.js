import { connect } from 'react-redux';

import { getUsers } from '../../redux/selectors';
import { createUser, deleteUser, fetchUsers } from '../../redux/actions';

import UsersPage from '../../pages/Users';

const mapStateToProps = state => ({
  users: getUsers(state),
});

const mapDispatchToProps = {
  createUser,
  deleteUser,
  fetchUsers,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UsersPage);
