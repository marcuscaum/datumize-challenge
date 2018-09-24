import { connect } from 'react-redux';

import { getProjects, getRoles, getUsers } from '../../redux/selectors';
import {
  createActions,
  deleteActions,
  assignUserToProject,
  fetchProjects,
} from '../../redux/actions';

import ProjectsPage from '../../pages/Projects';

const mapStateToProps = state => ({
  projects: getProjects(state),
  roles: getRoles(state),
  users: getUsers(state),
});

const mapDispatchToProps = {
  createProject: createActions.project,
  deleteProject: deleteActions.project,
  assignUserToProject,
  fetchProjects,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProjectsPage);
