import { connect } from 'react-redux';

import { getUsers } from '../../redux/selectors';
import { createActions, deleteActions } from '../../redux/actions';

import UsersPage from '../../pages/Users';

const mapStateToProps = state => ({
  users: getUsers(state),
});

const mapDispatchToProps = {
  createUser: createActions.user,
  deleteUser: deleteActions.user,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UsersPage);
