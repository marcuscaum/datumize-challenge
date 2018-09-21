import { connect } from 'react-redux';

import { getUsers } from '../../redux/selectors';
import { createUser, deleteUser } from '../../redux/actions';

import UsersPage from '../../pages/Users';

const mapStateToProps = state => ({
  users: getUsers(state),
});

export default connect(
  mapStateToProps,
  { createUser, deleteUser },
)(UsersPage);
