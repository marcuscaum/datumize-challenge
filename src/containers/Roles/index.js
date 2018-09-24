import { connect } from 'react-redux';

import { getRoles } from '../../redux/selectors';
import { createRole, deleteRole, fetchRoles } from '../../redux/actions';

import RolesPage from '../../pages/Roles';

const mapStateToProps = state => ({
  roles: getRoles(state),
});

const mapDispatchToProps = {
  createRole,
  deleteRole,
  fetchRoles,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RolesPage);
