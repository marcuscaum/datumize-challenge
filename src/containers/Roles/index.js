import { connect } from 'react-redux';

import { getRoles } from '../../redux/selectors';
import { createActions, deleteActions } from '../../redux/actions';

import RolesPage from '../../pages/Roles';

const mapStateToProps = state => ({
  roles: getRoles(state),
});

const mapDispatchToProps = {
  createRole: createActions.role,
  deleteRole: deleteActions.role,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RolesPage);
