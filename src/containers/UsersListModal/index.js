import { connect } from 'react-redux';

import { getUsers, getProjectById } from '../../redux/selectors';
import { updateProject, fetchUsers, fetchProjects } from '../../redux/actions';

import UsersListModal from '../../components/UsersListModal';

const mapStateToProps = (state, ownProps) => ({
  users: getUsers(state),
  project: getProjectById(state, ownProps.roleValues.projectId),
});

const mapDispatchToProps = {
  updateProject,
  fetchUsers,
  fetchProjects,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UsersListModal);
