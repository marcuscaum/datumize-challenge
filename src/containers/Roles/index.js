import { connect } from 'react-redux';

import { getRoles } from '../../redux/selectors';
import { createRole, deleteRole } from '../../redux/actions';

import RolesPage from '../../pages/Roles';

const mapStateToProps = state => ({
  roles: getRoles(state),
});

export default connect(
  mapStateToProps,
  { createRole, deleteRole },
)(RolesPage);
