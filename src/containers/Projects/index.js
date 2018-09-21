import { connect } from 'react-redux';

import { getProjects, getRoles, getUsers } from '../../redux/selectors';
import { createProject, deleteProject } from '../../redux/actions';

import ProjectsPage from '../../pages/Projects';

const mapStateToProps = state => ({
  projects: getProjects(state),
  roles: getRoles(state),
  users: getUsers(state),
});

export default connect(
  mapStateToProps,
  { createProject, deleteProject },
)(ProjectsPage);
