import { connect } from 'react-redux';

import { getProjects, getRoles, getUsers } from '../../redux/selectors';
import {
  fetchProjects, fetchRoles, createProject, deleteProject,
} from '../../redux/actions';

import ProjectsPage from '../../pages/Projects';

const mapStateToProps = state => ({
  projects: getProjects(state),
  roles: getRoles(state),
  users: getUsers(state),
});

const mapDispatchToProps = {
  createProject,
  deleteProject,
  fetchProjects,
  fetchRoles,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProjectsPage);
